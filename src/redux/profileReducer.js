import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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

export const setUserProfile = (userId) => {
     return (dispatch) => {
     profileAPI.getProfile(userId).then(response => {
     dispatch(setUserProfileActionCreator(response));
  })
 }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response));
    })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if(response.resultCode === 0) {
      dispatch(setStatus(status));
      }
    })
  }
}

export default profileReducer;