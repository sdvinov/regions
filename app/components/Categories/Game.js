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
    console.log(allRegions)
    let variants = []
    let rightVariant = Math.floor(Math.random() * allRegions.length)

    variants.push(allRegions[rightVariant])
    variants[0] = list[rightVariant]

    for (region = 0; region < 3; region++) {
      let variant = Math.floor(Math.random() * allRegions.length)
      variant = variant.toString()
      if (variant.length < 0) {
        variant = '0' + variant
      }
      variants.push(allRegions[variant])
      console.log(variant)
      variants[region + 1] = list[variant]
    }
    // let currentIndex = variants.length, temporaryValue, randomIndex;
    // while (0 !== currentIndex) {
    //   randomIndex = Math.floor(Math.random() * currentIndex);
    //   currentIndex -= 1;
    //   temporaryValue = variants[currentIndex];
    //   variants[currentIndex] = variants[randomIndex];
    //   variants[randomIndex] = temporaryValue;
    // }
    console.log(variants)
    return variants
  }

  render() {
    let variants = this.generateVariants()
    return (
      <View style={styles.container}>

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
