/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';

const Story = (props) => {
    return (
        <View style={{alignItems:'center'}}>
            <Image source={{uri:'https://scontent-cgk1-1.cdninstagram.com/v/t51.2885-19/s320x320/255234123_1101292713739616_2707996176634276728_n.jpg?_nc_ht=scontent-cgk1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=r_v0-rkm8PsAX9F6dmH&edm=ABfd0MgBAAAA&ccb=7-4&oh=ab651154051fedd28b93e8a62a3d1876&oe=6197D32F&_nc_sid=7bff83'}} style={{width:100, height:100, borderRadius:100 / 2, margin:4}} />
            <Text>{props.title}</Text>
        </View>
    );
};

const PropsDinamis = () => {
   return (
       <View style={{display: 'flex'}}>
        <Text style={fontText.fontText}>Materi Props</Text>
        <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
                <Story title="Youtube" />
                <Story title="Laptop"/>
                <Story title="headset"/>
                <Story title="Jaket"/>
                <Story title="Kabel"/>
                <Story title="cINCIN"/>
            </View>
        </ScrollView>
    </View>
    );
};

const fontText = StyleSheet.create({
    fontText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        padding: 20,
        backgroundColor: 'yellow',
        marginBottom: 20,
    },
});

export default PropsDinamis;
