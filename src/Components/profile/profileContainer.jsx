import React from 'react';
import Profile from './profile';
import { setUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

      refreshProfile() {
            let userId = this.props.match.params.userId || this.props.authorizedUserId || this.props.history.push('/login');
            this.props.setUserProfile(userId);
            this.props.getStatus(userId);

      }
      componentDidMount() {
            this.refreshProfile();
      }
      componentDidUpdate(prevProps, prevState, snapshot) {
            if(this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
            }
      }


      render() {
            return (
                  <Profile {...this.props} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}/>
            );
      }
}


let mapStateToProps = (state) => ({
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      authorizedUserId: state.auth.userId,
      isAuth: state.auth.isAuth
});


export default compose(connect(mapStateToProps, ({ setUserProfile, getStatus, updateStatus, savePhoto, saveProfile })),
      withRouter, withAuthRedirect)(ProfileContainer);