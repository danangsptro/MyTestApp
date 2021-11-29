/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles1.Text}>Halo</Text>
      <View
        style={{
          backgroundColor: '#f0932b',
          padding: 10,
          width: 100,
          height: 100,
          borderWidth: 5,
          borderColor: '#000',
          margin: 10,
        }}
      />

      <View style={{width: 212, backgroundColor: '#f2f2f2'}}>
        <View style={{padding: 10}}>
          <Image
            source={{uri: 'https://placeimg.com/100/100/animals'}}
            style={{width: 188, height: 107, borderRadius: 8}}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              marginTop: 16,
            }}>
            Anjing Galak
          </Text>
          <Text style={{marginTop: 10, color: '#f2994a', fontWeight: 'bold'}}>
            Rp. 12.000.000-,
          </Text>
          <Text style={{marginTop: 10}}>Jakarta Utara</Text>
          <View
            style={{
              backgroundColor: '#6fcf97',
              borderRadius: 10,
              paddingVertical: 6,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'white',
              }}>
              BELI
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const styles1 = StyleSheet.create({
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'black',
    padding: 10,
  },
});

export default StylingReactNativeComponent;
