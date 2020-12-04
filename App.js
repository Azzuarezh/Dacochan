import React, { useState, useEffect , useMemo, useReducer } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppLoading} from "expo";
import * as Font from 'expo-font';

import { Root } from "native-base";

import AsyncStorage from '@react-native-async-storage/async-storage';


import {stateConditionString} from './src/utils/helpers';
import {AuthContext} from './src/utils/authContext';
import {reducer, initialState} from './src/reducer';

 import Login from "./src/screens/auth/Login";
 import SignUp from "./src/screens/auth/SignUp";
 import SplashScreen from "./src/screens/SplashScreen";
 import Home from './src/screens/Home';
 import Transaction from './src/screens/Transaction';

 import userDummy from './src/dummy_data/users.json';
 import { storeSession,storeToken } from './src/utils/actions';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default App = ({route, navigation}) =>{

  const [state, dispatch] = useReducer(reducer, initialState)
  const [isReady,setReady] = useState(false);
  
 
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      try {
       
        tokenFromAsyncStorage = await AsyncStorage.getItem('userToken');
        sessionJson = await AsyncStorage.getItem('@Wallet:session').then()
        session = JSON.parse(sessionJson)
        console.log('session bootstrap: ', {session})
        if(session !== null){
          dispatch({type: 'RESTORE_TOKEN', token: tokenFromAsyncStorage, data:session});

        }
      } catch (e) {
        // Restoring token failed
        console.err('error restore token: ', e)
      }
      //dispatch({type: 'RESTORE_TOKEN', token: userToken});
     
      
    };
    bootstrapAsync();
     
  }, []);

  const authContextValue = useMemo(
    () => ({
      signIn: async (inputdata) => {
        const input =inputdata.data;
        console.log('is the data goes to here? :', input);
        if (
          input &&
          input.username !== undefined &&
          input.password !== undefined
        ) {
            const userData = {}; 
            userDummy.map((data) =>{
              console.log('--------------------------------------')
            if(input.username == data.username && input.password == data.password){
              console.log('************************')
              console.log('data from json:', JSON.stringify(data) )
              console.log('first name : ',data.firstName)
              console.log('last name : ', data.lastName)
              console.log('email :', data.userEmail)
              console.log('picture :', data.picturePath)
              console.log('zoa detail:', data.Zoa)
              console.log('************************')
              userData.firstName = data.firstName;
              userData.lastName = data.lastName;
              userData.userEmail = data.userEmail;
              userData.picturePath = data.picturePath;
              userData.Zoa = data.Zoa;            
            }          
          })

          console.log('userDatazzzz:', userData)
          if(userData){
            userToken = new Date().getTime().toString();
            storeSession(userData)
            storeToken(userToken)
            dispatch({type: 'SIGN_IN', token:userToken,data:userData});
            tokenFromAsyncStorage = await AsyncStorage.getItem('userToken');
            sessionJson = await AsyncStorage.getItem("@Wallet:session")
            session = await JSON.parse(sessionJson)
            console.log('lets see if the data stored to async storage: ', {session})
          }
          else{            
          console.err('no user found!')
          }
          
        } else {
          dispatch({type: 'TO_SIGNIN_PAGE'});
        }
      },
      signOut: async (data) => {
        console.log('is it going here?????? ')
        await AsyncStorage.multiRemove(['@Wallet:session','userToken']).then(() => console.log('session and token on Storage cleared!'))
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
      gotoSignUpPage: async () => {
        console.log('this going to sign up page')
        dispatch({type: 'TO_SIGNUP_PAGE'});
      },
      getSessionData: async () => {
        console.log('this going to load session data')
        dispatch({type: 'SIGNED_IN'});
      }
    }),
    [],
  );
  
  


  handleLoadingError = (error) => {
    console.warn(error);  
  }

  handleFinishLoading = (setLoadingComplete) =>{
    setReady(true);
  }

  loadResourcesAsync = async () =>{
      await Promise.all([
        Font.loadAsync({
          "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
          "baumans-regular": require("./src/assets/fonts/baumans-regular.ttf"),
          "alegreya-sans-sc-700": require("./src/assets/fonts/alegreya-sans-sc-700.ttf")
        })
      ]);
    }


  const chooseScreen = (state) => {
    console.log('stut : ', state)
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

  if(!isReady){
    return (
        <AppLoading
          startAsync={loadResourcesAsync()}
          onFinish={() => handleFinishLoading()}
          onError={() => handleLoadingError()}
        />
      );
  }else{
      return (
        <AuthContext.Provider value={authContextValue}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>{chooseScreen(state)}</Stack.Navigator>
          </NavigationContainer>
        </AuthContext.Provider>
      );  
  }

   
}




