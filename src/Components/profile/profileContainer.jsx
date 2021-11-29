import React from 'react';
import Profile from './profile';
import {setUserProfile, getStatus, updateStatus} from '../../redux/profileReducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.setUserProfile(userId);
        this.props.getStatus(userId);
  }
   
  render() {
  return (
       <Profile {...this.props} profile={this.props.profile}/>
  );
  }
}


let mapStateToProps = (state) => ({
      profile: state.profilePage.profile,
      status: state.profilePage.status
});


export default compose(connect(mapStateToProps, ({setUserProfile, getStatus, updateStatus})),  
withRouter, withAuthRedirect)(ProfileContainer);