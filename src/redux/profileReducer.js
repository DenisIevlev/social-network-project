const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const CHECKED = 'CHECKED';
const CANCEL = 'CANCEL';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 3 },
    { id: 2, message: 'It\'s my first post', likesCount: 7 }
  ],
  newPostText: 'Hi, please enter me',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  let stateCopy;
  let newPost;

  switch (action.type) {
    case ADD_POST: 
      newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0
      };
      return stateCopy = {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      return stateCopy = {
        ...state,
        newPostText: action.newPost
      };
      case SET_USER_PROFILE:
        return stateCopy = {
          ...state,
          profile: action.profile

        }
        case CHECKED:
          return stateCopy = {
          ...state,
          checked: true
          }
        case CANCEL: 
        return stateCopy = {
          ...state,
          checked: false
        }
    default:
      return state;
  }
}

export const addPostCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newPost: text }
}

export const setUserProfileActionCreator = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export const checkedActionCreator = (checked) => ({
  type: CHECKED,
  checked
})

export const cancelActionCreator = (checked) => ({
  type: CANCEL,
  checked
})

export default profileReducer;