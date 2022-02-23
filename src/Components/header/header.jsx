import {NavLink} from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import classes from './header.module.css';
const Header = ({isAuth, login, logoutUserData}) => {
    return (
      <header className={classes.header}>
      <img className={classes.img} src={logo} alt='logo'></img>
      <div className={classes.loginBlock}>
        {isAuth ? <> {login} - <button onClick={logoutUserData}>Logout</button></> : <NavLink to={'/login'}>Login </NavLink>}
      </div>
    </header>
    );
  }
export default Header;  