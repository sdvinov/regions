import {
    AppRegistry,
    TextInput,
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} from "react-native"

import React, {Component} from "react"

import * as firebase from 'firebase'

import config from './../../util/config'

const firebaseApp = firebase.initializeApp({
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  databaseURL: config.DATABASE_URL,
})

const itemsRef = firebaseApp.database().ref('regions')
const connectedRef = firebaseApp.database().ref('.info/connected')

export default class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      response: ""
    }
    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
  }

  async signup() {
    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      this.setState({
        response: "account created"
      })
      console.log('signedup')
    } catch (error) {
      this.setState({
        response: error.toString()
      })
      console.log(error)
    }
  }

  async login() {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      this.setState({
        response: "Logged In!"
      })
    } catch (error) {
      this.setState({
        response: error.toString()
      })
    }
  }

  async logout() {
    try {
      await firebase.auth().signOut();
      console.log('loggedout')
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.header}>Account</Text>
        <TextInput
          placeholder="Email"
          style={styles.form}
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          placeholder="Password"
          style={styles.form}
          onChangeText={(password) => this.setState({password})}
        />
        <Text style={styles.button} onPress = {() =>this.login()}>Log In</Text>
        <Text style={styles.button} onPress = {() =>this.signup()}>Sign Up</Text>
        <Text style={styles.button} onPress = {() =>this.logout()}>Logout</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    color: '#111111',
    backgroundColor: '#dddddd',
    height: 30,
    marginVertical: 20,
    textAlign: 'center'
  },
  button: {
    color: '#888888'
  }
})
