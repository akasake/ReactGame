import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Button, ScrollView  } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
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
  };

  getRandomNumbers() {
    const rand1 = Math.round(Math.random() * 6) + 1;
    const rand2 = Math.round(Math.random() * 6) + 1;
    const rand3 = Math.round(Math.random() * 6) + 1;
    this.setState({
      count1: rand1,
      count2: rand2,
      count3: rand3,
    })
    const numbers = [rand1, rand2, rand3]
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
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />

        /*<ScrollView style={styles.container}>
        <Text style={styles.heading}>Current player: {this.state.currentPlayer}</Text>
        
        <Button style={styles.button} onPress={() => this.getRandomNumbers()} title="Throw dice" />
        <View style={styles.flexRow}>
          <Text style={styles.diceNumbers}>{this.state.count1} </Text>
          <Text style={styles.diceNumbers}>{this.state.count2} </Text>
          <Text style={styles.diceNumbers}>{this.state.count3} </Text>
        </View>
        
        <Text title="totalPoints">Total points throw: {this.state.totalPoints}</Text>
        <Button style={styles.button} onPress={() => this.switchTurn()} title="End turn" />

        <Text>Total points throw player 1: {this.state.totalPointsP1} player 2: {this.state.totalPointsP2}</Text>

        <Text>Total points player 1: {this.state.pointsP1}</Text>
        <Text>Total points player 2: {this.state.pointsP2}</Text>
      </ScrollView>*/
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:40,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },

  heading: {
    fontSize:20,
    marginBottom: 20,
  },

  diceNumbers: {
    fontSize:20,
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    lineHeight: 50,
    width:50,
    height:50,
    marginLeft: 10,
    marginBottom: 20,
  },

  flexRow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,  
  },

  button: {
    
  }
});
