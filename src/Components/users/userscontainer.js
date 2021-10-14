import React from 'react';
import Users from './users';
import {followActionCreator, unfollowActionCreator, setUsersActionCreator} from '../../redux/users-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
      users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
        followActionCreator: (userId) => dispatch(followActionCreator(userId)),
        unfollowActionCreator: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsersActionCreator: (users) => dispatch(setUsersActionCreator(users))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);  