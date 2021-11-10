import React from "react";
import {NavLink} from 'react-router-dom';
import classes from './user.module.css';
import userPhoto from '../../assets/img/user.png';
import {usersAPI} from '../../api/api';


let UsersComponent = (props) => {
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) / 300;
    
  let pages = [];

  for(let i = 1; i <= pagesCount; i++){
    pages.push(i);
  }
    return (
      <div>
        <div>
          {pages.map(page => {
            return <span className={props.currentPage === page && classes.selectedPage}
              onClick={() => {props.onPageChanged(page) }}>{page}</span>
          })}
        </div>
        {
          props.users.map(user => <div key={user.id}>
            <span>
              <div> 
                <NavLink to={'/profile/' + user.id}>
                <img className={classes.photoURL} src={user.photos.small != null ? user.photos.small : userPhoto} />
                </NavLink></div>
              <div>
                {user.followed 
                  ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                    props.toggleIsFollowingProgress(true, user.id);
                    usersAPI.unfollow(user.id)
                    .then(response => {
                      if(response.resultCode == 1) {
                        props.unfollowActionCreator(user.id)
                      };
                      props.toggleIsFollowingProgress(false, user.id);
                    })
                  }}>Unfollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                    props.toggleIsFollowingProgress(false, user.id);
                    usersAPI.follow(user.id)
                    .then(response => {
                      if(response.resultCode == 0) {
                        props.followActionCreator(user.id)
                      };
                      props.toggleIsFollowingProgress(true, user.id);
                    })
                     }}>Follow</button>}

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

export default UsersComponent;