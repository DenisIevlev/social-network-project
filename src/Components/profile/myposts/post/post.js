import React from 'react';
import Ava from '../../../ava/ava';
import classes from './post.module.css';
const Post = (props) => {
  return( 
          <div className={classes.item}>
            <Ava/>
            {props.message}<br/>
            <span>like: {props.count}</span> 
          </div>
  );
}
export default Post;