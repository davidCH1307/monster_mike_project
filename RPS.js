import React from 'react';
import { StyleSheet, TouchableOpacity ,Text, View, Button } from 'react-native';
import getQuote from './util/RandomQuoteApi';

export default class App extends React.Component {

  constructor() {
    super();
      this.state = {
        loading: true,
        quoteMeta: {},   
    }
  }


  async componentDidMount() {
    this.setState({
    quoteMeta: await getQuote(),
    })
  }
 

  render() {
  return (
    <View style={styles.container}>
      <Text>MENU</Text>
      <TouchableOpacity 
      onPress = {() => alert('Joke time')}
      style = {{backgroundColor: ' '}}>
      <Text style = {{fontSize: 20, color: 'black'}}>
      Stil Bored? Click me
      </Text>
      </TouchableOpacity>

      <Text style={styles.paragraph}>
        Rock Paper Scissors game
      </Text>
      <Button title="Play Rock Paper Scissors " onPress={() => alert('Game on its way!')}/>

<Text style={styles.paragraph}>
        Learn how to write Pig Latin
      </Text>
      <Button title="Click here to learn " onPress={() => alert('The Pig is on its way!!')}/>

    </View>
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
});