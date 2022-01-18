import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  password: null,
  rememberMe: false,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default authReducer;

export const setAuthUserDataActionCreator = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
  }
}

export const setAuthUserData = () => {
  return async (dispatch) => {
    let response = await authAPI.authMe(); 
      if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        dispatch(setAuthUserDataActionCreator(id, email, login, true));
      }
  }
}

export const loginUserData = (email, password, rememberMe) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
      if (response.resultCode === 0) {
        dispatch(setAuthUserData());
      } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Authorization error';
        dispatch(stopSubmit('login', { _error: message }));
      }
  }
}

export const logoutUserData = () => {
  return async (dispatch) => {
    let response = await authAPI.logout();
      if (response.resultCode === 0) {
        dispatch(setAuthUserDataActionCreator(null, null, null, false));
      }
  }
}

