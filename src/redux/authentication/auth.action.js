import AuthService from '../../services/auth.service';
import AuthenticationActionTypes from './authentication.types'

export const register = (email, nickname, password, phone) => (dispatch) => {
    return AuthService.register(email, nickname, password, phone).then(
      (response) => {
        dispatch({
          type: AuthenticationActionTypes.REGISTER_SUCCESS,
        });
  
        dispatch({
          type: AuthenticationActionTypes.SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: AuthenticationActionTypes.REGISTER_FAIL,
        });
  
        dispatch({
          type: AuthenticationActionTypes.SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: AuthenticationActionTypes.LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: AuthenticationActionTypes.LOGIN_FAIL,
        });
  
        dispatch({
          type: AuthenticationActionTypes.SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: AuthenticationActionTypes.LOGOUT,
    });
  };
  
