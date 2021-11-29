/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const BasicJavascript = () => {
  const name = 'Danang';
  let age = 24;
  const gender = true


  let hewanPeliharaan = {
      nama: 'Meo',
      jenis: 'Kucing',
      usia: 9,
      hewanLokal: true,
      orangTua: {
        jantan: 'Wew',
      },
  }

  const sapaOrang = (name, age) => {
    return console.log(`Halo ${name}, umur kamu ${age}`);
  };
  sapaOrang('danang', 'awdaw')


  const namaOrang = [
    'danang',
    'wew',
    'wew',

  ]

  const testing = tesing => {
    return tesing.nama === 'Meo' ? 'Waw Amazing' : '-';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.testTitle}>Materi Basic Javascript</Text>
      <Text>{testing(hewanPeliharaan)}</Text>
      {namaOrang.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    testTitle: {
        textAlign: 'center',
    },
});
