import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'

import BottomNav from './../BottomNav'

import styles from './../../util/styles'

const list = require('./../../data/en').ua

export default class Ukr extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '',
    }
  }

  onButtonPress() {
    this.props.navigator.push({
      id: 'Ukr'
    })
  }

  render() {
    let foundRegion = {name: 'Region not found', capital:'', fed_dist: ''}
    let code = this.state.code
    code = code.toUpperCase()

    if (code.length > 0 && list[code]) {
      foundRegion = list[code]
    }

    if (code.length == 0) {
      foundRegion.name = ''
    }

    return(
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
