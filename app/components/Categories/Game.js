import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const list = require('./../../data/en').ru

export default class Game extends Component {
  fillArrayWithRegions() {
    let allRegions = []
    for (let i = 0; i < 200; i++) {
      i = i.toString()
      if (i.length < 2) {
        i = '0' + i
      }
      if (list[i]) {
        allRegions.push(i)
      }
    }
    allRegions.push("750")
    allRegions.push("777")
    return allRegions
  }

  generateVariants() {
    allRegions = this.fillArrayWithRegions()
    let variants = [],
      variantIndex,
      variantObj
    for (let i = 0; i < 4; i++) {
      variantIndex = Math.floor(Math.random() * allRegions.length)
      variantObj = list[allRegions[variantIndex]]
      variants.push({index: variantIndex, num: allRegions[variantIndex], val: variantObj})
    }
    // let currentIndex = variants.length, temporaryValue, randomIndex;
    // while (0 !== currentIndex) {
    //   randomIndex = Math.floor(Math.random() * currentIndex);
    //   currentIndex -= 1;
    //   temporaryValue = variants[currentIndex];
    //   variants[currentIndex] = variants[randomIndex];
    //   variants[randomIndex] = temporaryValue;
    // }
    return variants
  }

  render() {
    let variants = this.generateVariants()
    return (
      <View style={styles.container}>
        <Text>{variants[0].num}</Text>
        <Text>{variants[0].val.name}</Text>
        <Text>{variants[1].val.name}</Text>
        <Text>{variants[2].val.name}</Text>
        <Text>{variants[3].val.name}</Text>
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
