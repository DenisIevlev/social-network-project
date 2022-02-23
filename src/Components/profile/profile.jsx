import ProfileInfo from '../profileInfo/profileInfo';
import MyPostsContainer from './myPosts/myPostsContainer';
import classes from './profile.module.css';
const Profile = ({profile, status, updateStatus, store, isOwner, savePhoto, saveProfile}) => {
  return (
        <div className={classes.content}>
       <ProfileInfo isOwner={isOwner} savePhoto={savePhoto} saveProfile={saveProfile} profile={profile} status={status} updateStatus={updateStatus}/>
      <MyPostsContainer store={store}/>
    </div>
  );
}
export default Profile;