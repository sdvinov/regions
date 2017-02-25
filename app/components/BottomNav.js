import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
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
        <Image
          style={styles.image}
          source={require('./../img/icons/profile.png')}
        />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bottomIconEliment: {
    flex: 1,
    alignItems: 'center',
    height: 55
  },
  image: {
    height: 50,
    width: 50
  }
});
