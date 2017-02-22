import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const list = require('./../../data/en').ru

generateNumber() {
  generatedValue = Math.floor(Math.random() * allNumbers.length)
  checkLength(generatedValue)
  return generatedValue
}

checkLength(value) {
  if (value.length < 2) {
    value = '0' + value
  }
  return value
}

let allNumbers = []
let variants = []

for (let number = 0; number < 200; number++) {
  number = number.toString()
  checkLength(number)
  if (list[number]) {
    allNumbers.push(number)
  }
}

let rightVariant = Math.floor(Math.random() * allNumbers.length)
if (rightVariant.length < 2) {
  rightVariant = '0' + rightVariant
}
variants.push(rightVariant)

for (region = 0; region < 3; region++) {
  let variant = Math.floor(Math.random() * allNumbers.length)
  variants.push(variant)
}

export default class Game extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{variant1.name}</Text>
        <Text>{variant2.name}</Text>
        <Text>{variant3.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
