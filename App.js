import React, { useState, useEffect , useMemo, useReducer } from "react";
import { View,ActivityIndicator,StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  createDrawerNavigator} from "@react-navigation/drawer";

import { AppLoading} from "expo";
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import {
  SafeAreaView
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


import {stateConditionString} from './src/utils/helpers';
import {AuthContext} from './src/utils/authContext';
import {reducer, initialState} from './src/reducer';


import Login from "./src/screens/auth/Login";
import SignUp from "./src/screens/auth/SignUp";
import SplashScreen from "./src/screens/SplashScreen";
import Transaction from './src/screens/Transaction';
import Settings from './src/screens/Settings';
import Feedback from './src/screens/Feedback';
import userDummy from './src/dummy_data/users.json';
import { GetSession, StoreSession, GetToken , StoreToken} from './src/utils/actions';

import ferifeImage from  './src/assets/images/user_pic/ferife.jpg';
import kohirImage from  './src/assets/images/user_pic/kohir.jpg';
import anonymousImage from  './src/assets/images/user_pic/anonymous.jpg';

import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { Root, Toast } from "native-base";
const Stack = createStackNavigator();


export default App = (props,{route, navigation}) =>{

  const [state, dispatch] = useReducer(reducer, initialState)
  const [isReady,setReady] = useState(false);
 
  useEffect(() => {
    //to disable yelow box
    console.disableYellowBox = true;
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      try {
       
        tokenFromAsyncStorage = await GetToken();
        console.log('token asyncstorage: ',tokenFromAsyncStorage)
        sessionJson =  await GetSession();
        console.log('session asyncstorage: ',sessionJson)
        session = JSON.parse(sessionJson)
        
        if(session !== null){
          dispatch({type: 'RESTORE_TOKEN', token: tokenFromAsyncStorage, data:session});

        }
      } catch (e) {
        // Restoring token failed
        console.warn('error restore token in App: ', e)
      }
      //dispatch({type: 'RESTORE_TOKEN', token: userToken});
     
      
    };

    const loadResourcesAsync = async () =>{
      await Promise.all([
        Font.loadAsync({
          "Roboto": require('native-base/Fonts/Roboto.ttf'),
          "Roboto_medium": require('native-base/Fonts/Roboto_medium.ttf'),
          "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
          "baumans-regular": require("./src/assets/fonts/baumans-regular.ttf"),
          "alegreya-sans-sc-700": require("./src/assets/fonts/alegreya-sans-sc-700.ttf")
        })
      ]).then(()=>{setReady(true)});
    }

    
    const _cacheResourcesAsync = async ()=> {
      const images = [kohirImage,ferifeImage,anonymousImage];

      const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
      }); 
      return Promise.all(cacheImages);
    }


    bootstrapAsync();
    _cacheResourcesAsync();
    loadResourcesAsync();
  }, []);

  const authContextValue = useMemo(
    () => ({
      state:state,
      dispatch:dispatch,
      signIn: async (inputdata) => {
        const input =inputdata.data;
        console.log(JSON.stringify('input :',input))
        if (
          input &&
          input.username !== undefined &&
          input.password !== undefined
        ) {
            const userData = {}; 
            userDummy.map((data) =>{
              console.log('dt from json ',JSON.stringify(data))
            if(input.username == data.username && input.password == data.password){
              userData.firstName = data.firstName;
              userData.lastName = data.lastName;
              userData.userEmail = data.userEmail;
              userData.picturePath = data.picturePath;
              userData.username = data.username;
              userData.Zoa = data.Zoa;            
            }          
          })

          if(userData && userData != null && userData.username == input.username){
            userToken = new Date().getTime().toString();
            StoreSession(userData)
            StoreToken(userToken)
            console.log('sign userdata',JSON.stringify(userData))
            dispatch({type: 'SIGN_IN', token:userToken,data:userData});
          }
          else{
            console.warn('no user found')            
          Toast.show({
              text: 'Username or Password Incorrect!',
              buttonText: 'Ok',
              type: "danger"
            })
          }
          
        } else {
          dispatch({type: 'TO_SIGNIN_PAGE'});
        }
      },
      signOut: async (data) => {
        await AsyncStorage.multiRemove(['@Wallet:session','userToken']).then(() => console.log('session and token on Storage cleared!'))
        dispatch({type: 'SIGN_OUT'});
        Toast.show({
                text: "Signed out successfully!",
                buttonText: "Ok",
                type: "success"
              })
      },
      signUp: async (data) => {
        if (
          data &&
          data.username !== undefined &&
          data.email !== undefined &&
          data.password !== undefined
        ) {
          dispatch({type: 'SIGNED_UP'});
        } else {
          dispatch({type: 'TO_SIGNUP_PAGE'});
        }
      },
      gotoSignUpPage: async () => {
        dispatch({type: 'TO_SIGNUP_PAGE'});
      },
      openDrawer: () =>{
        navigation.openDrawer();
      }
    }),
    [],
  );
  

  if(!isReady){
    return (
         <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator />
        </View>
      );
  }else{
      return (
        <AuthContext.Provider value={authContextValue}>
        <Root>
          <NavigationContainer>
          {
           (stateConditionString(state) == 'LOAD_APP') ?
           <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Splash" component={SplashScreen} />
            </Stack.Navigator> :
           (stateConditionString(state) == 'LOAD_SIGNUP') ?
           <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="SignUp" component={SignUp}
            options={{animationTypeForReplace: state.isSignout ? 'pop' : 'push',}}
            />
            </Stack.Navigator> :
            (stateConditionString(state) =='LOAD_SIGNIN') ?
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator> :
            (stateConditionString(state) =='LOAD_HOME')?
            <DrawerNavigator/>:
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
          }
              
          </NavigationContainer>
          </Root>
        </AuthContext.Provider>
      );  
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});




