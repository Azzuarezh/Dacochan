import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function Dropdown(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder="Recipient"
        placeholderTextColor="rgba(253,248,248,1)"
        style={styles.textInput5}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  textInput5: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14
  }
});

export default Dropdown;
