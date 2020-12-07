import React, { useEffect ,Component } from "react";
import { StyleSheet, View, TouchableOpacity,Text } from "react-native";
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";
import { AppLoading} from "expo";
import * as Font from 'expo-font';

export default HeaderNoIcon = (props) => {


  return (
        <Header style={[styles.container, props.style]}>
          <Left style={styles.group}>
          <Button transparent onPress={()=> props.navigation.openDrawer()}>
              <Icon name={"dehaze"} style={styles.icon3}></Icon>
            </Button>
          </Left>
          <Body>
            <Title style={styles.logoHeader}>Dacochan</Title>
          </Body>
          <Right>
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

