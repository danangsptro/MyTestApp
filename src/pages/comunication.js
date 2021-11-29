/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../components/Cart/index';
import Product from '../components/Product';

const comunication = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View>
      <Text style={test.container}>Comunication</Text>
      <Cart quantity={totalProduct} />
      <Product onButtonPress ={() => setTotalProduct(totalProduct + 1)} />
    </View>
  );
};

const test = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
  },
});

export default comunication;
