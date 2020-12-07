import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import { SettingStack, FeedbackStack,ProfileStack } from './StackNavigator';

import CustomDrawerContent from '../components/CustomDrawerContent';
const Drawer = createDrawerNavigator();

export default DrawerNavigator = (props) => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />} >
      <Drawer.Screen name="Home" component={TabNavigator}  screenOptions={{headerShown: false}}/>
      <Drawer.Screen name="Profile" component={ProfileStack} screenOptions={{headerShown: false}}/>
      <Drawer.Screen name="Settings" component={SettingStack} screenOptions={{headerShown: false}}/>
      <Drawer.Screen name="Feedback" component={FeedbackStack}  screenOptions={{headerShown: false}}/>
    </Drawer.Navigator>
  );
};