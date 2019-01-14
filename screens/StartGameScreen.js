import React, { Component } from 'react';
import { StyleSheet, View, Button,Text } from 'react-native';


export default class StartGameScreen extends Component {
    constructor () {
        super()
    }

    static navigationOptions = {
        header: null,
    };
    state = {
        count1: 0,
        count2: 0,
        count3: 0,
        pointsP1: 9,
        pointsP2: 9,
        currentPlayer:1,
        throw: 1,
        totalPoints: 0,
        totalPointsP1:0,
        totalPointsP2:0,
        lead:1,
      };
    
      getRandomNumber() {
        const rand1 = Math.round(Math.random() * 6) + 1;
        this.setState({
          count1: rand1,
        })
        const numbers = [rand1]
        this.getTotalPoints(numbers);
      }
    
      getTotalPoints(numbers) {
        for (var i = 0, len = numbers.length; i < len; i++) {
          if(numbers[i] == 1){
            numbers[i] = 100;
          }
          if(numbers[i] == 6){
            numbers[i] = 60;
          }
        }
        //add all values in array
        const total = numbers.reduce((a, b) => a + b, 0);
        this.setState({
          totalPoints: total,
        });
      }
    
      switchTurn(){
        // First function setPoints then function checkIfNextRound
        this.setPoints().then(()=>{this.checkIfNextRound();});
      }
    
      setPoints(){
        const currentPlayer = this.state.currentPlayer;
        if(currentPlayer == 1){
          this.setState({
            totalPointsP1: this.state.totalPoints,
            currentPlayer: 2,
          });
        } else {
          this.setState({
            totalPointsP2: this.state.totalPoints,
            currentPlayer: 1,
          });
        }
    
        this.setState({
          count1: 0,
          count2: 0,
          count3: 0,
        });
    
        var promise = new Promise(function(resolve, reject) {
          resolve('finished');
        });
    
        return promise;
      }
    
      checkIfNextRound(){
        if(this.state.totalPointsP1 !== 0 && this.state.totalPointsP2 !== 0){
          console.log("Ending round");
          this.endRound();
        }
      }
    
      endRound(){
        if(this.state.totalPointsP1 > this.state.totalPointsP2){
          const newPoints = this.state.pointsP1 - 1;
          this.setState({
            pointsP1: newPoints,
          });
        } else {
          const newPoints = this.state.pointsP2 - 1;
          this.setState({
            pointsP2: newPoints,
          });
        }
    
        this.setState({
          totalPointsP1: 0,
          totalPointsP2: 0,
        });
          
      }
    render() {
        return (
            <View style={ styles.container }>
                    <View style={styles.mainWrapper}>
                        <View>
                            <Text>Roll dice to decide the starting player.</Text>
                        </View>
                        <Text style={styles.heading}>Current player: {this.state.currentPlayer}</Text>
        
                        <Button style={styles.button} onPress={() => this.getRandomNumber()} title="Throw dice" />
                        <View style={styles.flexRow}>
                        <Text style={styles.diceNumbers}>{this.state.count1} </Text>
                        </View>
                        <Text title="totalPoints">Total points throw: {this.state.totalPoints}</Text>

                        <Text>Score of player 1: {this.state.totalPointsP1} player 2: {this.state.totalPointsP2}</Text>

                        <Text>Player who gets to start: player 1: {this.state.lead}</Text>
                    </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    mainWrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
});