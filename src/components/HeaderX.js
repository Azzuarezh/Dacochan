import React, { useEffect ,Component,useContext } from "react";
import { StyleSheet, View, TouchableOpacity,Text, Alert } from "react-native";
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import {Badge, WithBadge} from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading} from "expo";
import * as Font from 'expo-font';
import {AuthContext} from '.../../utils/authContext';


export default HeaderX = ({navigation}) => {
  
const {signOut} = useContext(AuthContext);
  const handleLogout = () => {
    console.log('handle logout');
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

      loadResourcesAsync = async () =>{
        await Promise.all([
          Font.loadAsync({
            "roboto-regular": require("../assets/fonts/roboto-regular.ttf"),
            "baumans-regular": require("../assets/fonts/baumans-regular.ttf"),
            "alegreya-sans-sc-700": require("../assets/fonts/alegreya-sans-sc-700.ttf")
          })
        ]);
      }



      loadResourcesAsync();
      
    }, []);


    

  return (
        <Header style={[styles.container]}>
          <Left style={styles.group}>
            <Button transparent>
              <Icon name={"dehaze"} style={styles.icon3}></Icon>
            </Button>
          </Left>
          <Body>
            <Title style={styles.logoHeader}>Dacochan</Title>
          </Body>
          <Right>
           <Button transparent>
             <MaterialCommunityIcons name="logout" style={styles.icon3} onPress={ConfirmLogout}/>
            </Button>
            <Button transparent>
            <Icon name={ "notifications"} style={styles.icon3}>
            </Icon>
                <Badge
                    status="error"
                    value="99+"
                    containerStyle={{ position: 'absolute', top: 3, right: 3 }}
                  />

            </Button>
          </Right>
        </Header>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(31,120,204,1)"
  },
  group: {
    backgroundColor: "rgba(31,120,204,1)",
    flexDirection: "row",
  },
  logoHeader: {
    color : "white",
    fontSize: 33,
    fontWeight: "bold",
    fontFamily: "baumans-regular",
    alignSelf: "center"
  },
  logoHeaderFiller: {
    flex: 1,
    flexDirection: "row"
  },
  group2: {
    width: 25,
    height: 25,
    marginRight: 325,
    marginTop: 15
  },
  icon3: {
    color: "rgba(250,250,250,1)",
    fontSize: 25
  },
});


