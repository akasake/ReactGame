import React, { Component } from 'react';
import { StyleSheet, View, Image, Button,Text, FormInput, FormLabel } from 'react-native';



export default class SetPlayersScreen extends Component {
    constructor () {
        super();
        this.state = {
            playerOneName: '',
            playerTwoName: ''
        }
    }
    static navigationOptions = {
        header: null,
    };
    handleSubmit = () => {
        this.props.onSubmit(this.state);
        this.props.navigation.navigate('AddPlayerNames');
    };
    render() {
        return (
            <View style={ styles.container }>
                    <View style={styles.mainWrapper}>
                        <View>
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
            </View>
        );
    }
    
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});