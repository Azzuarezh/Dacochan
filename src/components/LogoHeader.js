import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function LogoHeader(props) {
  return (
    <View style={[styles.root, props.style]}>
      <Text style={styles.dacochan}>Dacochan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
  dacochan: {
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    fontFamily: "baumans-regular",
    alignSelf: "center"
  }
});

export default LogoHeader;
