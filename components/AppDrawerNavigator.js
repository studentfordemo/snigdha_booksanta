import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu'; 
import SettingScreen from '../screens/SettingScreen';
import MyDonations from '../screens/MyDonations';
import NotificationScreen from '../screens/NotificationScreen'
import MyReceivedBooks from '../screens/MyReceivedBooksScreen'
export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : AppTabNavigator
    },
    MyDonations : {
        screen : MyDonations
    },

    Setting : {
        screen : SettingScreen
    },
    ReceivedBooks:{
screen:MyReceivedBooks
    },
    Notification : {
        screen : NotificationScreen
    }
}, 
{
    contentComponent : CustomSideBarMenu
},
{

initialRouteName : "Home"

})
