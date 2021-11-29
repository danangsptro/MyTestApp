/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Counter = () => {
    const [number, setNumber] = useState(4);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
    state = {
        number: 0,

    }
    render() {
        return (
            <View style={styles.titleClass}>
                <Text>Class Components</Text>
                <Text>{this.state.number}</Text>
                <Button title="Tambah" onPress= {() => this.setState({number: this.state.number + 1 })} />
            </View>
        );
    }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Materi Component Dinamis dengan state</Text>
      <Text style={styles.titleClass}>Function Component (Hooks)</Text>
      <Counter />
      <Counter />
      <CounterClass />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 20,
  },
  titleClass: {
      marginTop: 35,
  },
});
