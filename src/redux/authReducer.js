import {usersAPI} from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: 
    return {
      ...state,
      ...action.data,
      isAuth: true
    }
    default:
      return state;
  }
}

export default authReducer;

export const setAuthUserDataActionCreator = (userId, email, login) => {
  return {
    type: SET_USER_DATA,
    data: { userId, email, login }
  }
}

export const setAuthUserData = () => {
  return (dispatch) => {
    usersAPI.authMe().then(response => {
      if (response.resultCode === 0) {
        let { id, email, login } = response.data;
       dispatch(setAuthUserDataActionCreator(id, email, login));
      }
    })
  }
}