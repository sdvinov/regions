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

// Get Russia portion from the list of regions
const list = require('./../../data/en').ru

export default class Rus extends Component {
  constructor(props) {
    super(props)
    // Set initial state
    this.state = {
      code: '',
    }
  }

  // Navigator
  onButtonPress() {
    this.props.navigator.push({
      id: 'Rus'
    })
  }

  render() {
    // Initial response object
    let foundRegion = {name: 'Region not found', capital:'', fed_dist: ''}
    // Set code to state
    let code = this.state.code

    // Add 0 to 1 character long code
    if (code.length < 2 && code && code != 0) {
      code = '0' + code
    }

    // Add 0 to code 1 character long code
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
        <Text style={styles.stateName}>{(foundRegion.fed_dist) ? foundRegion.fed_dist + ' Federal District' : ''}</Text>
      </View>
    )
  }
}
