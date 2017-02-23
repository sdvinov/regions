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
    if (this.state.code.length > 0 && list[this.state.code]) {
      foundRegion = list[this.state.code]
    }

    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          maxLength = {3}
          value = {this.state.code}
          onChangeText={(code) => this.setState({code})}
        />
        <Text style={styles.regionName}>{foundRegion.name}</Text>
        <Text style={styles.stateName}>{foundRegion.capital}</Text>
        <Text style={styles.stateName}>{(foundRegion.fed_dist) ? foundRegion.fed_dist + ' Ukraine' : ''}</Text>
      </View>
    )
  }
}
