import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import HeaderNoIcon from "../components/HeaderNoIcon";
import ScrollViewEntry from "../components/ScrollViewEntry";

function History(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderNoIcon
        style={styles.headerX}
      ></HeaderNoIcon>
      <View style={styles.bodyStack}>
        <View style={styles.body}>
          <View style={styles.tabs}>
            <TouchableOpacity style={styles.all_Transaction}>
              <Text style={styles.text}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.incoming}>
              <Text style={styles.text2}>Incoming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.text3}>Outgoing</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.scrollArea1}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea1_contentContainerStyle}
          >
            <ScrollViewEntry style={styles.scrollViewEntry1}></ScrollViewEntry>
            <ScrollViewEntry style={styles.scrollViewEntry4}></ScrollViewEntry>
            <ScrollViewEntry style={styles.scrollViewEntry2}></ScrollViewEntry>
            <ScrollViewEntry style={styles.scrollViewEntry3}></ScrollViewEntry>
          </ScrollView>
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
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 1
  },
  tabs: {
    height: 80,
    backgroundColor: "rgba(31,120,204,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 0,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 0
  },
  all_Transaction: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center"
  },
  text: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  incoming: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    borderRadius: 100,
    justifyContent: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  button: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    borderRadius: 100,
    justifyContent: "center"
  },
  text3: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  scrollArea1: {
    top: 80,
    left: 0,
    height: 581,
    position: "absolute",
    right: 0
  },
  scrollArea1_contentContainerStyle: {
    height: 581
  },
  scrollViewEntry1: {
    height: 100
  },
  scrollViewEntry4: {
    width: 360,
    height: 100
  },
  scrollViewEntry2: {
    width: 360,
    height: 100
  },
  scrollViewEntry3: {
    width: 360,
    height: 100
  },
  bodyStack: {
    flex: 1,
    marginBottom: -1
  }
});

export default History;
