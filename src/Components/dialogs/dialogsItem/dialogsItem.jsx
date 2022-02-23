import classes from '../dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = ({id, name}) => {
  let path = "/messages/" + id;
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink className={classes.link} to={path}>{name}</NavLink>
    </div>
  )
}


export default DialogsItem;