import Preloader from '../common/preloader/preloader';
import classes from './profileInfo.module.css';
import ProfileStatus from './ProfileStatus/profileStatus';

const ProfileInfo = ({profile, status, updateStatus}) => {

  if(!profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img src={profile.photos.large} className={classes.ava}/>
        <span className={classes.fullName}>{profile.fullName}</span> <br/> <br/> 
      <ProfileStatus status={status} updateStatus={updateStatus}/>
      </div>
      </div>
  );
}
export default ProfileInfo;