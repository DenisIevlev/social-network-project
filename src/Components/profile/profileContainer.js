import React from 'react';
import Profile from './profile.js';
import { setUserProfileActionCreator } from '../../redux/profileReducer.js';
import {connect} from 'react-redux';
import * as axios from 'axios';

class ProfileContainer extends React.Component {

  componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
        this.props.setUserProfileActionCreator(response.data);
      })
  }
   
  render() {
  return (
       <Profile {...this.props} profile={this.props.profile}/>
  );
  }
}

let mapStateToProps = (state) => ({
      profile: state.profilePage.profile
});

export default connect(mapStateToProps, {
    setUserProfileActionCreator
})(ProfileContainer);