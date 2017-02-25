import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  TextInput
} from 'react-native'

import BottomNav from './../BottomNav'

import styles from './../../util/styles'

const list = require('./../../data/en').ru

export default class Rus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '',
    }
  }

  onButtonPress() {
    this.props.navigator.push({
      id: 'Rus'
    })
  }

  render() {
    let foundRegion = {name: 'Region not found', capital:'', fed_dist: ''}
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
        <Text style={styles.stateName}>{(foundRegion.fed_dist) ? foundRegion.fed_dist + ' Federal District' : ''}</Text>
      </View>
    )
  }
}
