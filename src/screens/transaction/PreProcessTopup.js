import React, { useEffect,Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text
} from "react-native";
import MaterialButtonPurple from "../../components/MaterialButtonPurple";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default PreProcessTopup = ({route,navigation}) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View gradientImage="Gradient_xjVvfkX.png" style={styles.body}>
        <View style={styles.backgroundStack}>
          <View style={styles.background}>
            <ImageBackground
              style={styles.rect7}
              imageStyle={styles.rect7_imageStyle}
              source={require("../../assets/images/Gradient_RQqIPyz.png")}
            ></ImageBackground>
          </View>
          <View style={styles.preLiquidateBox}>
            <Text style={styles.confirmTransaction}>
              CONFIRM YOUR {"\n"}TRANSACTION
            </Text>
            <Text style={styles.detail}>
              Please transfer your balance {"\n"}to account below:
            </Text>
            <Text style={styles.accountNumber}>&lt;Account_Number&gt;</Text>
            <Text style={styles.txtUniqueCode}>with a amount :</Text>
            <Text style={styles.uniqueCode}>&lt;Unique_Code&gt;</Text>
            <MaterialButtonPurple
              style={styles.materialButtonPurple}
            ></MaterialButtonPurple>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    justifyContent: "center"
  },
  body: {
    backgroundColor: "rgba(31,120,204,1)",
    width: 375,
    height: 812,
    alignSelf: "center"
  },
  background: {
    top: 0,
    left: 0,
    height: 330,
    position: "absolute",
    right: 0
  },
  rect7: {
    flex: 1,
    marginBottom: -485
  },
  rect7_imageStyle: {
    opacity: 0.69
  },
  preLiquidateBox: {
    top: 0,
    left: 0,
    height: 655,
    position: "absolute",
    right: 0
  },
  confirmTransaction: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    textAlign: "center",
    marginTop: 137,
  },
  detail: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    textAlign: "center",
    marginTop: 49,
  },
  accountNumber: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 14,
    alignSelf:"center"
  },
  txtUniqueCode: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 37,
    alignSelf:"center"
  },
  uniqueCode: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 31,
    alignSelf:"center"
  },
  materialButtonPurple: {
    height: 52,
    width: 158,
    borderRadius: 23,
    marginTop: 22,
    marginLeft: 109
  },
  backgroundStack: {
    height: 655
  }
});

