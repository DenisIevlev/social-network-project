import classes from './friendsList.module.css';
const FriendsList = (props) => {
  return(
   <div className={classes.friendsList}>
     <img className={classes.friendsAva} src={props.src}/>
     {props.name}
   </div>
  );
}
export default FriendsList;