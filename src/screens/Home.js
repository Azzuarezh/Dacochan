import React, { useState,useContext } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppLoading } from "expo";

import Dashboard from "screens/Dashboard";
import TransactionStack from "screens/navigationstack/TransactionStack"
import History from "screens/History";
import Settings from "screens/Settings";
import AuthContext from "utils/authContext";

const Tab = createBottomTabNavigator();

export default function Home({route,navigation}) {
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
          component={TransactionStack}
          options={{
            tabBarLabel: 'Transaction',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),            
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="clock" color={color} size={size} />
            ),
            tabBarBadge: 4,
          }}
        />
      </Tab.Navigator>
    );
  }



  