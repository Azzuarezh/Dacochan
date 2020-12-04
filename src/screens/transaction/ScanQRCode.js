import React, { useEffect,Component,useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  Image,
  Button
} from "react-native";
import HeaderNoIcon from "../../components/HeaderNoIcon";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Permissions} from 'react-native-unimodules'
import {BarCodeScanner} from 'expo-barcode-scanner';

export default ScanQRCode = ({route,navigation}) => {

  const [hasCameraPermission, setCameraPermission] = useState(null)
  const [scanned,setScanned] = useState(false); 

  useEffect(() => {
    getPermissionsAsync()
  }, []);

  const getPermissionsAsync = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA)
    const isPermissionGranted = status === 'granted'
    console.log(isPermissionGranted)
    setCameraPermission(isPermissionGranted)
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate('Transfer', {address: data});
  };

  if (hasCameraPermission === null) {
    return <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderNoIcon style={styles.headerX}></HeaderNoIcon>
      <View gradientImage="Gradient_xjVvfkX.png" style={styles.body}>
        <View style={styles.background}>
          <ImageBackground
            style={styles.rect7}
            imageStyle={styles.rect7_imageStyle}
            source={require("../../assets/images/Gradient_RQqIPyz.png")}
          >
            <View style={styles.qrCodeBox}>
              <Text style={styles.yourQrCode}>Requesting Permissions camera</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>;
  } 

   if (hasCameraPermission === false) {
    return <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderNoIcon style={styles.headerX}></HeaderNoIcon>
      <View gradientImage="Gradient_xjVvfkX.png" style={styles.body}>
        <View style={styles.background}>
          <ImageBackground
            style={styles.rect7}
            imageStyle={styles.rect7_imageStyle}
            source={require("../../assets/images/Gradient_RQqIPyz.png")}
          >
            <View style={styles.qrCodeBox}>
              <Text style={styles.yourQrCode}>No Access camera</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>;
  } 

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderNoIcon style={styles.headerX}></HeaderNoIcon>
      <View gradientImage="Gradient_xjVvfkX.png" style={styles.body}>
        <View style={styles.background}>
          <ImageBackground
            style={styles.rect7}
            imageStyle={styles.rect7_imageStyle}
            source={require("../../assets/images/Gradient_RQqIPyz.png")}
          >
            <View style={styles.qrCodeBox}>
              <Text style={styles.yourQrCode}>Scanning your destination address</Text>
              
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
              />

              {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

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
    alignSelf: "center",
    marginTop: 41
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