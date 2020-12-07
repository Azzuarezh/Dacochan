import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, TextInput } from "react-native";
import HeaderNoIcon from "../components/HeaderNoIcon";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MapView from "react-native-maps";

export default Feedback = ({route,navigation})=> {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderNoIcon style={styles.headerX} navigation={navigation}></HeaderNoIcon>
      <View style={styles.body}>
        <View style={styles.feedbackBox}>
          <View style={styles.text4Column}>
            <Text style={styles.text4}>FEEDBACK</Text>
            <Text style={styles.text42}>
              Your feedback is very important to us.
            </Text>
            <View style={styles.form}>
              <View style={styles.name}>
                <EvilIconsIcon
                  name={ "user"}
                  style={styles.icon3}
                ></EvilIconsIcon>
                <TextInput
                  placeholder="Stan Smith"
                  placeholderTextColor="rgba(253,248,248,1)"
                  style={styles.textInput2}
                ></TextInput>
              </View>
              <View style={styles.nameFiller}></View>
              <View style={styles.email}>
                <FontAwesomeIcon
                  name={
                    "envelope-o"}
                  style={styles.icon4}
                ></FontAwesomeIcon>
                <TextInput
                  placeholder="stan@stansmith.com"
                  placeholderTextColor="rgba(251,246,246,1)"
                  style={styles.textInput3}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.text4ColumnFiller}></View>
          <View style={styles.rect8}>
            <View style={styles.textInput4Stack}>
              <TextInput
                placeholder="Write something..."
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
  text4: {
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
  name: {
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
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 20,
    marginLeft: 9,
    marginTop: 10
  },
  nameFiller: {
    flex: 1
  },
  email: {
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
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10
  },
  text4Column: {
    marginTop: 39,
    marginLeft: 40,
    marginRight: 40
  },
  text4ColumnFiller: {
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
    fontSize: 12
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
  },
  map: {
    flex: 1,
    marginBottom: 2
  }
});

