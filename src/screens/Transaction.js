import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, TextInput } from "react-native";
import HeaderX from "../components/HeaderX";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Transaction(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderX style={styles.headerX}></HeaderX>
      <View gradientImage="Gradient_xjVvfkX.png" style={styles.body}>
        <View style={styles.feedbackBox}>
          <View style={styles.label_TransactionColumn}>
            <Text style={styles.label_Transaction}>TRANSFER</Text>
            <Text style={styles.text42}>Send your coin to another wallet</Text>
            <View style={styles.form}>
              <View style={styles.recipient}>
                <EvilIconsIcon
                  name={props.iconName || "user"}
                  style={styles.icon3}
                ></EvilIconsIcon>
                <View style={styles.textInput2Stack}>
                  <TextInput
                    placeholder="Recipient"
                    placeholderTextColor="rgba(253,248,248,1)"
                    style={styles.textInput2}
                  ></TextInput>
                  <EvilIconsIcon
                    name={props.iconName || "camera"}
                    style={styles.icon6}
                  ></EvilIconsIcon>
                </View>
              </View>
              <View style={styles.recipientFiller}></View>
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
          <View style={styles.label_TransactionColumnFiller}></View>
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
  feedbackBox: {
    height: 330
  },
  label_Transaction: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginLeft: 78
  },
  text42: {
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginTop: 9,
    alignSelf: "center"
  },
  form: {
    height: 112,
    marginTop: 20
  },
  recipient: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  textInput2: {
    top: 1,
    left: 0,
    height: 30,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 14,
    fontSize: 14,
    fontFamily: "baumans-regular"
  },
  icon6: {
    left: 184,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    top: 0
  },
  textInput2Stack: {
    height: 33,
    flex: 1,
    marginRight: 6,
    marginLeft: 9,
    marginTop: 9
  },
  recipientFiller: {
    flex: 1
  },
  amount: {
    height: 50,
    backgroundColor: "rgba(251,247,247,0.3)",
    borderRadius: 5,
    flexDirection: "row"
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
    fontFamily: "baumans-regular",
    flex: 1,
    marginRight: 20,
    marginLeft: 18,
    marginTop: 10
  },
  label_TransactionColumn: {
    marginTop: 39,
    marginLeft: 40,
    marginRight: 40
  },
  label_TransactionColumnFiller: {
    flex: 1
  },
  rect8: {
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderBottomWidth: 1,
    height: 49,
    marginBottom: 29,
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

export default Transaction;
