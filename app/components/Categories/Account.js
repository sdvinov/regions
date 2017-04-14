import {
    TextInput,
    Text,
    View,
    StyleSheet,
    AsyncStorage
} from "react-native"

import React, {Component} from "react"

import * as firebase from 'firebase'

export default class Account extends Component {
  constructor(props) {
    super(props)
    // Set state
    this.state = {
      email: "",
      password: ""
    }
    // Bind this to this document
    this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)
  }

  // Sign up function using Firebase
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

  // Login function using login
  login() {
    firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
        // Set user data to AsyncStorage
        AsyncStorage.setItem('user', JSON.stringify(user))
      }).catch((error) => console.log(error))
  }

  // Logout function. Remove User data from AsyncStorage
  logout() {
    AsyncStorage.removeItem('user').then(()=>{
      firebase.auth().signOut()
    })
  }

  render() {
    // Render response
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

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1
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
