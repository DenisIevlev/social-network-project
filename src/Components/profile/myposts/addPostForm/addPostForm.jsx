import React from 'react';
import {Field} from 'redux-form';
import classes from '../myPosts.module.css';


const addPostForm = (props) => {
  
  return (
      <div>
        <form onSubmit={props.handleSubmit}>
        <div>
          <Field component="textarea" name="newPostText" placeholder='Write your post' />
        </div>
        <div>
          <button>Add post</button>
        </div>
        </form>
      </div>
  );
}
export default addPostForm;