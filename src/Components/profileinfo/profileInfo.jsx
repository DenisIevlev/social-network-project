import Preloader from '../common/preloader/preloader';
import classes from './profileInfo.module.css';
import ProfileStatus from './ProfileStatus/profileStatus';

const ProfileInfo = (props) => {

  if(!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img src={props.profile.photos.large} className={classes.ava}/>
        <span className={classes.fullName}>{props.profile.fullName}</span> <br/> <br/> 
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
      </div>
  );
}
export default ProfileInfo;