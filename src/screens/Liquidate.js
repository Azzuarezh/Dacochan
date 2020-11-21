import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput
} from "react-native";
import HeaderX from "../components/HeaderX";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Liquidate(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderX style={styles.headerX}></HeaderX>
      <View gradientImage="Gradient_xjVvfkX.png" style={styles.body}>
        <View style={styles.background}>
          <ImageBackground
            style={styles.rect7}
            imageStyle={styles.rect7_imageStyle}
            source={require("../assets/images/Gradient_RQqIPyz.png")}
          >
            <View style={styles.topupBox}>
              <Text style={styles.text6}>LIQUIDATE</Text>
              <Text style={styles.text42}>
                Convert your coin to fiat currency
              </Text>
              <View style={styles.form}>
                <View style={styles.wallet}>
                  <EntypoIcon
                    name={props.iconName || "wallet"}
                    style={styles.icon7}
                  ></EntypoIcon>
                  <TextInput
                    placeholder="Digital Wallet"
                    placeholderTextColor="rgba(253,248,248,1)"
                    style={styles.textInput5}
                  ></TextInput>
                </View>
                <View style={styles.walletFiller}></View>
                <View style={styles.amount}>
                  <FontAwesomeIcon
                    name={props.iconName || "money"}
                    style={styles.icon4}
                  ></FontAwesomeIcon>
                  <TextInput
                    placeholder="Amount"
                    placeholderTextColor="rgba(251,246,246,1)"
                    returnKeyType="done"
                    keyboardType="numeric"
                    style={styles.textInput3}
                  ></TextInput>
                </View>
              </View>
              <IoniconsIcon
                name="md-arrow-forward"
                style={styles.icon5}
              ></IoniconsIcon>
            </View>
          </ImageBackground>
        </View>
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
  background: {
    height: 330
  },
  rect7: {
    flex: 1,
    marginBottom: -406
  },
  rect7_imageStyle: {},
  topupBox: {
    height: 330
  },
  text6: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    textAlign: "center",
    marginTop: 39,
    marginLeft: 118
  },
  text42: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginTop: 9,
    alignSelf: "center"
  },
  form: {
    height: 112,
    marginTop: 17,
    marginLeft: 40,
    marginRight: 40
  },
  wallet: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  textInput5: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 20,
    marginLeft: 9,
    marginTop: 10
  },
  walletFiller: {
    flex: 1
  },
  amount: {
    height: 50,
    backgroundColor: "rgba(251,247,247,0.3)",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: -6
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginLeft: 23,
    alignSelf: "center"
  },
  textInput3: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 20,
    marginLeft: 18,
    marginTop: 10
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    alignSelf: "flex-end",
    marginTop: 18,
    marginRight: 40
  }
});

export default Liquidate;
