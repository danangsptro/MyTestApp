/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const Product = (props) => {
  return (
    <View style={{width: 212, backgroundColor: '#f2f2f2'}}>
      <View style={{padding: 10}}>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={styles.productName}>Anjing Galak</Text>
        <Text style={styles.productPrice}>Rp. 12.000.000-,</Text>
        <Text style={styles.location}>Jakarta Utara</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
            <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>BELI</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    productName: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 16,
    },
    productPrice: {
        fontWeight: 'bold',
        marginTop: 10,
        color: '#f2994a',
    },
    location: {
        marginTop: 10,
    },
    buttonWrapper:{
        backgroundColor: '#6fcf97',
        borderRadius: 10,
        paddingVertical: 6,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
});


export default Product;
