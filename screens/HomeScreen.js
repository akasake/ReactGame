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
    AddPlayerNames: AddPlayersScreen,
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

  addPlayerNames = newPlayer => {
    players[0].name = newPlayer.playerOneName;
    players[1].name = newPlayer.playerTwoName;
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

  /*render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };*/
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
