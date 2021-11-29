/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const callApi = () => {

  console.log('hahah');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);

  const test = () =>  {
    return console.log('test');
  };

  return (
    <View style={style.container}>
      <Text style={style.textTitle}>Call API vanillaJs</Text>
    </View>
  );
};


export default callApi;

const style = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
