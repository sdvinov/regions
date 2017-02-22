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
    if (this.state.code.length > 0 && list[this.state.code]) {
      foundRegion = list[this.state.code]
    }

    return(
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./../../img/plates/kaz_plate.png')}
        >
          <TextInput
            style={styles.input}
            maxLength = {2}
            value = {this.state.code}
            onChangeText={(code) => this.setState({code})}
          />
        </Image>
        <Text style={styles.regionName}>{foundRegion.name}</Text>
        <Text style={styles.stateName}>{foundRegion.capital}</Text>
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
