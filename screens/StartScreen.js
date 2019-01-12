import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';


export default class StartScreen extends Component {
    constructor () {
        super()
    }

    static navigationOptions = {
        header: null,
    };

    startGame() {
        this.props.navigation.navigate('AddPlayerNames');
    };
  
    render() {
        return (
            <View style={ styles.container }>
                    <View style={styles.mainWrapper}>
                        <View>
                            <Text>Wanna play a game?</Text>
                        </View>
                        <Button 
                            buttonStyle={styles.button}
                            onPress={() => this.startGame()}
                            title="Start!" />
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