import AuthenticationActionTypes from './authentication.types'

export const setMessage = (message) => ({
    type: AuthenticationActionTypes.SET_MESSAGE,
    payload: message,
  });
  
  export const clearMessage = () => ({
    type: AuthenticationActionTypes.CLEAR_MESSAGE,
  });
  