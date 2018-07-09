/*
按钮控件
*/

import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'

// 无状态组件

function VxButton(props){
  const { title, type, onClick } = props

  let btnColor = ''

  switch(type)
  {
  case 'default':
    btnColor = '#606266'
    break
  default:
    btnColor = '#ffffff'
  }

  btnClick = ()=>{
    onClick()
  }

  return(
    <View >
      <TouchableOpacity style={[styles[type],styles.size,styles.button]} activeOpacity={0.5} onPress={this.btnClick}>
            <Text style={{color: btnColor}}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

VxButton.defaultProps = {
  type: 'default'
}

const styles = StyleSheet.create({
  // 变量尺寸
  size:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 50,
    borderRadius: 8,
    marginBottom: 8
  },
  // 变量颜色
  default:{
    backgroundColor: '#ffffff'
  },
  primary:{
    backgroundColor: '#409eff'
  },
  success:{
    backgroundColor: '#67C23A'
  },
  // 变量样式
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default VxButton