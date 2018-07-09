/*
按钮控件
*/

import React,{ Component } from 'react'
import {Text,TextInput,View,StyleSheet} from 'react-native'

export default class VxInput extends Component{
  onTextChange = (value) =>{
    this.props.change(value)
  }

  render(){
    const { focus,type } = this.props
    let secureText = false
    switch(type)
    {
    case 'password':
      secureText = true
      break
    default:
      secureText = false
    }

    return(
      <View style={[styles.size,styles.inputBox]}>

        <TextInput
            autoCapitalize = {'none'}
            style={styles.input}
            autoFocus = {focus}
            onChangeText={this.onTextChange}
            secureTextEntry={secureText}
            />
      </View>
    )
  }
}

VxInput.defaultProps = {
  focus: false,
  type: false
}

const styles = StyleSheet.create({
  size:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 50,
    
  },
  input: {
    width: 260,
    height: 40,
    fontSize: 20
  },
  inputBox: {
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#606266'
  },
})

