import React from 'react';
import ProfileInfoContainer from '../profileInfo/profileInfoContainer';
import MyPostsContainer from './myPosts/myPostsContainer';
import classes from './profile.module.css';
const Profile = (props) => {
  return (
        <div className={classes.content}>
       <ProfileInfoContainer profile={props.profile} checked={props.checked}/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
}
export default Profile;