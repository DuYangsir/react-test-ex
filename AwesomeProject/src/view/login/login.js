import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  TouchableOpacity
} from 'react-native'
import VxButton from './../../component/Button'
import VxInput from './../../component/Input'

export default class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      userpassword: ''
    },
    this.onUserName = this.onUserName.bind(this)
    this.onUserPassword = this.onUserPassword.bind(this)
    this.onLogin = this.onLogin.bind(this)
  }
  // 用户名
  onUserName(username){
    this.setState({
      username
    })
  }
  onUserPassword(userpassword){
    this.setState({
      userpassword
    })
  }

  onLogin(){
    console.log("console.log")
    // http://222.73.197.155:8823/rsa-keys/
    fetch("https://222.73.197.155:8823/rsa-keys/",{
      method: 'GET',
    })
    .then(data=>{
      console.log(data)
    })
    .catch(data=>{
      console.log(data)
    })

    fetch("http:www.baidu.com",{
      method: 'GET',
    })
    .then(data=>{
      console.log("百度http")
      console.log(data)
    })
    .catch(data=>{
      console.log(data)
    })

    fetch("https:www.baidu.com",{
      method: 'GET',
    })
    .then(data=>{
      console.log("百度https")
      console.log(data)
    })
    .catch(data=>{
      console.log(data)
    })


    // if(this.state.username === 'du' && this.state.userpassword === '123'){
      // this.props.navigation.navigate('index')      
    // }
  }
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.tltle} >登录</Text>
        <Text style={styles.lable} >用户名：</Text>
        <VxInput 
                focus = {true} 
                change = {this.onUserName}
        />
        <Text style={styles.lable} >密码：</Text>
        <VxInput 
                focus = {false}
                change = {this.onUserPassword}
                type = {'password'}
        />
        <VxButton title='登录' type='primary' onClick = {this.onLogin} />
        {/* <VxButton title='注册' /> */}
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  lable:{
    width: 280,
    textAlign: 'left'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  tltle: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    width: 280,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4398ff',
  }
})