import React, { Component,useState,useEffect,useContext} from "react";
import { View, Text, Button, Image,StyleSheet,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Badge, WithBadge} from 'react-native-elements';

import { Asset } from 'expo-asset';
import ferifeImage from  '../assets/images/user_pic/ferife.jpg';
import kohirImage from  '../assets/images/user_pic/kohir.jpg';
import anonymousImage from  '../assets/images/user_pic/anonymous.jpg';
import {AuthContext} from '.../../utils/authContext';

export default CustomDrawerContent = (props) => {

  const [userData, setUserData] = useState({}); 

  const {signOut,toggleDrawer} = useContext(AuthContext);

  const handleLogout = () => {
    signOut();
  }
  const ConfirmLogout = () =>
      Alert.alert(
        "Logout",
        "Are You Sure Want to log out?",
        [
          {
            text: "No",
            onPress: () => console.log("No Pressed"),
            style: "cancel"
          },
          { text: "Yes", onPress: () => handleLogout() }
        ],
        { cancelable: false }
      );

  useEffect(() => {
 
    // Fetch the token from storage then navigate to our appropriate place

    const _cacheResourcesAsync = async ()=> {
      const images = [kohirImage,ferifeImage,anonymousImage];

      const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
      }); 
      return Promise.all(cacheImages);
    }

    const bootstrapAsync = async () => {
      try {
        sessionJson = await AsyncStorage.getItem("@Wallet:session")
        session = await JSON.parse(sessionJson)
        
        
        if(session !== null){
          setUserData(session)
        }
      } catch (e) {
        // Restoring token failed
        console.log('error restore token: ', e)
      }
      //dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };
    _cacheResourcesAsync();
    bootstrapAsync();
  }, []);



  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor:"rgba(31,120,204,1)", height:130}}>
        <Image source={(userData  && userData.username) ? 
        (userData.username =='kohir') ? kohirImage :
        (userData.username =='ferife') ? ferifeImage : anonymousImage : anonymousImage}
                  resizeMode="stretch"
                  style={styles.avatar}
                ></Image>
        <Badge
          status="success"
          containerStyle={{ position: 'absolute', top: 10, left: 80  }}
        />
      <Text style={{left:130,top:-100, marginTop:20,marginBottom:10, fontSize:40,fontFamily:"baumans-regular", color:"white"}}>
        {userData.firstName}
      </Text>
      <Text style={{left:120,top:-130, marginTop:20,marginBottom:10, fontSize:15,fontFamily:"baumans-regular", color:"white"}}>
        {userData.userEmail}
      </Text>
      </View>
      <DrawerItemList {...props}/>
       <DrawerItem
        label="Sign Out"
        onPress={ConfirmLogout}
      />
    </DrawerContentScrollView>
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
