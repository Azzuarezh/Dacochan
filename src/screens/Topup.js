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
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Topup(props) {
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
            <View style={styles.liquidateBox}>
              <View style={styles.text6Column}>
                <Text style={styles.text6}>TOPUP</Text>
                <Text style={styles.text42}>Topup your Zoa Balance</Text>
                <View style={styles.form}>
                  <View style={styles.walletColumn}>
                    <View style={styles.wallet}>
                      <MaterialCommunityIconsIcon
                        name={props.iconName || "bank-transfer"}
                        style={styles.icon7}
                      ></MaterialCommunityIconsIcon>
                      <TextInput
                        placeholder="From Wallet"
                        placeholderTextColor="rgba(253,248,248,1)"
                        style={styles.textInput5}
                      ></TextInput>
                    </View>
                    <View style={styles.accountId}>
                      <EvilIconsIcon
                        name={props.iconName || "credit-card"}
                        style={styles.icon3}
                      ></EvilIconsIcon>
                      <TextInput
                        placeholder="ID Account"
                        placeholderTextColor="rgba(253,248,248,1)"
                        style={styles.textInput2}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.walletColumnFiller}></View>
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
              </View>
              <View style={styles.text6ColumnFiller}></View>
              <View style={styles.rect8}>
                <View style={styles.textInput4Stack}>
                  <TextInput
                    placeholder="Description..."
                    placeholderTextColor="rgba(255,255,255,1)"
                    style={styles.textInput4}
                  ></TextInput>
                  <IoniconsIcon
                    name="md-arrow-forward"
                    style={styles.icon5}
                  ></IoniconsIcon>
                </View>
              </View>
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
  liquidateBox: {
    height: 330
  },
  text6: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    textAlign: "center",
    marginLeft: 103
  },
  text42: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginTop: 9,
    alignSelf: "center"
  },
  form: {
    height: 112,
    marginTop: 17
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
  accountId: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  textInput2: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 20,
    marginLeft: 9,
    marginTop: 10
  },
  walletColumn: {},
  walletColumnFiller: {
    flex: 1
  },
  amount: {
    height: 50,
    backgroundColor: "rgba(251,247,247,0.3)",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: -65
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
  text6Column: {
    marginTop: 39,
    marginLeft: 40,
    marginRight: 40
  },
  text6ColumnFiller: {
    flex: 1
  },
  rect8: {
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderBottomWidth: 1,
    height: 50,
    marginBottom: -39,
    marginLeft: 40,
    marginRight: 28
  },
  textInput4: {
    top: 0,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0,
    bottom: 0,
    fontSize: 15,
    fontFamily: "baumans-regular"
  },
  icon5: {
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    right: 0,
    top: 11
  },
  textInput4Stack: {
    flex: 1,
    marginBottom: 1
  }
});

export default Topup;
