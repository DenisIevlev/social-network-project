import React from 'react';
import classes from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsList from './friendsList/friendsList';
const Navbar = (props) => {
  let friendsList = props.state.friendsList.map(element => {
    return <FriendsList id={element.id} name={element.name} src={element.href} />
  })
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
      </div>
      <div>
      <h5 className={classes.heading}>Friends</h5>
      {friendsList}
      </div>
    </nav>
  );
}
export default Navbar;