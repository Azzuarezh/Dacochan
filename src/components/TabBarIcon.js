import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Dashboard from "../screens/Dashboard";
//import Feedback from "../screens/Feedback";
import History from "../screens/History";
//import Liquidate from "../screens/Liquidate";
//import Login from "../screens/Login";
// import PreProcessLiquidate from "../screens/PreProcessLiquidate";
// import PreProcessTopup from "../screens/PreProcessTopup";
// import Settings from "../screens/Settings";
// import SignUp from "../screens/SignUp";
// import Topup from "../screens/Topup";
import Transaction from "../screens/Transaction";

import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

export default function TabBarIcon() {
    return (
      <Tab.Navigator
        initialRouteName="Dashboard"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Transaction"
          component={Transaction}
          options={{
            tabBarLabel: 'Transaction',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }