import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: 
    return {
      ...state,
       users: state.users.map(user => {
         if(user.id === action.userId){
           return {...user, followed: true};
         }
         return user;
       })
    }
    case UNFOLLOW:
      return {
        ...state,
         users: state.users.map(user => {
           if (user.id === action.userId){
             return {...user, followed: false};
           }
           return user;
         })
      }
      case SET_USERS:
        return {
            ...state, 
            users: [...action.users]
        }
        case SET_CURRENT_PAGE:
          return {
            ...state,
            currentPage: action.currentPage
          }
          case SET_TOTAL_COUNT:
            return {
              ...state,
              totalUsersCount: action.totalUsersCount
            }
            case TOGGLE_IS_FETCHING:
              return {
                ...state,
                isFetching: action.isFetching
              }
              case TOGGLE_IS_FOLLOWING_PROGRESS: 
              return {
               ...state,
               followingInProgress: action.isFetching ?
                [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id != action.userId)
              }
    default:
      return state;
  }
}

export default usersReducer;

export const followActionCreator = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}

export const unfollowActionCreator = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const setCurrentPageActionCreator = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

export const setTotalUsersCountActionCreator = (totalUsersCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalUsersCount
  }
}

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

export const toggleIsFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
  }
}

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, pageSize)
  .then(response => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsersActionCreator(response.items));
    dispatch(setTotalUsersCountActionCreator(response.totalCount));
  })
 }
}

export const setCurrentPageChanged = (currentPage, pageSize) => {
  return (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPageActionCreator(currentPage));
  usersAPI.getUsers(currentPage, pageSize)
  .then(response => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsersActionCreator(response.items));
  })
 }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersAPI.follow(userId)
    .then(response => {
      if(response.resultCode == 1) {
        dispatch(followActionCreator(userId));
      };
      dispatch(toggleIsFollowingProgress(false, userId));
    })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(false, userId));
    usersAPI.unfollow(userId)
    .then(response => {
      if(response.resultCode == 0) {
        dispatch(unfollowActionCreator(userId))
      };
        dispatch(toggleIsFollowingProgress(userId));
    })
  }
}