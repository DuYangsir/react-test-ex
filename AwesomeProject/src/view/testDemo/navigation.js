import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {createReactNavigationReduxMiddleware, createReduxBoundAddListener} from "react-navigation-redux-helpers";
import {Animated, Easing} from "react-native";
import {DEFAULT_PAGE, PRIMARY_COLOR} from "../constants";
import {TabBarNavigator} from "../page/tab/navigation";
import {AuthStackNavigator} from "../page/authenticationModule/navigation";
import CustomerInfo from "../page/customerInfo/customerInfo";
import NoAccountCustomerList from "../page/noAccountCustomerList/noAccountCustomerList";
import CustomerDetail from "../page/customerDetail/customerDetail";
import {JRNBackgroundNavigatorCreator} from "../component/JRNBackgroundNavigator/JRNBackgroundNavigator";
import {BACKGROUND_STACK_CONFIG, BACKGROUND_STACK_CONFIG_PARENT} from "../utils/headerConfig";
import StackViewStyleInterpolator from "react-navigation/src/views/StackView/StackViewStyleInterpolator";
import Personal from "../page/personal/personal";
import PersonalInfo from "../page/personal/personalInfo/personalInfo";
import AboutUs from "../page/personal/aboutUs/aboutUs";
import SafeAccount from "../page/personal/safeAccount/safeAccount";
import ResetLoginPw from "../page/personal/safeAccount/resetLoginPw/resetLoginPw";

const AppNavigator = createStackNavigator({
    // tab导航
    Tab: {
        screen: TabBarNavigator,
        navigationOptions: {
            header: null
        }
    },
    //未开户客户
    NoAccountCustomerList:{
        screen:NoAccountCustomerList,
        navigationOptions: {
            ...BACKGROUND_STACK_CONFIG_PARENT
        }
    },
    //客户详情
    CustomerDetail:{
        screen:JRNBackgroundNavigatorCreator(createStackNavigator(
            { CustomerDetail },
            BACKGROUND_STACK_CONFIG
        ),{ source:require('../assets/img/bg.png'),style:{height:256} }),
        navigationOptions: {
            ...BACKGROUND_STACK_CONFIG_PARENT
        }
    },
    //客户资料
    CustomerInfo:{
        screen:JRNBackgroundNavigatorCreator(createStackNavigator(
            { CustomerInfo },
            BACKGROUND_STACK_CONFIG
        ),{ source:require('../assets/img/bg.png'),style:{height:'100%'} }),
        navigationOptions: {
            ...BACKGROUND_STACK_CONFIG_PARENT
        }
    },
    //个人中心
    Personal:{
        screen:Personal,
        navigationOptions: {
            ...BACKGROUND_STACK_CONFIG_PARENT
        }
    },
    //个人信息
    PersonalInfo:{
        screen:PersonalInfo,
        navigationOptions: {
            ...BACKGROUND_STACK_CONFIG_PARENT
        }
    },
    //关于我们
    AboutUs:{
        screen:AboutUs,
        navigationOptions: {
            ...BACKGROUND_STACK_CONFIG_PARENT
        }
    },
    //账户安全
    SafeAccount:{
        screen:SafeAccount,
        navigationOptions: {
            ...BACKGROUND_STACK_CONFIG_PARENT
        }
    },
    ResetLoginPw:{
        screen:ResetLoginPw,
        navigationOptions: {
            ...BACKGROUND_STACK_CONFIG_PARENT
        }
    }
}, {
    headerMode: 'screen',
    navigationOptions: {
        headerBackTitle: '返回',
        headerStyle: {
            backgroundColor: PRIMARY_COLOR,
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerBackTitleStyle: {
            color: 'white'
        },
        headerTintColor: 'white',
        gesturesEnabled: true
    },
    // 自定义 转场动画
    transitionConfig: () => ({
        screenInterpolator: StackViewStyleInterpolator.forHorizontal,
        transitionSpec: {
            duration: 400,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        }
    })
});

export const RootStack = createStackNavigator({
    App:{
        screen:AppNavigator
    },
    Auth:{
        screen: AuthStackNavigator,
    }
},{
    mode: 'modal',
    navigationOptions: {
        header:null,
        gesturesEnabled: false
    },
});

export const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

export const addListener = createReduxBoundAddListener("root");

// 创建navigation reducer
const initialState = RootStack.router.getStateForAction(RootStack.router.getActionForPathAndParams(DEFAULT_PAGE));
export const navReducer = (state = initialState, action) => {
    const nextState = RootStack.router.getStateForAction(action, state);
    return nextState || state;
};
