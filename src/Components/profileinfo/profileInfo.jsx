import React, { useState } from 'react';
import ProfileDataForm from './profileDataForm';
import Preloader from '../common/preloader/preloader';
import ProfileStatus from './ProfileStatus/profileStatus';
import profilePicture from '../../assets/img/user.png';
import classes from './profileInfo.module.css';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then( () => {
      setEditMode(false);
    })
  }

  return (
    <div>
      <div>
        <img src={profile.photos.large || profilePicture} className={classes.ava} />
        <span> {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />} </span> <br /> <br />
        <ProfileStatus status={status} updateStatus={updateStatus} />
        {editMode ? <ProfileDataForm profile={profile} onSubmit={onSubmit} initialValues={profile} /> : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}
      </div>
    </div>
  );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <span className={classes.fullName}> <b>{profile.fullName}</b></span>
    <div><b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}</div>
    {profile.lookingForAJob && <div><b>My professional skills : </b> {profile.lookingForAJobDescription}</div>}
    <div><b>About me:</b> {profile.aboutMe}</div>
    <div><b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
    })}</div>
  </div>
}

export const Contact = ({ contactTitle, contactValue }) => {
  return <div className={classes.contact}><b>{contactTitle}:</b>{contactValue}</div>
}

export default ProfileInfo;