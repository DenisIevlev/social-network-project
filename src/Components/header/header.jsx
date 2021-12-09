import {NavLink} from 'react-router-dom';
import classes from './header.module.css';
const Header = (props) => {
    return (
      <header className={classes.header}>
      <img className={classes.img} src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'></img>
      <div className={classes.loginBlock}>
        {props.isAuth ? <> {props.login} - <button onClick={props.logoutUserData}>Logout</button></> : <NavLink to={'/login'}>Login </NavLink>}
      </div>
    </header>
    );
  }
export default Header;  