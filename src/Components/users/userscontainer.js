import React from 'react';
import Users from './users';
import {followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator} from '../../redux/users-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
        followActionCreator: (userId) => dispatch(followActionCreator(userId)),
        unfollowActionCreator: (userId) => dispatch(unfollowActionCreator(userId)),
        setUsersActionCreator: (users) => dispatch(setUsersActionCreator(users)),
        setCurrentPageActionCreator: (currentPage) => dispatch(setCurrentPageActionCreator(currentPage)),
        setTotalUsersCountActionCreator: (totalCount) => dispatch(setTotalUsersCountActionCreator(totalCount))
        
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);  