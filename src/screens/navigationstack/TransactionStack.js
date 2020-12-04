import React, { Component,useEffect } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Transaction from "../Transaction";
import Transfer from "../transaction/Transfer";
import Liquidate from "../transaction/Liquidate";
import Topup from "../transaction/Topup";
import PreProcessLiquidate from "../transaction/PreProcessLiquidate";
import PreProcessTopup from "../transaction/PreProcessTopup";
import ScanQRCode from "../transaction/ScanQRCode";

import * as Font from 'expo-font';
import { Ionicons,MaterialCommunityIcons,EvilIconsIcon,FontAwesome } from '@expo/vector-icons'; 
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';

const Stack = createStackNavigator();

export default TransactionStack = ({route, navigation}) => {
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place    
  }, []);

  return (   
      <Stack.Navigator initialRouteName="Transaction" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="Transfer" component={Transfer} initialParams={{address:""}}/>
        <Stack.Screen name="Liquidate" component={Liquidate} />
        <Stack.Screen name="Topup" component={Topup} />
        <Stack.Screen name="PreProcessLiquidate" component={PreProcessLiquidate} />
        <Stack.Screen name="PreProcessTopup" component={PreProcessTopup} />
        <Stack.Screen name="ScanQRCode" component={ScanQRCode} />      
      </Stack.Navigator>
  );
}

