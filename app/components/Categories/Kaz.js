import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TextInput
} from 'react-native'

import BottomNav from './../BottomNav'

import styles from './../../util/styles'

const list = require('./../../data/en').kz

export default class Kaz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '',
    }
  }

  onButtonPress() {
    this.props.navigator.push({
      id: 'Kaz'
    })
  }

  render() {
    let foundRegion = {name: 'Region not found', capital: ''}
    let code = this.state.code

    if (code.length < 2 && code && code != 0) {
      code = '0' + code
    }

    if (code == 0) {
      code = ''
    }

    if (code.length == 0) {
      foundRegion.name = ''
    }

    if (code.length > 2) {
      if (code.charAt(0) == 0) {
        code = code.substr(1)
      }
      if (code.charAt(1) != 0 && code.length > 2) {
        code = code.slice(0, -1)
      }
    }

    if (code.length > 0 && list[code]) {
      foundRegion = list[code]
    }

    return(
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
