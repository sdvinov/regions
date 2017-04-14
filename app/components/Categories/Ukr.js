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

// Get Ukraine portion from the list of regions
const list = require('./../../data/en').ua

export default class Ukr extends Component {
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
      id: 'Ukr'
    })
  }

  render() {
    // Initial response object
    let foundRegion = {name: 'Region not found', capital:'', fed_dist: ''}
    // Set code to state
    let code = this.state.code
    // Set code to be uppercase
    code = code.toUpperCase()

    // Get data from the list of codes
    if (code.length > 0 && list[code]) {
      foundRegion = list[code]
    }

    // Remove data from screen if nothing is entered
    if (code.length == 0) {
      foundRegion.name = ''
    }

    return(
      // Render response
      <View style={styles.container}>
        <TextInput
          placeholder='AA'
          style={styles.input}
          maxLength = {2}
          value = {code}
          onChangeText={(code) => this.setState({code})}
        />
        <Text style={styles.regionName}>{foundRegion.name}</Text>
        <Text style={styles.stateName}>{(foundRegion.capital) ? 'Capital: ' + foundRegion.capital : ''}</Text>
        <Text style={styles.stateName}>{(foundRegion.fed_dist) ? foundRegion.fed_dist + ' Ukraine' : ''}</Text>
      </View>
    )
  }
}
