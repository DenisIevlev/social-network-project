import React from 'react';
import classes from './user.module.css';
import userPhoto from '../../assets/img/user.png';
import * as axios from 'axios';

class Users extends React.Component {
  constructor(props){
    super(props);
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsersActionCreator(response.data.items);
    })
    }
    render(){
    return (
      <div>
        {
        this.props.users.map(user => <div key={user.id}>
          <span>
          <div><img className={classes.photoURL} src={user.photos.small != null ? user.photos.small : userPhoto}/></div>
          <div>
            {user.followed ? <button onClick={() => this.props.unfollowActionCreator(user.id)}>Unfollow</button>
            : <button onClick={() => this.props.followActionCreator(user.id)}>Follow</button> }
          
          </div>
          </span>
          <span>
            <span>
             <div>{user.name}</div>
             <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.city"}</div>
              <div>{"user.location.country"}</div>
            </span>
          </span>
        </div>)
        }
      </div>
    );
  }
}
export default Users;  