import React, {useEffect, useState} from 'react';

const ProfileStatus = (props) =>  {

let [editMode, setEditMode] = useState(false); 
let [status, setStatus] = useState(props.status);

useEffect(() => {
  setStatus(props.status);
}, [props.status]); 

 const activateEditStatus = () => {
    setEditMode(true);
  }
  const deactivateEditMod = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  }
    return (
      <>
        {!editMode ?
          <div>
            <span onDoubleClick={activateEditStatus}> Status: {props.status}</span>
          </div> : <div>
            <input onChange={onStatusChange} onBlur={deactivateEditMod}  autoFocus={true} value={status}></input>
          </div>
        }
      </>
    );
  }
export default ProfileStatus;