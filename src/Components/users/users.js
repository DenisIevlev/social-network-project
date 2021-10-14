import React from 'react';
import classes from './user.module.css';

const Users = (props) => {
    return (
      <div>
        {
        props.users.map(user => <div key={user.id}>
          <span>
          <div><img className={classes.photoURL} src={user.photoURL}/></div>
          <div>
            {user.followed ? <button onClick={() => props.unfollowActionCreator(user.id)}>Unfollow</button>
            : <button onClick={() => props.followActionCreator(user.id)}>Follow</button> }
          
          </div>
          </span>
          <span>
            <span>
             <div>{user.fullName}</div>
             <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.city}</div>
              <div>{user.location.country}</div>
            </span>
          </span>
        </div>)
        }
      </div>
    );
  }
export default Users;  