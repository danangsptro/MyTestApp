/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

// class MateriFlexBox extends Component {
// constructor(props) {
//     super(props);
//     console.log('===> constructor');

//     this.state = {
//         subscriber : 100,
//         name : 'Anjing Galak',
//     };
// }

// componentDidMount() {
//     console.log('===> componentDidMount');

//     setTimeout(() => {
//         this.setState({
//             subscriber : 400,
//         });
//     }, 4000);
// }

// componentDidUpdate() {
//     console.log('===> componentDidUpdate');
// }

// componentWillUnmount() {
//     console.log('===> componentWillUnmount');
// }

// render() {
//     console.log('==> render');
//     return (
//         <View>
//             <Text style={styleText.Text}>Materi Flex Box</Text>
//             <View style={flexDirection.flexDirection3}>
//                 <Image source={{uri: 'https://placeimg.com/100/100/animals'}} style={styleText.Image} />
//                 <View style={styleText.Profil}>
//                     <Text style={styleText.TextProfile}>{this.state.name}</Text>
//                     <Text style={styleText.TextProfile}>Umur {this.state.subscriber} </Text>
//                 </View>
//             </View>
//             <View style={flexDirection.flexDirection2}>
//                 <Text style={styleText.textTitle}>Red</Text>
//                 <Text style={styleText.textTitle}>Yellow</Text>
//                 <Text style={styleText.textTitle}>Green</Text>
//                 <Text style={styleText.textTitle}>Blue</Text>
//             </View>
//             <View style={flexDirection.flexDirection}>
//                 <View style={{backgroundColor:'red',width:50, height:50}} />
//                 <View style={{backgroundColor:'yellow',width:50, height:50}} />
//                 <View style={{backgroundColor:'green',width:50, height:50}} />
//                 <View style={{backgroundColor:'blue',width:50, height:50}} />
//             </View>
//         </View>
//     );
//   }
// }

const styleText = StyleSheet.create({
    Text: {
        fontSize: 25,
        textAlign: 'center',
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
    },
    TextProfile: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },
    Image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 50,
    },
    Profil: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    textTitle: {
        fontSize: 14,
        color: 'white',
    },

});

const flexDirection = StyleSheet.create({
    flexDirection: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        padding: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    flexDirection2: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 5,
        justifyContent: 'space-between',
        backgroundColor: 'salmon',
    },
    flexDirection3: {
        flexDirection: 'row',
    },
});


// Functional Component
const MateriFlexBox = () => {
    const [subscriber, setSubscriber] = useState(90);
    useEffect(() => {
        console.log('===> did mount');

        setTimeout(() => {
            setSubscriber(100);
        }, 2000);
        return () => {
            console.log('===> did update');
        };
    }, [subscriber]);

    // useEffect(() => {
    //     console.log('===> did update');
    //     setTimeout(() => {
    //         setSubscriber(100);
    //     }, 2000);
    // }, [subscriber]);

    return (
        <View>
            <Text style={styleText.Text}>Materi Flex Box</Text>
            <View style={flexDirection.flexDirection3}>
                <Image source={{uri: 'https://placeimg.com/100/100/animals'}} style={styleText.Image} />
                <View style={styleText.Profil}>
                    <Text style={styleText.TextProfile}>Anjing Galak</Text>
                    <Text style={styleText.TextProfile}>Umur {subscriber} </Text>
                </View>
            </View>
            <View style={flexDirection.flexDirection2}>
                <Text style={styleText.textTitle}>Red</Text>
                <Text style={styleText.textTitle}>Yellow</Text>
                <Text style={styleText.textTitle}>Green</Text>
                <Text style={styleText.textTitle}>Blue</Text>
            </View>
            <View style={flexDirection.flexDirection}>
                <View style={{backgroundColor:'red',width:50, height:50}} />
                <View style={{backgroundColor:'yellow',width:50, height:50}} />
                <View style={{backgroundColor:'green',width:50, height:50}} />
                <View style={{backgroundColor:'blue',width:50, height:50}} />
            </View>
        </View>
    );

};
export default MateriFlexBox;
