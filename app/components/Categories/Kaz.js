import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'

// Get bottom navigation bar
import BottomNav from './../BottomNav'

// Get styles
import styles from './../../util/styles'

// Get Kazakhstan portion from the list of regions
const list = require('./../../data/en').kz

export default class Kaz extends Component {
  constructor(props) {
    super(props)
    // Set state
    this.state = {
      code: '',
    }
  }

  // Navigator
  onButtonPress() {
    this.props.navigator.push({
      id: 'Kaz'
    })
  }

  render() {
    // Initial response object
    let foundRegion = {name: 'Region not found', capital: ''}
    // Set code to state
    let code = this.state.code

    // Add 0 to 1 character long code
    if (code.length < 2 && code && code != 0) {
      code = '0' + code
    }

    // If just 0 remains, remove it
    if (code == 0) {
      code = ''
    }

    // Remove data from screen if nothing is entered
    if (code.length == 0) {
      foundRegion.name = ''
    }

    // Remove first 0 if the code is longer then 2 digits
    if (code.length > 2) {
      if (code.charAt(0) == 0) {
        code = code.substr(1)
      }
      if (code.charAt(1) != 0 && code.length > 2) {
        code = code.slice(0, -1)
      }
    }

    // Get data from the list of codes
    if (code.length > 0 && list[code]) {
      foundRegion = list[code]
    }

    return(
      // Render response
      <View style={styles.container}>
        <TextInput
          placeholder='01'
          style={styles.input}
          maxLength = {3}
          value = {code}
          onChangeText={(code) => this.setState({code})}
        />
        <Text style={styles.regionName}>{foundRegion.name}</Text>
        <Text style={styles.stateName}>{(foundRegion.capital) ? 'Capital: ' + foundRegion.capital : ''}</Text>
      </View>
    )
  }
}
