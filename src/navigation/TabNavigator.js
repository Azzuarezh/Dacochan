import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { MainStack,TransactionStack, HistoryStack } from './StackNavigator'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator  initialRouteName="Dashboard" screenOptions={{headerShown: false}}
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
      <Tab.Screen name="Main" component={MainStack} 
      options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}/>
      <Tab.Screen name="Transaction" component={TransactionStack} 
      options={{
            tabBarLabel: 'Transaction',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),            
          }}
      />
      <Tab.Screen name="History" component={HistoryStack} 
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

export default BottomTabNavigator