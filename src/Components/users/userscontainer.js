import React from 'react';
import { followActionCreator, unfollowActionCreator, 
         setUsersActionCreator, setCurrentPageActionCreator, 
         setTotalUsersCountActionCreator, toggleIsFetching,
         toggleIsFollowingProgress } from '../../redux/usersReducer';
import {usersAPI} from '../../api/api';
import { connect } from 'react-redux';
import UsersComponent from './usersComponent';
import Preloader from '../common/preloader/preloader';


class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    .then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsersActionCreator(response.items);
      this.props.setTotalUsersCountActionCreator(response.totalCount);
    })
  }

  onPageChanged = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPageActionCreator(page);
    usersAPI.getUsers(page, this.props.pageSize).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsersActionCreator(response.items);
    })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <UsersComponent
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        followActionCreator={this.props.followActionCreator}
        unfollowActionCreator={this.props.unfollowActionCreator}
        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
        followingInProgress={this.props.followingInProgress} />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default connect(mapStateToProps,
  {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
  toggleIsFetching,
  toggleIsFollowingProgress
  })(UsersAPIComponent);