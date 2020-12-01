import React, { useEffect ,Component } from "react";
import { StyleSheet, View, TouchableOpacity,Text } from "react-native";
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";
import { AppLoading} from "expo";
import * as Font from 'expo-font';

const HeaderNoIcon = (props)=> {

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
          </Left>
          <Body>
            <Title style={styles.logoHeader}>Dacochan</Title>
          </Body>
          <Right>
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

export default HeaderNoIcon;
