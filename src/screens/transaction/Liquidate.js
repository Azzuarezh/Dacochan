import React, { useEffect,Component,useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput
} from "react-native";
import HeaderNoIcon from "../../components/HeaderNoIcon";
import { MaterialIcons } from '@expo/vector-icons'; 
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Icon, Picker, Form } from "native-base";
import PreProcessLiquidate from "./PreProcessLiquidate";

export default Liquidate = ({route,navigation}) => {
  
const [selected,setSelected] = useState('');
useEffect(() => {
  console.log('naff : ', navigation)
    // Fetch the token from storage then navigate to our appropriate place
    loadResourcesAsync = async () =>{
      await Promise.all([
        Font.loadAsync({
          "roboto-regular": require("../../assets/fonts/roboto-regular.ttf"),
          "baumans-regular": require("../../assets/fonts/baumans-regular.ttf"),
          "alegreya-sans-sc-700": require("../../assets/fonts/alegreya-sans-sc-700.ttf")
        })
      ]);
    }

    loadResourcesAsync();
     
  }, []);

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
            <View style={styles.topupBox}>
              <Text style={styles.text6}>LIQUIDATE</Text>
              <Text style={styles.text42}>
                Convert your coin to fiat currency.                 
              </Text>
              <Text style={styles.text42}>Choose your wallet destination to send the money with ZOA coins</Text>
              <View style={styles.form}>
                
                <View style={styles.wallet}>
                  <EntypoIcon
                    name={"wallet"}
                    style={styles.icon7}
                  ></EntypoIcon>
                  <Picker
                    mode="dropdown"
                    placeholder="Select wallet to cashed out"
                    iosHeader="Digital Wallet"
                    iosIcon={<Icon name="arrow-down" style={{color:"white", paddingLeft: 0, marginLeft: 0}}/>}
                    textStyle={{ color: "white", fontFamily:"baumans-regular"}}
                    style={{width:undefined}}
                    selectedValue={selected}
                    onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
                  >
                    <Picker.Item label="Gopay" value="Gopay" />
                    <Picker.Item label="OVO" value="OVO" />
                    <Picker.Item label="Jenius" value="Jenius" />
                    <Picker.Item label="Bank Account" value="Bank" />
                  </Picker>
                </View>

                <View style={styles.walletFiller}></View>
                <View style={styles.recipient}>
                  <EvilIconsIcon
                    name={"user"}
                    style={styles.icon3}
                  ></EvilIconsIcon>
                  <View style={styles.textInput2Stack}>
                    <TextInput
                      placeholder="Recipient"
                      placeholderTextColor="rgba(253,248,248,1)"
                      style={styles.textInput2}
                    ></TextInput>
                    <MaterialIcons name="import-contacts" style={styles.icon6}/>
                  </View>
              </View>
              <View style={styles.recipientFiller}></View>
              <View style={styles.amount}>
                  <FontAwesomeIcon
                    name={"money"}
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
              <IoniconsIcon
                name="md-arrow-forward"
                style={styles.icon5}
                onPress={() => navigation.navigate('PreProcessLiquidate')}
              ></IoniconsIcon>
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
  topupBox: {
    height: 700
  },
  text6: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center",
    marginTop: 39
  },
  text42: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginTop: 9,
    alignSelf: "center"
  },
  form: {
    height: 180,
    marginTop: 17,
    marginLeft: 40,
    marginRight: 40
  },
  wallet: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  textInput5: {
    color:"white",
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 20,
    marginLeft: 9,
    marginTop: 10
  },
  walletFiller: {
    flex: 1
  },
  amount: {
    height: 50,
    backgroundColor: "rgba(251,247,247,0.3)",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: -6
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
    marginLeft: 18,
    marginTop: 10
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    alignSelf: "flex-end",
    marginTop: 18,
    marginRight: 40
  },
   recipientFiller: {
    flex: 1
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
    textInput2Stack: {
    height: 33,
    flex: 1,
    marginRight: 6,
    marginLeft: 9,
    marginTop: 9
  },
  icon6: {
    left: 184,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    top: 0
  },
});
