import AsyncStorage from '@react-native-async-storage/async-storage';

  const GetToken = async () =>{
    return await AsyncStorage.getItem('userToken',(error, result) => {
        if (result) {
            return result
        }
        else{
          console.warn('could not get token : ', error)
        }
    })
  }
  const GetSession = async () =>{
    return await AsyncStorage.getItem('@Wallet:session',(error, result) => {
        if (result) {
            return result
        }
        else{
          console.warn('could not get session : ', error)
        }
    })
  }

  const StoreSession = (session) => {
  try {
    AsyncStorage.setItem("@Wallet:session", JSON.stringify(session)).then(() => {
      console.log('Session stored');
    })
  }
  catch (err) {
    console.warn('could not store session :',err);
  }
}
const StoreToken = (token) => {
  try {
    AsyncStorage.setItem("userToken", token).then(() => {
      console.log('Token stored');
    })
  }
  catch (err) {
    console.warn('could not store token : ',err);
  }
}

export { GetSession, StoreSession, GetToken, StoreToken };