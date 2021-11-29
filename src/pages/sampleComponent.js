/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { Component } from 'react';
import {View, Text, Image, TextInput, Button} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'black',
          backgroundColor: 'yellow',
          padding: 10,
        }}>
        Welcome
      </Text>
      <View style={{width: 80, height: 90, backgroundColor: '#f0932b'}} />
      <Text>Hello World</Text>
      <Test />
      <Text>Hello Hay</Text>
      <Gambar />
      <BoxGreen />
      <View style={{padding: 10}}>
        <TextInput
          style={{borderWidth: 1, paddingVertical: 8, marginTop: 10}}
        />
        <Button title="Click Me" style={{marginTop: 8}} />
      </View>
      <Profile />
    </View>
  );
};

// Function Component
const Test = () => {
  return <Text>Welcome To React Native</Text>;
};

const Gambar = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/any'}}
      style={{width: 100, height: 100}}
    />
  );
};

// Class Component
class BoxGreen extends Component {
  render() {
    return <Text>Ini adalah component</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 40}}
        />
        <Text>Nama : Hay</Text>
      </View>
    );
  }
}

export default SampleComponent;
