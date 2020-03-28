# monster_mike_project
import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Constants from 'expo-constants';
// import Jokes from "./Components/Jokes"

export default function App(){
  return (
    <View style={style.container}>

    <Text style = {style.instructions}>
      Menu
    </Text>

    <TouchableOpacity
    onPress = {() => alert('Api Joke Funciton Coming Soon')}
    style = {{ backgroundColor: '' }}>
    <Text style = {{ fontSize: 20, color: 'black'}}>Still Have Nothing To Do? Click me</Text>
    </TouchableOpacity>

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions:{
    color: 'black',
    fontSize: 24, 
    marginHorizontal: 15, 
    marginBottom: 10,
  }
});
