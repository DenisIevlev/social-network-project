import React from 'react';
import ProfileInfo from '../profileinfo/profileinfo';
import MyPostsContainer from './myposts/mypostscontainer';
import classes from './profile.module.css';
const Profile = (props) => {
  return (
        <div className={classes.content}>
       <ProfileInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
}
export default Profile;