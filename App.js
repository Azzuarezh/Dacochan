import React, { useState,useEffect, useContext,useMemo, useReducer } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppLoading} from "expo";
import * as Font from 'expo-font';

import { Root } from "native-base";

import AsyncStorage from '@react-native-async-storage/async-storage';
import TabBarIcon from "./src/components/TabBarIcon";

import {stateConditionString} from './src/utils/helpers';
import {AuthContext} from './src/utils/authContext';
import {reducer, initialState} from './src/reducer';

 import Login from "./src/screens/auth/Login";
 import SignUp from "./src/screens/auth/SignUp";
 import SplashScreen from "./src/screens/SplashScreen";
 import Home from './src/screens/Home';
 import Transaction from './src/screens/Transaction';
 import History from './src/screens/History';

 import userDummy from './src/dummy_data/users.json';
 import { storeSession,storeToken } from './src/utils/actions';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default App = ({route, navigation}) =>{
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isLoading,setLoading] = useReducer(reducer);
  
 
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place

    loadResourcesAsync = async () =>{
      await Promise.all([
        Font.loadAsync({
          "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
          "baumans-regular": require("./src/assets/fonts/baumans-regular.ttf"),
          "alegreya-sans-sc-700": require("./src/assets/fonts/alegreya-sans-sc-700.ttf")
        })
      ]);
    }


    const bootstrapAsync = async () => {
      try {
       
        tokenFromAsyncStorage = await AsyncStorage.getItem('userToken');
        sessionJson = await AsyncStorage.getItem("@Wallet:session")
        session = await JSON.parse(sessionJson)
        console.log('token bootstrap: ', {tokenFromAsyncStorage})
        if(session !== null){
          dispatch({type: 'RESTORE_TOKEN', token: tokenFromAsyncStorage, data:session});

        }
      } catch (e) {
        // Restoring token failed
      }
      //dispatch({type: 'RESTORE_TOKEN', token: userToken});
     
      
    };
    loadResourcesAsync();
    bootstrapAsync();
     
  }, []);

  const authContextValue = useMemo(
    () => ({
      signIn: async (inputdata) => {
        const input =inputdata.data;
        console.log('is the data goes to here? :', inputdata);
        if (
          input &&
          input.username !== undefined &&
          input.password !== undefined
        ) {
            const userData = userDummy.map((data) =>{
            if(input.serName == userDummy.userName && input.password == data.password){
              input.firstName= data.firstName;
              input.lastName = data.lastName;
              input.userEmail = data.userEmail;
              input.picturePath = data.picturePath;
              input.ZoaAddress = data.ZoaAddress;
              console.log('inputData:', input)
              return input;
            }          
          })

          if(userData){
            userToken = new Date().getTime().toString();
            storeSession(userData)
            storeToken(userToken)
            console.log('tkn :',userToken);
            console.log('dt :',userData);
            dispatch({type: 'SIGN_IN', token:userToken,data:userData});
          }
          else{            
          console.err('no user found!')
          }
          
        } else {
          dispatch({type: 'TO_SIGNIN_PAGE'});
        }
      },
      signOut: async (data) => {
        dispatch({type: 'SIGN_OUT'});
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
    }),
    [],
  );
  
  


  handleLoadingError = (error) => {
    console.warn(error);  
  }

  handleFinishLoading = (setLoadingComplete) =>{
    setLoadingComplete(true);
  }


  const chooseScreen = (state) => {
    console.log('choose sscreen state : ', state)
    let navigateTo = stateConditionString(state);
    console.log('now we will navigate to screen : ', navigateTo)
    let arr = [];

    switch (navigateTo) {
      case 'LOAD_APP':
        arr.push(<Stack.Screen name="Splash" component={SplashScreen} />);
        break;

      case 'LOAD_SIGNUP':
        arr.push(
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />,
        );
        break;
      case 'LOAD_SIGNIN':
        arr.push(<Stack.Screen name="Login" component={Login} />);
        break;

      case 'LOAD_HOME':
        arr.push(
          <Stack.Screen
            name="Home"
            component={Home}
          />
        );
        break;
      default:
        arr.push(<Stack.Screen name="Login" component={Login} />);
        break;
    }
    return arr[0];
  }
   return (
        <AuthContext.Provider value={authContextValue}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>{chooseScreen(state)}</Stack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      );  
}




