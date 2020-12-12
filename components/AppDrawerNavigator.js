import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu'; 
import SettingScreen from '../screens/SettingScreen';
import MyDonations from '../screens/MyDonations';
import NotificationScreen from '../screens/NotificationScreen';
import MyReceivedBooks from '../screens/MyReceivedBooksScreen';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : AppTabNavigator,
        navigationOptions : {
            drawerIcon : <Icon
            name="home" 
            type = "font-awesome"
            />
        }
    },
    MyDonations : {
        screen : MyDonations,
        navigationOptions : {
            drawerIcon : <Icon
            name="gift" 
            type = "font-awesome"
            />
        }
    }, 
    MyReceivedBooks : {
        screen : MyReceivedBooks,
        navigationOptions : {
            drawerIcon : <Icon
            name="book" 
            type = "font-awesome"
            />
        }
    },

    Setting : {
        screen : SettingScreen,
        navigationOptions : {
            drawerIcon : <Icon
            name="settings" 
            type = "font-awesome"
            />
        }
    },
    Notification : {
        screen : NotificationScreen,
        navigationOptions : {
            drawerIcon : <Icon
            name="bell" 
            type = "font-awesome"
            />
        }
    }
}, 
{
    contentComponent : CustomSideBarMenu
},
{

initialRouteName : "Home"

})
