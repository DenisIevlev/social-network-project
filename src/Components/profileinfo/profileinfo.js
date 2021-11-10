import React from 'react';
import Ava from '../ava/ava';
import Preloader from '../common/preloader/preloader';
import FindJob from '../common/findJob/findJob';
import check from '../../assets/img/checked.png';
import cancel from '../../assets/img/cancel.png';
import classes from './profileInfo.module.css';

const ProfileInfo = (props) => {

  if(!props.profile) {
    return <Preloader/>
  }

  return (
    <div> Main Content
      <div>
        <img src={props.profile.photos.large} className={classes.ava}/> 
        <span className={classes.fullName}>{props.profile.fullName}</span> <br/> <br/> 
        <span>About me: <br/> 
                        {props.profile.aboutMe}</span> <br/> 
                        <br/> 
        <span>Searching for a job: {props.checked ? <button onClick={() => props.cancelActionCreator()}><FindJob src={cancel}/></button> : 
        <button onClick={() => props.checkedActionCreator()}><FindJob src={check}/></button>}</span> <br/> <br/>

        <span>Contacts: <br/> 
                        {props.profile.contacts.facebook}<br/>
                        {props.profile.contacts.vk}<br/>
                        {props.profile.contacts.twitter}<br/>
                        {props.profile.contacts.instagram}<br/>
                        {props.profile.contacts.github}</span>
      </div>
    </div>
  );
}
export default ProfileInfo;