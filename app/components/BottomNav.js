import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Navigator,
  Text
} from 'react-native';

export default class BottomNav extends Component {

  onButtonPress(id) {
    this.props.navigator.push({
      id: id
    })
  }

  render() {
    return (
      <View style={styles.navbar}>
        <TouchableHighlight
          style={styles.bottomIconEliment}
          underlayColor = 'rgba(0,0,0,0)'
          onPress={() => this.onButtonPress('Rus')}
        >
          <Image
            style={styles.image}
            source={require('./../img/icons/rus.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomIconEliment}
          underlayColor = 'rgba(0,0,0,0)'
          onPress={() => this.onButtonPress('Blr')}
        >
          <Image
            style={styles.image}
            source={require('./../img/icons/blr.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomIconEliment}
          underlayColor = 'rgba(0,0,0,0)'
          onPress={() => this.onButtonPress('Kaz')}
        >
          <Image
            style={styles.image}
            source={require('./../img/icons/kaz.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomIconEliment}
          underlayColor = 'rgba(0,0,0,0)'
          onPress={() => this.onButtonPress('Ukr')}
        >
          <Image
            style={styles.image}
            source={require('./../img/icons/ukr.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomIconEliment}
          underlayColor = 'rgba(0,0,0,0)'
          onPress={() => this.onButtonPress('Game')}
        >
          <Image
            style={styles.image}
            source={require('./../img/icons/game_icon.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottomIconEliment}
          underlayColor = 'rgba(0,0,0,0)'
          onPress={() => this.onButtonPress('Account')}
        >
          <Text>A</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#222222'
  },
  bottomIconEliment: {
    flex: 1,
    alignItems: 'center',
    height: 70
  },
  image: {
    height: 70,
    width: 70
  }
});
