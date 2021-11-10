import React from 'react';
import Profile from './profile.js';
import { setUserProfileActionCreator } from '../../redux/profileReducer.js';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {usersAPI} from '../../api/api';

class ProfileContainer extends React.Component {

  componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        usersAPI.getUsersId(userId).then(response => {
        this.props.setUserProfileActionCreator(response);
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


let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfileActionCreator
})(withUrlDataContainerComponent);