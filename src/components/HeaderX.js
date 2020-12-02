import React, { useEffect ,Component } from "react";
import { StyleSheet, View, TouchableOpacity,Text, Alert } from "react-native";
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AppLoading} from "expo";
import * as Font from 'expo-font';

const HeaderX = (props)=> {

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
        { text: "Yes", onPress: () => console.log("Yes Pressed") }
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
        <Header style={[styles.container, props.style]}>
          <Left style={styles.group}>
            <Button transparent>
              <Icon name={props.icon2Name || "dehaze"} style={styles.icon3}></Icon>
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
              <Icon name={props.icon2Name || "notifications"} style={styles.icon3}></Icon>
            </Button>
          </Right>
        </Header>

    // <View style={[styles.container, props.style]}>
    //   <View style={styles.group}>
    //     <View style={styles.logoHeaderFiller}></View>
    //     <TouchableOpacity /* Conditional navigation not supported at the moment */
    //       onPress={() => console.log("Navigate to Settings")}
    //       style={styles.group2}
    //     >
    //       <Icon name={props.icon2Name || "dehaze"} style={styles.icon3}></Icon>
    //     </TouchableOpacity>
    //     <Text>Dacochan</Text>
    //   </View>
    // </View>
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

export default HeaderX;
