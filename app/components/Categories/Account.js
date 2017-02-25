import {
    AppRegistry,
    TextInput,
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    AsyncStorage
} from "react-native"

import React, {Component} from "react"

import * as firebase from 'firebase'

export default class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      isLoggedIn: ''
    }
    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
  }

  signup() {
    firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
        firebase.database().ref(`${user.uid}`).set({
          score: {
            correct: 0,
            wrong: 0
          }
        })
      })
      .catch((error) => console.log(error))
  }

  login() {
    firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
        AsyncStorage.setItem('user', JSON.stringify(user))
      }).catch((error) => console.log(error))
  }

  logout() {
    AsyncStorage.removeItem('user').then(()=>{
      firebase.auth().signOut()
    })
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
    backgroundColor: '#222222'
  },
  form: {
    color: '#111111',
    backgroundColor: '#eeeeee',
    height: 50,
    marginVertical: 20,
    textAlign: 'center'
  },
  button: {
    color: '#eeeeee',
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 30
  }
})
