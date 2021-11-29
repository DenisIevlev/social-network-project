import React from 'react';
import Post from './post/post';
import AddPostForm from './addPostForm/addPostForm';
import classes from './myPosts.module.css';
import {reduxForm} from 'redux-form';



const MyPosts = (props) => {
  let postElements = props.posts.map(element => {
    return <Post id={element.id} message={element.message} count={element.likesCount} />
  })
  
  let addPostMessage = (values) => {
    props.addPostCreator(values.newPostText);
  }

  return (
    <div>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addPostMessage}/>
      {postElements}
    </div>
  );
}

const AddPostFormRedux = reduxForm({
  form: 'newPostText'
})(AddPostForm)

export default MyPosts;
