import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Switch, Image } from "react-native";
import HeaderX from "../components/HeaderX";
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Settings(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderX icon2Name="power" style={styles.headerX}></HeaderX>
      <View style={styles.body}>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 859.43 890.3" style={styles.ellipse}>
            <Ellipse
              strokeWidth={1}
              fill="rgba(255,255,255,1)"
              cx={430}
              cy={445}
              rx={429}
              ry={445}
            ></Ellipse>
          </Svg>
          <View style={styles.settingsList}>
            <View style={styles.accountSettings}>
              <Text style={styles.expanded}>Account Settings</Text>
              <View style={styles.subSettings}>
                <View style={styles.editProfile}>
                  <Text style={styles.text10}>Edit Profile</Text>
                  <View style={styles.text10Filler}></View>
                  <IoniconsIcon
                    name="ios-arrow-forward"
                    style={styles.icon}
                  ></IoniconsIcon>
                </View>
                <View style={styles.changeConnections}>
                  <Text style={styles.changeData}>Change Data</Text>
                  <View style={styles.changeDataFiller}></View>
                  <IoniconsIcon
                    name="ios-arrow-forward"
                    style={styles.icon2}
                  ></IoniconsIcon>
                </View>
              </View>
            </View>
            <View style={styles.sub2}>
              <View style={styles.notifications}>
                <Text style={styles.text7}>Notifications</Text>
                <View style={styles.text7Filler}></View>
                <Switch
                  value={true}
                  trackColor={{ true: "rgba(230, 230, 230,1)" }}
                  thumbColor="rgba(31,178,204,1)"
                  style={styles.switch3}
                ></Switch>
              </View>
              <View style={styles.backup}>
                <Text style={styles.text72}>Backup</Text>
                <View style={styles.text72Filler}></View>
                <Switch
                  value={false}
                  trackColor={{
                    true: "#1fb2cc",
                    false: "rgba(230, 230, 230,1)"
                  }}
                  style={styles.switch2}
                ></Switch>
              </View>
            </View>
          </View>
          <Text style={styles.pageName}>SETTINGS</Text>
          <View style={styles.userInfo}>
            <View style={styles.avatarRow}>
              <Image
                source={require("../assets/images/zotova1.jpg")}
                resizeMode="stretch"
                style={styles.avatar}
              ></Image>
              <View style={styles.useremailDomainComStack}>
                <Text style={styles.useremailDomainCom}>
                  useremail@domain.com
                </Text>
                <Text style={styles.userName}>User{"\n"}Name</Text>
              </View>
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
    width: 360,
    flex: 1
  },
  ellipse: {
    top: 9,
    left: 0,
    width: 859,
    height: 890,
    position: "absolute"
  },
  settingsList: {
    left: 51,
    height: 409,
    position: "absolute",
    right: 450,
    bottom: 272
  },
  accountSettings: {
    height: 165,
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24
  },
  expanded: {
    color: "#121212",
    fontSize: 18,
    marginTop: -3
  },
  subSettings: {
    height: 118,
    marginTop: 9
  },
  editProfile: {
    height: 30,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10
  },
  text10: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6
  },
  text10Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(31,178,204,1)",
    fontSize: 30
  },
  changeConnections: {
    height: 30,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 10,
    marginRight: 10
  },
  changeData: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6
  },
  changeDataFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(31,178,204,1)",
    fontSize: 30
  },
  sub2: {
    height: 186,
    marginTop: 18,
    marginLeft: 29,
    marginRight: 29
  },
  notifications: {
    height: 27,
    alignSelf: "center",
    flexDirection: "row"
  },
  text7: {
    color: "#121212",
    fontSize: 18
  },
  text7Filler: {
    flex: 1,
    flexDirection: "row"
  },
  switch3: {
    width: 40
  },
  backup: {
    height: 27,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 53
  },
  text72: {
    color: "#121212",
    fontSize: 18
  },
  text72Filler: {
    flex: 1,
    flexDirection: "row"
  },
  switch2: {
    width: 40,
    marginRight: -2
  },
  pageName: {
    top: 0,
    left: 85,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24
  },
  userInfo: {
    top: 64,
    left: 87,
    height: 125,
    position: "absolute",
    right: 451,
    flexDirection: "row"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  useremailDomainCom: {
    top: 75,
    left: 0,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 16
  },
  userName: {
    top: 0,
    left: 0,
    color: "#1fb2cc",
    position: "absolute",
    fontSize: 30
  },
  useremailDomainComStack: {
    width: 171,
    height: 97,
    marginLeft: 25,
    marginTop: 13
  },
  avatarRow: {
    height: 110,
    flexDirection: "row",
    flex: 1,
    marginRight: 25
  },
  ellipseStack: {
    height: 899,
    marginTop: 34,
    marginLeft: -50,
    marginRight: -449
  }
});

export default Settings;
