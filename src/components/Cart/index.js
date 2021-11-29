/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import IMGBG from '../../../pngtree-cartoon-shopping-cart-icon-download-image_1148198.jpg';

const Cart = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={IMGBG} style={styles.gambar} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  gambar: {
    width: 50,
    height: 50,
  },

  cartWrapper: {
    borderWidth: 1,
    borderColor: 'black',
    width: 93,
    height: 93,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 93 / 2,
    marginTop: 30,
  },

  wrapper: {
    padding: 10,
    alignItems: 'center',
  },

  text: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },

  notif: {
    position: 'absolute',
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
    borderRadius: 50,
    top: 0,
    right: 0,
  },
});
