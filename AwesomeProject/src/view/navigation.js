import React from 'react';
import {createStackNavigator,createTabNavigator} from 'react-navigation';

import Home from './pages/Home'
import Pageone from './pages/tab1'
import Pagetwo from './pages/tab2'


import Login from './login/login'

// 进入系统的
const Apphome = createTabNavigator({
  // 首页
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '主页',
    },
  },
  Pageone: {
    screen: Pageone,
    navigationOptions: {
      // swipeEnabled: true,

      tabBarLabel: '分类1',
      // headerBackTitle: ''
    },
  },
  Pagetwo: {
    screen: Pagetwo,
    navigationOptions: {

      tabBarLabel: '分类2',
      
      // headerBackTitle: ''
    },
  }
  
},

// 设置table样式
{
  swipeEnabled: true,
  tabBarOptions: {
    //Android属性
    upperCaseLabel: false,//是否使标签大写，默认为true
    //共有属性
    // showIcon: true,//是否显示图标，默认关闭
    // showLabel: true,//是否显示label，默认开启
    // activeTintColor: '#EB3695',//label和icon的前景色 活跃状态下（选中）
    // inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
    style: { //TabNavigator 的背景颜色
        backgroundColor: 'white',
        height: 40,
    },
    indicatorStyle: {
        height: 0,
    },
    labelStyle: {//文字的样式
        fontSize: 16,
        // marginTop: -5,
        marginBottom: 10,
    },
    // iconStyle: {//图标的样式
    //     marginBottom: 5,
    // }
},
});

/*
 * 初始化StackNavigator
 */
// export default AppNavigator;

export default Navi = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      // headerTitle: '登录',      
    }
  },
  // 进入系统的
  index: {
    screen: Apphome,
    navigationOptions: {
      // headerBackTitle: ''
      header: null,      
    },
  },
});
