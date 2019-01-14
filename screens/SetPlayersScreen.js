import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, FormLabel, FormInput} from 'react-native-elements';
import players from '../players';


export default class SetPlayersScreen extends Component {
    state = {
        playerOneName: "",
        playerTwoName: ""
    }

    handleSubmit = () => {
        players[0].name = this.state.playerOneName;
        players[1].name = this.state.playerTwoName;
        this.props.navigation.navigate('ChooseStartingPlayer');
    };

    render() {
        return (
            <View style={ styles.container }>
                    <View style={styles.mainWrapper}>
                        <Text>Fill in players names!</Text>
                        <View>
                            <FormLabel>Player 1 Name</FormLabel>
                            <FormInput value={this.state.playerOneName}
                            onChangeText={(playerOneName) => this.setState({playerOneName})}
                            placeholder="Name of Player 1" />
                        </View>
                        <View>
                            <FormLabel>Player 2 Name</FormLabel>
                            <FormInput value={this.state.playerTwoName}
                            onChangeText={(playerTwoName) => this.setState({playerTwoName})}
                            placeholder="Name of Player 2"/>
                        </View>
                        <Button 
                            title="Start"
                            onPress={this.handleSubmit} />
                    </View>
            </View>
        );
    }
    
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});