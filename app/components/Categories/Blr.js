import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'

import BottomNav from './../BottomNav'

import styles from './../../util/styles'

const list = require('./../../data/en').by

export default class Blr extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '',
    }
  }

  onButtonPress() {
    this.props.navigator.push({
      id: 'Blr'
    })
  }

  render() {
    let foundRegion = {name: 'Region not found', capital: ''}
    let code = this.state.code
    if (code.length > 0 && list[code]) {
      foundRegion = list[code]
    }

    if (code.length == 0) {
      foundRegion.name = ''
    }

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
