import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
  StatusBar
} from 'react-native';

// Load components
import BottomNav from './app/components/BottomNav'
import Blr from './app/components/Categories/Blr'
import Kaz from './app/components/Categories/Kaz'
import Rus from './app/components/Categories/Rus'
import Ukr from './app/components/Categories/Ukr'
import Game from './app/components/Categories/Game'
import Account from './app/components/Categories/Account'

// Load Firebase
import * as firebase from 'firebase'
// Load config
import config from './app/util/config'
// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  databaseURL: config.DATABASE_URL,
})

export default class regions extends Component {
  // Switcher for Navigator. On each id render different components
  navigatorRenderScene(route, navigator) {
    switch(route.id) {
      case 'Blr':
        return(
          <View style={styles.container}>
            <StatusBar
              barStyle="dark-content"
            />
            <Blr />
            <BottomNav
              navigator={navigator}
            />
          </View>
        )
      case 'Kaz':
        return(
          <View style={styles.container}>
            <StatusBar
              barStyle="dark-content"
            />
            <Kaz />
            <BottomNav
              navigator={navigator}
            />
          </View>
        )
      case 'Rus':
        return(
          <View style={styles.container}>
            <StatusBar
              barStyle="dark-content"
            />
            <Rus />
            <BottomNav
              navigator={navigator}
            />
          </View>
        )
      case 'Ukr':
        return(
          <View style={styles.container}>
            <StatusBar
              barStyle="dark-content"
            />
            <Ukr />
            <BottomNav
              navigator={navigator}
            />
          </View>
        )
      case 'Game':
        return(
          <View style={styles.container}>
            <StatusBar
              barStyle="dark-content"
            />
            <Game />
            <BottomNav
              navigator={navigator}
            />
          </View>
        )
      case 'Account':
        return(
          <View style={styles.container}>
            <StatusBar
              barStyle="light-content"
            />
            <Account />
            <BottomNav
              navigator={navigator}
            />
          </View>
        )
    }
  }

  render() {
    // Return Navigator
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{id: 'Rus'}}
          renderScene={this.navigatorRenderScene}
        />
      </View>
    );
  }
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222'
  }
});

AppRegistry.registerComponent('regions', () => regions);
