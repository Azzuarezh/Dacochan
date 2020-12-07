
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//this is the main route stack
import Dashboard from "../screens/Dashboard";

//this is for transaction section stack
import Transaction from "../screens/Transaction";
import Transfer from "../screens/transaction/Transfer";
import Liquidate from "../screens/transaction/Liquidate";
import Topup from "../screens/transaction/Topup";
import PreProcessLiquidate from "../screens/transaction/PreProcessLiquidate";
import PreProcessTopup from "../screens/transaction/PreProcessTopup";
import ScanQRCode from "../screens/transaction/ScanQRCode";
import History from "../screens/History";
import Settings from "../screens/Settings";
import Feedback from "../screens/Feedback";
import Profile from "../screens/profile/Profile";
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const TransactionStack =() =>{
      return (<Stack.Navigator initialRouteName="Transaction" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="Transfer" component={Transfer} initialParams={{address:""}}/>
        <Stack.Screen name="Liquidate" component={Liquidate} />
        <Stack.Screen name="Topup" component={Topup} />
        <Stack.Screen name="PreProcessLiquidate" component={PreProcessLiquidate} />
        <Stack.Screen name="PreProcessTopup" component={PreProcessTopup} />
        <Stack.Screen name="ScanQRCode" component={ScanQRCode} />      
      </Stack.Navigator>)
}

const HistoryStack =() =>{
    return(
    <Stack.Navigator screenOptions={{headerShown: false}}>        
        <Stack.Screen name="History" component={History} />      
    </Stack.Navigator>)
     
}

const SettingStack =() =>{
    return(
    <Stack.Navigator screenOptions={{headerShown: false}}>        
        <Stack.Screen name="Settings" component={Settings} />      
      </Stack.Navigator>)
     
}

const FeedbackStack =() =>{
    return(<Stack.Navigator screenOptions={{headerShown: false}}>        
        <Stack.Screen name="Feedback" component={Feedback} />      
      </Stack.Navigator>)    
}

const ProfileStack =() =>{
    return(
    <Stack.Navigator screenOptions={{headerShown: false}}>        
        <Stack.Screen name="Profile" component={Profile} />      
      </Stack.Navigator>)
     
}


export { MainStack,TransactionStack, HistoryStack, SettingStack , FeedbackStack,ProfileStack };