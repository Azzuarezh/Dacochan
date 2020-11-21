import AsyncStorage from '@react-native-async-storage/async-storage';


export function logout() {
  return {
    type: 'RESET_STATE'
  };
}



export function storeSession(session) {
  try {
    AsyncStorage.setItem("@Wallet:session", JSON.stringify(session)).then(() => {
      console.log('Session stored');
    })
  }
  catch (err) {
    console.error(err);
    Alert.alert("Unexpected", "Could not store session");
  }
}
export function storeToken(token) {
  try {
    AsyncStorage.setItem("userToken", token).then(() => {
      console.log('Token stored');
    })
  }
  catch (err) {
    console.error(err);
    Alert.alert("Unexpected", "Could not store token");
  }
}