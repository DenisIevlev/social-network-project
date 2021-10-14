const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const photoURL = ['https://imgr.search.brave.com/CXZX16TEdCWXz8kW5V9R-VFmwHr0lueaBpRFuaJLQB0/fit/800/800/ce/1/aHR0cDovL2Fzc2V0/cy52aWV3ZXJzLWd1/aWRlLmhiby5jb20v/bGFyZ2VzMS1lcDEt/cGVvcGxlLXByb2Zp/bGVwaWMtbGFubmlz/dGVyLWphaW1lLTgw/MHg4MDAuanBn',
'https://imgr.search.brave.com/ZHE4gznDNCYGUsQGT6dC6GITQzC4bVHYGwdVq6-qyBE/fit/777/1024/ce/1/aHR0cHM6Ly93d3cu/bWVuc2pvdXJuYWwu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzA3L0hlbnJ5/LUNhdmlsbC00Lmpw/Zw',
'https://imgr.search.brave.com/jntXbG5O0saqaosowvaIfmVZInbvl5Y8vqd7t4oe3tQ/fit/899/1200/ce/1/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I0L1RJRkZfMjAx/OV9qbG9fKDFfb2Zf/MSktMl8oNDg2OTY2/NzE1NjEpXyhjcm9w/cGVkKS5qcGc'

];
let initialState = {
  users: [
    { id: 1, photoURL: photoURL[0], followed: false, fullName: 'Jaime', status: 'Great changes', location: {city: 'Denmark', country:'Danish'}},
    { id: 2, photoURL: photoURL[1], followed: true, fullName: 'Henry', status: 'Good day', location: {city: 'Saint Helier', country:'British'}},
    { id: 3, photoURL: photoURL[2], followed: true, fullName: 'Jennifer', status: 'So many good people in my life', location: {city: 'New York City', country:'USA'}}
  ]
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
            users: [...state.users, ...action.users]
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