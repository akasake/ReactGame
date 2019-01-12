import React, { Component } from 'react';
import { StyleSheet, View, Animated, Button,Text } from 'react-native';


export default class StartGameScreen extends Component {
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
                            <Text>Roll dice to decide the starting player.</Text>
                        </View>
                        <Button 
                            buttonStyle={styles.button}
                            onPress={() => this.startGame()}
                            title="Roll" />
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