import ProfileInfo from '../profileInfo/profileInfo';
import MyPostsContainer from './myPosts/myPostsContainer';
import classes from './profile.module.css';
const Profile = (props) => {
  return (
        <div className={classes.content}>
       <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
}
export default Profile;