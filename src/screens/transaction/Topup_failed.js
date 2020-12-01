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
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from '@expo/vector-icons'; 
import EntypoIcon from "react-native-vector-icons/Entypo";


import * as Font from 'expo-font';
 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Icon, Picker, Form } from "native-base";

export default Topup = ({route,navigation}) =>  {
  const [selected,setSelected] = useState('');
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place

    loadResourcesAsync = async () =>{
      console.log('navigation : ', navigation);
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
            <View style={styles.liquidateBox}>
              <View style={styles.text6Column}>
                <Text style={styles.text6}>TOPUP</Text>
                <Text style={styles.text42}>We will give you the account to be transferred followed by the amount of transfer with generated Unique Code after this process.</Text>
                 
                 <View style={styles.form}>
                    <View style={styles.wallet}>
                    <EntypoIcon
                      name={"wallet"}
                      style={styles.icon7}
                    ></EntypoIcon>
                    <Picker
                      mode="dropdown"
                      placeholder="Select source wallet"
                      iosHeader="Digital Wallet"
                      iosIcon={<Icon name="arrow-down" style={{color:"white", paddingLeft: 0, marginLeft: 0}}/>}
                      textStyle={{ color: "white"}}
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
                    name={"credit-card"}
                    style={styles.icon3}
                  ></EvilIconsIcon>
                  <View style={styles.textInput2Stack}>
                    <TextInput
                      placeholder="ID Account"
                      placeholderTextColor="rgba(253,248,248,1)"
                      style={styles.textInput2}
                    ></TextInput>
                  </View>
              </View>

              <View style={styles.walletFiller}></View>

              <View style={styles.recipient}>
                  <EvilIconsIcon
                    name={"user"}
                    style={styles.icon3}
                  ></EvilIconsIcon>
                  <View style={styles.textInput2Stack}>
                    <TextInput
                      placeholder="Account Name"
                      placeholderTextColor="rgba(253,248,248,1)"
                      style={styles.textInput2}
                    ></TextInput>
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
                ></IoniconsIcon>
              </View>
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
  liquidateBox: {
    height: 700
  },
  text6: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center",
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
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 20,
    marginLeft: 9,
    marginTop: 10
  },
  accountId: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10
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
  walletColumnFiller: {
    flex: 1
  },
  amount: {
    height: 50,
    backgroundColor: "rgba(251,247,247,0.3)",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: -65
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
  text6Column: {
    marginTop: 39,
    marginLeft: 40,
    marginRight: 40
  },
  text6ColumnFiller: {
    flex: 1
  },
  rect8: {
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderBottomWidth: 1,
    height: 50,
    marginBottom: -39,
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
    fontSize: 15,
    fontFamily: "baumans-regular"
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
    recipientFiller: {
    flex: 1
  },
  recipient: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 5,
    flexDirection: "row"
  },
});
