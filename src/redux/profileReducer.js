import {profileAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 3 },
    { id: 2, message: 'It\'s my first post', likesCount: 7 }
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  let stateCopy;
  let newPost;

  switch (action.type) {
    case ADD_POST:
      newPost = {
        id: 3,
        message: action.newPostText,
        likesCount: 0
      };
      return stateCopy = {
        ...state,
        posts: [...state.posts, newPost],
      };
    case SET_USER_PROFILE:
      return stateCopy = {
        ...state,
        profile: action.profile

      }
    case SET_STATUS: {
      return stateCopy = {
        ...state,
        status: action.status
      }
    }
    case UPDATE_PHOTO_SUCCESS:
      return stateCopy = {
        ...state,
        profile: { ...state.profile, photos: action.photos }
      }
    default:
      return state;
  }
}

export const addPostCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText
  }
}

export const setUserProfileActionCreator = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
})


export const updatePhotoSuccess = (photos) => ({
  type: UPDATE_PHOTO_SUCCESS,
  photos
})

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(updatePhotoSuccess(response.data.data.photos));
  }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.resultCode === 0) {
    dispatch(setUserProfile(userId));
  } else {
    dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }));
    return Promise.reject(response.messages[0]);
  }
}

export const setUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfileActionCreator(response));
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export default profileReducer;