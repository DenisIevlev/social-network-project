import React, {useEffect, useState} from 'react';

const ProfileStatus = ({status, updateStatus}) =>  {

let [editMode, setEditMode] = useState(false); 
let [profileStatus, setStatus] = useState(status);

useEffect(() => {
  setStatus(status);
}, [status]); 

 const activateEditStatus = () => {
    setEditMode(true);
  }
  const deactivateEditMod = () => {
    setEditMode(false);
    updateStatus(profileStatus);
  }

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  }
    return (
      <>
        {!editMode ?
          <div>
            <span onDoubleClick={activateEditStatus}> <b>Status:</b> {status}</span>
          </div> : <div>
            <input onChange={onStatusChange} onBlur={deactivateEditMod}  autoFocus={true} value={profileStatus}></input>
          </div>
        }
      </>
    );
  }
export default ProfileStatus;