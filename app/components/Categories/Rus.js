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
    if (this.state.code.length > 0 && list[this.state.code]) {
      foundRegion = list[this.state.code]
    }

    return(
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./../../img/plates/rus_plate.png')}
        >
          <TextInput
            style={styles.input}
            maxLength = {3}
            value = {this.state.code}
            onChangeText={(code) => this.setState({code})}
          />
        </Image>
        <Text style={styles.regionName}>{foundRegion.name}</Text>
        <Text style={styles.stateName}>Capital: {foundRegion.capital}</Text>
        <Text style={styles.stateName}>{(foundRegion.fed_dist) ? foundRegion.fed_dist + ' Federal District' : ''}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  image: {
    flex: 8,
    width: 380
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 200,
    textAlign: 'center',
    fontSize: 180,
    marginTop: 40
  },
  regionCode: {
    marginTop: 25,
    backgroundColor:'rgba(0,0,0,0)',
    fontSize: 190,
    textAlign: 'center',
  },
  regionName: {
    marginHorizontal: 20,
    flex: 3,
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Avenir',
    color: '#ddd'
  },
  stateName: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Avenir',
    color: '#ddd'
  },
})
