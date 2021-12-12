import React from 'react';
import { follow, unfollow, 
         setCurrentPageChanged, toggleIsFollowingProgress,
         getUsers } from '../../redux/usersReducer';
import {getUsersPage, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/usersSelectors';
import { connect } from 'react-redux';
import UsersComponent from './usersComponent';
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.currentPage, this.pageSize);
  }

  onPageChanged = (currentPage) => {
    this.props.getUsers(currentPage, this.pageSize);
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
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress} />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

 export default compose(connect(mapStateToProps, {follow, unfollow, toggleIsFollowingProgress, getUsers}))(UsersContainer);