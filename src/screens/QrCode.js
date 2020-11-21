import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  Image
} from "react-native";
import HeaderX from "../components/HeaderX";

function QrCode(props) {
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
            <View style={styles.qrCodeBox}>
              <Text style={styles.yourQrCode}>YOUR QR CODE</Text>
              <Image
                source={require("../assets/images/zotova2.jpg")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <Text style={styles.qrCodeAddress}>&lt;QR Code Address&gt;</Text>
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
  qrCodeBox: {
    height: 330
  },
  yourQrCode: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    textAlign: "center",
    marginTop: 41,
    marginLeft: 92
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 17,
    marginLeft: 80
  },
  qrCodeAddress: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 13,
    marginLeft: 107,
    alignSelf: "center"
  }
});

export default QrCode;
