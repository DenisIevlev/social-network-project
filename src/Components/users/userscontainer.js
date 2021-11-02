import React from 'react';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, 
         setCurrentPageActionCreator, setTotalUsersCountActionCreator, toggleIsFetching } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import UsersComponent from './usersComponent';
import Preloader from '../common/preloader/preloader';
import * as axios from 'axios';


class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsersActionCreator(response.data.items);
      this.props.setTotalUsersCountActionCreator(response.data.totalCount);
    })
  }

  onPageChanged = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPageActionCreator(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsersActionCreator(response.data.items);
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
        unfollowActionCreator={this.props.unfollowActionCreator} />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps,
  {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
  toggleIsFetching
  })(UsersAPIComponent);