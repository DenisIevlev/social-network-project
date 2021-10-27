import React from "react";
import classes from './user.module.css';
import userPhoto from '../../assets/img/user.png';


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
              <div><img className={classes.photoURL} src={user.photos.small != null ? user.photos.small : userPhoto} /></div>
              <div>
                {user.followed ? <button onClick={() => props.unfollowActionCreator(user.id)}>Unfollow</button>
                  : <button onClick={() => props.followActionCreator(user.id)}>Follow</button>}

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