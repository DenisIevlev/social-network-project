import React from 'react';
import Profile from './profile';
import {setUserProfile} from '../../redux/profileReducer';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.setUserProfile(userId);
  }
   
  render() {
   if(!this.props.isAuth){
        return <Redirect to={'/login'}/>
    }
  return (
       <Profile {...this.props} profile={this.props.profile}/>
  );
  }
}

let mapStateToProps = (state) => ({
      profile: state.profilePage.profile,
      isAuth: state.auth.isAuth
});


let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile
})(withUrlDataContainerComponent);