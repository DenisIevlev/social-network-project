import React from 'react';
import { follow, unfollow, 
         setCurrentPageChanged, toggleIsFollowingProgress,
         getUsers } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import UsersComponent from './usersComponent';
import Preloader from '../common/preloader/preloader';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    this.props.setCurrentPageChanged(page, this.props.pageSize);
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
  follow,
  unfollow,
  setCurrentPageChanged,
  toggleIsFollowingProgress,
  getUsers
  })(UsersContainer);