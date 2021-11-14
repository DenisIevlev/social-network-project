import classes from '../dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}


export default DialogsItem;