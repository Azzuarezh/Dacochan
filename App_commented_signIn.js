import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading} from "expo";
import * as Font from 'expo-font';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


import reducer from './src/components/reducer';
import TabBarIcon from "./src/components/TabBarIcon";

export const store = createStore(reducer);

import Dashboard from "./src/screens/Dashboard";
import Home from "./src/screens/Home";
//import Feedback from "./src/screens/Feedback";
import History from "./src/screens/History";
// import Liquidate from "./src/screens/Liquidate";
// import Login from "./src/screens/Login";
// import PreProcessLiquidate from "./src/screens/PreProcessLiquidate";
// import PreProcessTopup from "./src/screens/PreProcessTopup";
// import QrCode from "./src/screens/QrCode";
// import Settings from "./src/screens/Settings";
// import SignUp from "./src/screens/SignUp";
// import Topup from "./src/screens/Topup";
import Transaction from "./src/screens/Transaction";

const Stack = createStackNavigator();
export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? 
   
      <Provider store={store} >
         <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown: false}}>
          {/* {isLoggedIn ? (
            <>
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="Transaction" component={Transaction} />
              <Stack.Screen name="History" component={History} />
            </>
          ) : (
            <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            </>
          )} */}
          <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Transaction" component={Transaction} />
              <Stack.Screen name="History" component={History} />
            </>
        </Stack.Navigator>
      </NavigationContainer>
      
      </Provider>
    : <AppLoading />;
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "baumans-regular": require("./src/assets/fonts/baumans-regular.ttf"),
      "alegreya-sans-sc-700": require("./src/assets/fonts/alegreya-sans-sc-700.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
