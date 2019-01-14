import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import StartScreen from './StartScreen';
import AddPlayersScreen from './SetPlayersScreen';
import { MonoText } from '../components/StyledText';
import players from '../players';
import { createStackNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import StartGameScreen from './StartGameScreen';

const AppNavigator = createStackNavigator(
  {
    Start: StartScreen,
    //AddPlayerNames: AddPlayersScreen,
    StartGame: StartGameScreen,
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state={
    players
  }


  render() {
    return (
      <AppContainer
        //onNavigationStateChange={handleNavigationChange}
        //uriPrefix="/app"
        screenProps={{
          players: this.state.players,
          addPlayerNames: this.addPlayerNames
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
