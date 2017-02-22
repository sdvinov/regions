import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
  StatusBar
} from 'react-native';

import BottomNav from './app/components/BottomNav'
import Blr from './app/components/Categories/Blr'
import Kaz from './app/components/Categories/Kaz'
import Rus from './app/components/Categories/Rus'
import Ukr from './app/components/Categories/Ukr'
import Game from './app/components/Categories/Game'

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
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
         barStyle="light-content"
        />
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
    backgroundColor: '#333'
  }
});

AppRegistry.registerComponent('regions', () => regions);
