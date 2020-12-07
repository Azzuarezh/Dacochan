import React, { Component, useState, useEffect,useRef } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text
} from "react-native";
import MaterialSpinner from "../../components/MaterialSpinner";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default PreProcessLiquidate = ({route, navigation}) => {

  const [timer, setTimer] = React.useState(10);
  const id =useRef(null);
  const clear=()=>{
    clearInterval(id.current)
  }
  useEffect(()=>{
     id.current= setInterval(()=>{
      setTimer((time)=>time-1)
    },1000)
    return ()=>clear();
  },[])

  useEffect(()=>{
    if(timer===0){
      clear()
      navigation.navigate('Transaction');
    }

  },[timer])


  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View gradientImage="Gradient_xjVvfkX.png" style={styles.body}>
        <View style={styles.background}>
          <ImageBackground
            style={styles.rect7}
            imageStyle={styles.rect7_imageStyle}
            source={require(".../../assets/images/Gradient_RQqIPyz.png")}
          >
            <View style={styles.preLiquidateBox}>
              <Text style={styles.verify}>
                VERIFYING YOUR {"\n"}TRANSACTION ...
              </Text>
              <Text style={styles.text42}>
                This process might takes {"\n"}some minutes. Please Wait ...
              </Text>
              <Text style={styles.text42}>
                You will be redirected to Transaction {"\n"}page in {timer} seconds...
              </Text>
            </View>
          </ImageBackground>
        </View>
        <MaterialSpinner style={styles.materialSpinner}></MaterialSpinner>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  body: {
    backgroundColor: "rgba(31,120,204,1)",
    flex: 1,
    marginBottom: 1
  },
  background: {
    height: 330
  },
  rect7: {
    flex: 1,
    marginBottom: -485
  },
  rect7_imageStyle: {},
  preLiquidateBox: {
    height: 330
  },
  verify: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center",
    marginTop: 174,
  },
  text42: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 29,
  },
  materialSpinner: {
    width: 160,
    height: 151,
    marginTop: 102,
    marginLeft: 108
  }
});
