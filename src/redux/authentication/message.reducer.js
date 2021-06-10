import AuthenticationActionTypes from './authentication.types'

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AuthenticationActionTypes.SET_MESSAGE:
      return { message: payload };

    case AuthenticationActionTypes.CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}
