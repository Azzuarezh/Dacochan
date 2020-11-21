export const reducer = (prevState, action) => {
  console.log('action :', action)
  console.log('tuken: ', action.token)
  console.log('duta: ', action.data)
    switch (action.type) {
      case 'TO_SIGNUP_PAGE':
        return {
          ...prevState,
          isLoading: false,
          isSignedUp: false,
          noAccount: true,
          userData:null,
        };
      case 'TO_SIGNIN_PAGE':
        return {
          ...prevState,
          isLoading: false,
          isSignedIn: false,
          noAccount: false,
          userData: null,
        };
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          isSignedIn: true,
          isSignedUp: true,
          userToken: action.token,
          userData: action.data,
          isLoading: false,
        };
      case 'SIGNED_UP':
        return {
          ...prevState,
          isSignedIn: true,
          isSignedUp: true,
          isLoading: false,
          userToken: null,
          userData: null,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignedOut: false,
          isSignedIn: true,
          isSignedUp: true,
          userToken: action.token,
          userData: action.data,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignedOut: true,
          userData:null,
        };
    }
  };
  
  export const initialState = {
    isLoading: true,
    isSignedOut: false,
    isSignedUp: false,
    noAccount: false,
    isSignedIn: false,
    userToken: null,
    userData: null,
  };
  