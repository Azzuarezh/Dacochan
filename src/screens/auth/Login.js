import React, { useEffect, useState ,useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, 
  Header, 
  Title, 
  Content, 
  Button, 
  Left, 
  Body, 
  Text, 
  Form, 
  Item, 
  Label, 
  Input, 
  Right, 
  Toast,
  Spinner} from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

//dummy data for testing
import Users  from '../../dummy_data/users.json';
import { set } from "lodash";
import { NavigationContainer } from '@react-navigation/native';

import { validateAll } from 'indicative/validator';
import {
    FormValidationMessage
} from 'react-native-elements';

import { AuthContext } from '../../utils/authContext';

    const Login = ({navigation}) =>{
  

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [SignInErrors, setSignInErrors] = useState({});
    const { signIn, gotoSignUpPage } = useContext(AuthContext);

    const handleSignIn = () => {
          // https://indicative.adonisjs.com
          const rules = {
              username : 'required|alpha_numeric',
              password: 'required|string|min:6|max:40'
          };

          const data = {
              username: userName,
              password: password
          };

          const messages = {
              required: field => `${field} is required`,
              'username.alpha_numeric': 'Username contains unallowed characters',
              'password.min': 'password must contains min 6 characters.'
          };

          validateAll(data, rules, messages)
              .then(() => {
                  console.log('success sign in');
                  signIn({ data });
              })
              .catch(err => {
                  const formatError = {};
                  err.forEach(err => {
                      formatError[err.field] = err.message;
                  });
                  setSignInErrors(formatError);
                  Toast.show({
                text: formatError[Object.keys(formatError)[0]],
                buttonText: "Ok",
                type: "danger"
              })
              });
      };

    return (
        <View style={styles.root}>
          <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
          <View style={styles.background}>
            <ImageBackground
              style={styles.rect}
              imageStyle={styles.rect_imageStyle}
              source={require("../../assets/images/Gradient_tOgnPFL.png")}
            >
              <View style={styles.logoColumn}>
                <View style={styles.logo}>
                  <View style={styles.endWrapperFiller}></View>
                  <View style={styles.text3Column}>
                    <Text style={styles.text3}>Dacochan</Text>
                    <View style={styles.rect7}></View>
                  </View>
                </View>
                <View style={styles.form}>
                  <View style={styles.usernameColumn}>
                    <View style={styles.username}>
                      <EvilIconsIcon
                        name="user"
                        style={styles.icon22}
                      ></EvilIconsIcon>
                      <Input
                        placeholder="Username"
                        placeholderTextColor="rgba(255,255,255,1)"
                        secureTextEntry={false}
                        style={styles.usernameInput}
                        value={userName} onChangeText={setUserName}
                        errorStyle={{ color: 'red' }}
                      />
                    </View>
                    <View style={styles.password}>
                      <EvilIconsIcon
                        name="lock"
                        style={styles.icon2}
                      ></EvilIconsIcon>
                      <Input
                        placeholder="Password"
                        placeholderTextColor="rgba(255,255,255,1)"
                        style={styles.usernameInput}
                        value={password} onChangeText={setPassword} secureTextEntry
                      />
                    </View>
                  </View>
                  <View style={styles.usernameColumnFiller}></View>
                  <TouchableOpacity
                    onPress={() => handleSignIn()}
                    style={styles.button}
                  >
                    <Text style={styles.text2}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.logoColumnFiller}></View>
              <View style={styles.footerTexts}>
                <TouchableOpacity
                  onPress={() => gotoSignUpPage()}
                  style={styles.button2}
                >
                  <View style={styles.createAccountFiller}></View>
                  <Text style={styles.createAccount}>Create Account</Text>
                </TouchableOpacity>
                <View style={styles.button2Filler}></View>
                <Text style={styles.needHelp}>Need Help?</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      );
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(31,120,204,1)"
  },
  background: {
    flex: 1
  },
  rect: {
    flex: 1
  },
  rect_imageStyle: {},
  logo: {
    width: 102,
    height: 111,
    alignSelf: "center"
  },
  endWrapperFiller: {
    flex: 1
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    fontFamily: "baumans-regular"
  },
  rect7: {
    height: 8,
    backgroundColor: "#25cdec",
    marginLeft: 51,
    marginRight: 61
  },
  text3Column: {
    marginBottom: 6,
    marginLeft: -49,
    marginRight: -58
  },
  form: {
    height: 230,
    marginTop: 59
  },
  username: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon22: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  usernameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 10,
    marginTop: 14
  },
  password: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  passwordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  usernameColumn: {},
  usernameColumnFiller: {
    flex: 1
  },
  button: {
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  logoColumn: {
    marginTop: 130,
    marginLeft: 41,
    marginRight: 41
  },
  logoColumnFiller: {
    flex: 1
  },
  footerTexts: {
    height: 14,
    flexDirection: "row",
    marginBottom: 36,
    marginLeft: 37,
    marginRight: 36
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: "flex-end"
  },
  createAccountFiller: {
    flex: 1
  },
  createAccount: {
    color: "rgba(255,255,255,0.5)"
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  needHelp: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "flex-end",
    marginRight: -1
  }
});
export default Login;
