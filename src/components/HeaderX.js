import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import LogoHeader from "./LogoHeader";
import Icon from "react-native-vector-icons/MaterialIcons";

function HeaderX(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group}>
      <TouchableOpacity /* Conditional navigation not supported at the moment */
          onPress={() => console.log("Navigate to Settings")}
          style={styles.group2}
        >
          <Icon name={props.icon2Name || "dehaze"} style={styles.icon3}></Icon>
        </TouchableOpacity>
        <LogoHeader style={styles.logoHeader}></LogoHeader>
        <View style={styles.logoHeaderFiller}></View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(31,120,204,1)"
  },
  group: {
    height: 55,
    backgroundColor: "rgba(31,120,204,1)",
    flexDirection: "row",
    marginTop: 25,
    marginLeft:10
  },
  logoHeader: {
    width: 150,
    height: 44,
    marginLeft: 105,
    marginTop: 6
  },
  logoHeaderFiller: {
    flex: 1,
    flexDirection: "row"
  },
  group2: {
    width: 25,
    height: 25,
    marginRight: 325,
    marginTop: 15
  },
  icon3: {
    color: "rgba(250,250,250,1)",
    fontSize: 25
  }
});

export default HeaderX;
