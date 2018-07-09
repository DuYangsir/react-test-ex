import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  Button
} from 'react-native'
// import LoginPage from './src/view/login/login'
import NavigationDemo from './src/view/navigation'

export default class HelloWorldApp extends Component {
  render() {
    return (
      <NavigationDemo/>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // backgroundColor: 'pink'
//   },
// })