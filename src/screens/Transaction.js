import React, { Component,useEffect } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import HeaderNoIcon from "../components/HeaderNoIcon";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Transfer from "./transaction/Transfer";

import * as Font from 'expo-font';
import { Ionicons,MaterialCommunityIcons,EvilIconsIcon,FontAwesome } from '@expo/vector-icons'; 
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';

const Stack = createStackNavigator();
export default Transaction = ({route, navigation}) => {
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place

    loadResourcesAsync = async () =>{
      console.log('navigation : ', navigation);
      await Promise.all([
        Font.loadAsync({
          "roboto-regular": require("../assets/fonts/roboto-regular.ttf"),
          "baumans-regular": require("../assets/fonts/baumans-regular.ttf"),
          "alegreya-sans-sc-700": require("../assets/fonts/alegreya-sans-sc-700.ttf")
        })
      ]);
    }



    loadResourcesAsync();
     
  }, []);
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderNoIcon style={styles.headerX}></HeaderNoIcon>
      <View gradientImage="Gradient_xjVvfkX.png" style={styles.body}>
        <ListItem icon onPress={() => navigation.navigate('Transfer')}>
            <Left>
              <Button style={{ backgroundColor: "#05e6d3" }} >
               <FontAwesome name="exchange" size={24} color="white" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.listText} 
              >Transfer</Text>
            </Body>
          </ListItem>
        
        <ListItem icon onPress={() => navigation.navigate('Liquidate')}>
            <Left>
              <Button style={{ backgroundColor: "#32a832" }}>
               <MaterialCommunityIcons name="cash-multiple" size={24} color="white" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.listText} >Liquidate</Text>
            </Body>
          </ListItem>

        <ListItem icon onPress={() => navigation.navigate('Topup')}>
            <Left>
              <Button style={{ backgroundColor: "#0c05e6" }}>
               <MaterialCommunityIcons name="cash-register" size={24} color="white" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.listText} >Topup</Text>
            </Body>
          </ListItem>
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  headerX: {
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  body: {
    backgroundColor: "rgba(31,120,204,1)",
    flex: 1,
    marginBottom: 1
  },
  listText :{
    color:"white",
    fontFamily: "baumans-regular",
    fontSize: 20,
  }
});
