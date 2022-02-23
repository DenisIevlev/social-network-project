import profilePicture from '../../../../assets/img/user.png';
import classes from './post.module.css';
const Post = ({profile, message, count}) => {
  return( 
          <div className={classes.item}>
            <img src={profilePicture} className={classes.profilePicture} />
            {message}<br/>
            <span>like: {count}</span> 
          </div>
  );
}
export default Post;