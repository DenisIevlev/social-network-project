import React from 'react';
import classes from './user.module.css';
import userPhoto from '../../assets/img/user.png';
import * as axios from 'axios';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsersActionCreator(response.data.items);
      this.props.setTotalUsersCountActionCreator(response.data.totalCount);
    })
  }

  onPageChanged = (page) => {
   this.props.setCurrentPageActionCreator(page);
   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsersActionCreator(response.data.items);
    })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) / 300;
    
    let pages = [];

    for(let i = 1; i <= pagesCount; i++){
      pages.push(i);
    }
    return (
      <div>
        <div>
        {pages.map(page => {
           return <span className={this.props.currentPage === page && classes.selectedPage}
           onClick={() => {this.onPageChanged(page)}}>{page}</span>
        })}
        </div>
        {
          this.props.users.map(user => <div key={user.id}>
            <span>
              <div><img className={classes.photoURL} src={user.photos.small != null ? user.photos.small : userPhoto} /></div>
              <div>
                {user.followed ? <button onClick={() => this.props.unfollowActionCreator(user.id)}>Unfollow</button>
                  : <button onClick={() => this.props.followActionCreator(user.id)}>Follow</button>}

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