import React, { Component,useState,useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import { Button, Icon, Fab } from 'native-base';
import HeaderNoIcon from "../components/HeaderNoIcon";
import ScrollViewEntry from "../components/ScrollViewEntry";

export default History = ({navigation}) => {

  const [currentTab,setCurrentTab] = useState('all');
  const [active,setActive] = useState(false);
  const [HistoryData,setHistoryData] = useState({
    "incoming":[
      {
        "transtype":"receive",
        "date":"Nov 16, 2020",
        "description":"Received 2.0 Zoa from John" 
      },
      {
        "transtype":"topup",
        "date":"Nov 15, 2020",
        "description":"Topup 10.0 Zoa from OVO wallet" 
      },
    ],
    "outgoing":[
      {
        "transtype":"transfer",
        "date":"Nov 17, 2020",
        "description":"Transfer 10.0 Zoa to Kohir" 
      },
      {
        "transtype":"liquidate",
        "date":"Nov 18, 2020",
        "description":"Liquidate $15.0 to Bank Account BCA" 
      },
    ]
  });

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <HeaderNoIcon
        style={styles.headerX}
        navigation={navigation}
      ></HeaderNoIcon>
      <View style={styles.bodyStack}>
        <View style={styles.body}>
          <View style={styles.tabs}>
            <TouchableOpacity style={(currentTab=='all')?[styles.all_Transaction,styles.highlightedTab]:styles.all_Transaction}
            onPress={()=> setCurrentTab('all')}
            >
              <Text style={styles.text}>All </Text>
            </TouchableOpacity>
            <TouchableOpacity style={(currentTab=='incoming')? [styles.incoming,styles.highlightedTab]:styles.incoming}
            onPress={()=> setCurrentTab('incoming')}>
              <Text style={styles.text2}>Incoming</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={(currentTab=='outgoing')? [styles.button,styles.highlightedTab]:styles.button}
            onPress={()=> setCurrentTab('outgoing')}>
              <Text style={styles.text3}>Outgoing</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.scrollArea1}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea1_contentContainerStyle}
          >
          
            {(currentTab == 'all')?

              HistoryData.incoming.concat(HistoryData.outgoing).map((inc)=>(
                <ScrollViewEntry style={styles.scrollViewEntry1} 
                  transtype={inc.transtype} 
                transdate={inc.date}
                description={inc.description}></ScrollViewEntry>
              ))
              : (currentTab == 'incoming')?
              HistoryData.incoming.map((inc)=>(
                <ScrollViewEntry style={styles.scrollViewEntry1} 
                  transtype={inc.transtype} 
                transdate={inc.date}
                description={inc.description}></ScrollViewEntry>
              )) :
              HistoryData.outgoing.map((out)=>(
                <ScrollViewEntry style={styles.scrollViewEntry1} 
                  transtype={out.transtype} 
                transdate={out.date}
                description={out.description}></ScrollViewEntry>
              ))
            }
          </ScrollView>
        </View>
        <Fab
            active={active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => setActive(!active)}>
            <Icon name="search" />
          </Fab>
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
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 1
  },
  tabs: {
    height: 80,
    backgroundColor: "rgba(31,120,204,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 0,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 0
  },
  all_Transaction: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    justifyContent: "center"
  },
  text: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  incoming: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    borderRadius: 100,
    justifyContent: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  button: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    borderRadius: 100,
    justifyContent: "center"
  },
  text3: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  scrollArea1: {
    top: 80,
    left: 0,
    height: 581,
    position: "absolute",
    right: 0
  },
  scrollArea1_contentContainerStyle: {
    height: 581
  },
  scrollViewEntry: {
    height: 100
  },
  scrollViewEntry4: {
    width: 360,
    height: 100
  },
  scrollViewEntry2: {
    width: 360,
    height: 100
  },
  scrollViewEntry3: {
    width: 360,
    height: 100
  },
  bodyStack: {
    flex: 1,
    marginBottom: -1
  },
    highlightedTab :{
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor:"rgba(255,255,255,1)",
  },
});
