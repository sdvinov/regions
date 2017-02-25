import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View
} from 'react-native';

import BottomNav from './app/components/BottomNav'
import Blr from './app/components/Categories/Blr'
import Kaz from './app/components/Categories/Kaz'
import Rus from './app/components/Categories/Rus'
import Ukr from './app/components/Categories/Ukr'
import Game from './app/components/Categories/Game'
import Account from './app/components/Categories/Account'

import * as firebase from 'firebase'
import config from './app/util/config'
const firebaseApp = firebase.initializeApp({
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  databaseURL: config.DATABASE_URL,
})

export default class regions extends Component {
  navigatorRenderScene(route, navigator) {
    switch(route.id) {
      case 'Blr':
        return(
          <View style={styles.container}>
            <Blr />
            <BottomNav
              navigator={navigator}
            />
          </View>
        )
      case 'Kaz':
        return(
          <View style={styles.container}>
            <Kaz />
            <BottomNav
              navigator={navigator}
            />
          </View>
        )
      case 'Rus':
        return(
          <View style={styles.container}>
            <Rus />
            <BottomNav
              navigator={navigator}
            />
          </View>
        )
      case 'Ukr':
        return(
          <View style={styles.container}>
            <Ukr />
            <BottomNav
              navigator={navigator}
            />
          </View>
        )
      case 'Game':
        return(
          <View style={styles.container}>
            <Game />
            <BottomNav
              navigator={navigator}
            />
          </View>
        )
      case 'Account':
        return(
          <View style={styles.container}>
            <Account />
            <BottomNav
              navigator={navigator}
            />
          </View>
        )
    }
  }

  render() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222'
  }
});

AppRegistry.registerComponent('regions', () => regions);
