import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default ScrollViewEntry = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.text2Stack}>
        <Text style={styles.text2}>{props.description}</Text>
        <View style={styles.rect2}>
          <View style={styles.iconRow}>
            {
              (props.transtype == 'receive')?
                <IoniconsIcon
                name="md-trending-down"
                style={styles.iconGreen}
                ></IoniconsIcon>:
              (props.transtype =='transfer') ?
                <IoniconsIcon
              name="md-trending-up"
              style={styles.iconRed}
            ></IoniconsIcon> :
            (props.transtype =='liquidate') ?
              <MaterialCommunityIcons name="cash-multiple" style={styles.iconRed} />:
              <MaterialCommunityIcons name="cash-register" style={styles.iconGreen} />
            }
              
              
            <Text style={styles.text3}>{props.transtype}</Text>
            <EvilIconsIcon name="clock" style={styles.icon2}></EvilIconsIcon>
            <Text style={styles.text4}>{props.transdate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text2: {
    top: 13,
    left: 15,
    width: 320,
    height: 56,
    color: "#121212",
    position: "absolute",
    fontSize: 16,
    lineHeight: 20,
    fontFamily :"baumans-regular"
  },
  rect2: {
    left: 0,
    width: 274,
    position: "absolute",
    bottom: 0,
    height: 20,
    flexDirection: "row"
  },
  iconGreen: {
    left: 10,
    color: "rgba(26,216,35,1)",
    fontSize: 18
  },
  iconRed: {
    left: 10,
    color: "red",
    fontSize: 18
  },
  iconBlue: {
    left: 10,
    color: "#0c05e6",
    fontSize: 18
  },
  text3: {
    color: "#121212",
    fontSize: 14,
    marginLeft: 15,
    marginTop: 1,
    fontFamily :"baumans-regular"
  },
  icon2: {
    color: "grey",
    fontSize: 18,
    marginLeft: 56
  },
  text4: {
    color: "#121212",
    fontSize: 14,
    marginLeft: 5,
    marginTop: 3,
    fontFamily :"baumans-regular"
  },
  iconRow: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: 14
  },
  text2Stack: {
    width: 320,
    height: 72,
    marginTop: 9,
    paddingBottom:3,
    marginLeft: 22,
    borderWidth : 0.5,
    borderRadius : 5,
    borderColor:"black"
  }
});
