import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

const list = require('./../../data/en').ru

import * as firebase from 'firebase'

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      correct: 0,
      wrong: 0
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('user').then((user_data) => {
      let user = JSON.parse(user_data)
      if (user) {
        firebase.database().ref(`${user.uid}`).on('value', (snapshot) => {
          this.setState({
            correct: snapshot.val().score.correct,
            wrong: snapshot.val().score.wrong
          })
        })
      }
    })
  }

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
    let allRegions = this.fillArrayWithRegions()
    let variants = [],
      variantIndex,
      variantObj
    for (let i = 0; i < 4; i++) {
      variantIndex = Math.floor(Math.random() * allRegions.length)
      variantObj = list[allRegions[variantIndex]]
      variants.push({index: variantIndex, num: allRegions[variantIndex], val: variantObj, isCorrect: false})
    }
    let rightVariant = Math.floor(Math.random() * 4)
    variants[rightVariant].isCorrect = true
    return variants
  }

  findCorrectAnswer(variants, type) {
    let result
    for (let i = 0; i < 4; i++) {
      if (variants[i].isCorrect == true) {
        switch (type) {
          case 'string':
            result = variants[i].val.name
            break;
          case 'integer':
            result = variants[i].num
            break;
        }
      }
    }
    return result
  }

  checkAnswer (variants, correctAnswer, answer) {
    let currentCount
    let wrongAnswers = this.state.wrong
    let correctAnswers = this.state.correct
    if (correctAnswer == variants[answer - 1].val.name) {
      currentCount = this.state.correct
      currentCount++
      AsyncStorage.getItem('user').then((user) => {
        let u = JSON.parse(user)
        if (u) {
          firebase.database().ref(`${u.uid}`).set({
            score: {
              correct: currentCount,
              wrong: wrongAnswers
            }
          })
        }
      })
      return this.setState({correct: currentCount})
    } else {
      currentCount = this.state.wrong
      currentCount++
      AsyncStorage.getItem('user').then((user) => {
        let u = JSON.parse(user)
        if (u) {
          firebase.database().ref(`${u.uid}`).set({
            score: {
              correct: correctAnswers,
              wrong: currentCount
            }
          })
        }
      })
      return this.setState({wrong: currentCount})
    }
  }

  render() {
    let variants = this.generateVariants()
    let correctAnswer = this.findCorrectAnswer(variants, 'string')
    let displayedNumber = this.findCorrectAnswer(variants, 'integer')
    return (
      <View style={styles.container}>
        <View style={styles.numberContainer}>
          <Text style={styles.displayedNumber}>{displayedNumber}</Text>
        </View>
        <View style={styles.variants}>
          <Text style={styles.text} onPress = {() => this.checkAnswer(variants, correctAnswer, 1)}>
            {variants[0].val.name}
          </Text>
          <Text style={styles.text} onPress = {() => this.checkAnswer(variants, correctAnswer, 2)}>
            {variants[1].val.name}
          </Text>
          <Text style={styles.text} onPress = {() => this.checkAnswer(variants, correctAnswer, 3)}>
            {variants[2].val.name}
          </Text>
          <Text style={styles.text} onPress = {() => this.checkAnswer(variants, correctAnswer, 4)}>
            {variants[3].val.name}
          </Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.correct}>{this.state.correct}</Text>
          <Text style={styles.wrong}>{this.state.wrong}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayedNumber: {
    fontSize: 180,
    fontFamily: 'Avenir'
  },
  numberContainer: {
    height: 250,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddddd'
  },
  variants: {
    flex: 3,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Avenir',
    fontSize: 25,
    color: '#dddddd',
    textAlign: 'center',
    marginVertical: 10
  },
  counter: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  correct: {
    fontFamily: 'Avenir',
    fontSize: 50,
    color: '#0fb700'
  },
  wrong: {
    fontFamily: 'Avenir',
    fontSize: 50,
    color: '#c1000c'
  }
});
