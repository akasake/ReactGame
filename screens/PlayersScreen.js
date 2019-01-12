import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';


export default class PlayersScreen extends React.Component {
  static navigationOptions = {
    title: 'Players',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <Player name='pham' number='1' score='9'/>
      </ScrollView>
    );
  }
}

class Player extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Player {this.props.number}: {this.props.name}</Text> 
        <Text>Score: {this.props.score} </Text>       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
