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

// Get Belarus portion from the list of regions
const list = require('./../../data/en').by

export default class Blr extends Component {
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
      id: 'Blr'
    })
  }

  render() {
    // Initial response object
    let foundRegion = {name: 'Region not found', capital: ''}
    // Set code to state
    let code = this.state.code
    // Get data from the list of codes
    if (code.length > 0 && list[code]) {
      foundRegion = list[code]
    }
    // Remove data from the screen if nothing is entered
    if (code.length == 0) {
      foundRegion.name = ''
    }

    // Render response
    return(
      <View style={styles.container}>
        <TextInput
          placeholder='1'
          style={styles.input}
          maxLength = {1}
          value = {code}
          onChangeText={(code) => this.setState({code})}
        />
        <Text style={styles.regionName}>{foundRegion.name}</Text>
        <Text style={styles.stateName}>{(foundRegion.capital) ? 'Capital: ' + foundRegion.capital : ''}</Text>
      </View>
    )
  }
}
