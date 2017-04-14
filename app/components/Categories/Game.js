import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

// Get Russia portion from the list of regions
const list = require('./../../data/en').ru

import * as firebase from 'firebase'

export default class Game extends Component {
  constructor(props) {
    super(props)
    // Set initial state
    this.state = {
      correct: 0,
      wrong: 0
    }
  }

  // Run before component is rendered
  componentWillMount() {
    // Get logged in user from AsyncStorage
    AsyncStorage.getItem('user').then((user_data) => {
      let user = JSON.parse(user_data)
      if (user) {
        // Get wrong and correct answers count from Firebase
        firebase.database().ref(`${user.uid}`).on('value', (snapshot) => {
          this.setState({
            correct: snapshot.val().score.correct,
            wrong: snapshot.val().score.wrong
          })
        })
      }
    })
  }

  // Create the array of regions numbers
  fillArrayWithRegions() {
    let allRegions = []
    // Add values from 01 to 199
    for (let i = 0; i < 200; i++) {
      i = i.toString()
      if (i.length < 2) {
        i = '0' + i
      }
      if (list[i]) {
        allRegions.push(i)
      }
    }
    // Additionally add 750 and 777 for Moscow
    allRegions.push("750", "777")
    return allRegions
  }

  // Generate variants for test
  generateVariants() {
    // Run array creation function
    let allRegions = this.fillArrayWithRegions()
    let variants = [],
      variantIndex,
      variantObj
    // Create 4 random variants
    for (let i = 0; i < 4; i++) {
      variantIndex = Math.floor(Math.random() * allRegions.length)
      variantObj = list[allRegions[variantIndex]]
      variants.push({index: variantIndex, num: allRegions[variantIndex], val: variantObj, isCorrect: false})
    }
    // Set the right variant from existing
    let rightVariant = Math.floor(Math.random() * 4)
    variants[rightVariant].isCorrect = true
    return variants
  }

  // Manipulations with correct answer
  findCorrectAnswer(variants, type) {
    let result
    // Iterate through answers to find the right one
    for (let i = 0; i < 4; i++) {
      if (variants[i].isCorrect == true) {
        switch (type) {
          case 'string':
            // If type argument is string, return just name
            result = variants[i].val.name
            break;
          case 'integer':
            // If type argument is integer, return just number
            result = variants[i].num
            break;
        }
      }
    }
    return result
  }

  // Check answer when user picked a variant
  checkAnswer (variants, correctAnswer, answer) {
    let currentCount
    // Get the number of wrong and correct answers from state
    let wrongAnswers = this.state.wrong
    let correctAnswers = this.state.correct
    // If answer is correct
    if (correctAnswer == variants[answer - 1].val.name) {
      currentCount = this.state.correct
      currentCount++
      AsyncStorage.getItem('user').then((user) => {
        let u = JSON.parse(user)
        if (u) {
          // Update current correct count
          firebase.database().ref(`${u.uid}`).set({
            score: {
              correct: currentCount,
              wrong: wrongAnswers
            }
          })
        }
      })
      // Update state
      return this.setState({correct: currentCount})
    } else {
      // If answer is wrong
      currentCount = this.state.wrong
      currentCount++
      AsyncStorage.getItem('user').then((user) => {
        let u = JSON.parse(user)
        if (u) {
          // Update current wrong count
          firebase.database().ref(`${u.uid}`).set({
            score: {
              correct: correctAnswers,
              wrong: currentCount
            }
          })
        }
      })
      // Update state
      return this.setState({wrong: currentCount})
    }
  }

  render() {
    // Generate variants
    let variants = this.generateVariants()
    // Get correct answer
    let correctAnswer = this.findCorrectAnswer(variants, 'string')
    // Get number to display
    let displayedNumber = this.findCorrectAnswer(variants, 'integer')
    return (
      // Render response
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

// Styling
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
