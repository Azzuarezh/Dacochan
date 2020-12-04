import React, { Component,useState,useEffect} from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import HeaderX from "../components/HeaderX";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';

export default Dashboard = ({route, navigation}) => {  

  const [userData, setUserData] = useState({}); 

  useEffect(() => {
 
    // Fetch the token from storage then navigate to our appropriate place

    const bootstrapAsync = async () => {
      try {
        sessionJson = await AsyncStorage.getItem("@Wallet:session")
        console.log('stringJSON : ',sessionJson)
        session = await JSON.parse(sessionJson)
        
        
        if(session !== null){
          console.log('not null dude')
          console.log('session dashboard obj: ', session)
          setUserData(session)
          console.log('userdata bootstrap 432: ',userData)
        }
      } catch (e) {
        // Restoring token failed
        console.log('error restore token: ', e)
      }
      //dispatch({type: 'RESTORE_TOKEN', token: userToken});
      

    };
    bootstrapAsync();
  }, []);



  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderX style={styles.headerX}></HeaderX>
      <View style={styles.body}>
        <View style={styles.headlineStack}>
          <View style={styles.headline}>
            <ImageBackground
              source={require("../assets/images/zotova.jpg")}
              resizeMode="cover"
              style={styles.image}
              imageStyle={styles.image_imageStyle}
            >
              <View style={styles.overlay}>
                <Text style={styles.welcome_Banner}>Welcome {userData.firstName} {userData.lastName} </Text>
                <Text style={styles.amount}>Balance: {userData ? userData.Zoa && userData.Zoa.amount:"Loading..."} ZOA</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.categories1}>
            <View style={styles.button1Column}>
              <TouchableOpacity style={styles.button1}>
                <Icon name="exchange" style={styles.icon}></Icon>
                <View style={styles.iconFiller}></View>
                <View style={styles.rect1}>
                  <Text style={styles.amountZoa}>&lt;Amount&gt; {"\n"}ZOA</Text>
                  <Text style={styles.zoaToday}>Zoa Today</Text>
                  <Text style={styles.amountZoa2}>
                    &lt;Amount&gt; {"\n"}&lt;curr_code&gt;
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button3}>
                <View style={styles.rect3Filler}></View>
                <View style={styles.rect3}>
                  <Text style={styles.marketGraph}>Market graph</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button3}>
                <View style={styles.rect3Filler}></View>
                <View style={styles.rect3}>
                  <Text style={styles.marketGraph}>News</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.button1ColumnFiller}></View>
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
    flex: 1
  },
  headline: {
    top: 0,
    left: 0,
    height: 246,
    position: "absolute",
    right: 0,
    overflow: "hidden"
  },
  image: {
    flex: 1
  },
  image_imageStyle: {},
  overlay: {
    backgroundColor: "rgba(0,0,06,0.4)",
    flex: 1
  },
  welcome_Banner: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    fontWeight:"bold",
    fontFamily: "alegreya-sans-sc-700",
    marginTop: 87,
    alignSelf: "center"
  },
  amount: {
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    fontWeight:"bold",
    fontFamily: "baumans-regular",
    alignSelf:"center",
    marginTop: 14,
  },
  categories1: {
    top: 244,
    left: 0,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0,
    bottom: 0
  },
  button1: {
    width: 331,
    height: 89,
    backgroundColor: "rgba(31,120,204,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  icon: {
    color: "rgba(247,245,245,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 12,
    marginLeft: 150
  },
  iconFiller: {
    flex: 1
  },
  rect1: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    flexDirection: "row"
  },
  amountZoa: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "alegreya-sans-sc-700",
    textAlign: "center",
    marginLeft: 35,
    marginTop: -50
  },
  zoaToday: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    marginLeft: 30,
    alignSelf: "center",
    fontFamily: "baumans-regular"
  },
  amountZoa2: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "alegreya-sans-sc-700",
    textAlign: "center",
    marginLeft: 20,
    marginTop: -50
  },
  button3: {
    width: 331,
    height: 97,
    backgroundColor: "rgba(31,120,204,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 8
  },
  rect3Filler: {
    flex: 1
  },
  rect3: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  marketGraph: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    fontFamily: "baumans-regular",
    textAlign: "center",
    alignSelf: "center"
  },
  button1Column: {
    width: 331,
    marginTop: 20,
    marginLeft: 15
  },
  button1ColumnFiller: {
    flex: 1
  },
  button5: {
    width: 331,
    height: 99,
    backgroundColor: "rgba(31,120,204,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 18,
    marginLeft: 15
  },
  rect5Filler: {
    flex: 1
  },
  rect5: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)"
  },
  news: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    fontFamily: "baumans-regular",
    textAlign: "center",
    marginTop: 7,
    alignSelf: "center"
  },
  headlineStack: {
    flex: 1,
    marginBottom: 71
  }
});