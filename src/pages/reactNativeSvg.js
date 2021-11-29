/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IllustrationMybApp from '../image/undraw_programming_re_kg9v.svg';

const reactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.testTitle}>
        Materi Menggunakan File SVG didalam React Native
      <IllustrationMybApp width={200} height={200} />
      </Text>
    </View>
  );
};

export default reactNativeSvg;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  testTitle: {
    textAlign: 'center',
  },
});
