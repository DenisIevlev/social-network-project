import React from 'react';
import Post from './post/post';
import classes from './myPosts.module.css';


const MyPosts = (props) => {
  let postElements = props.posts.map(element => {
    return <Post id={element.id} message={element.message} count={element.likesCount} />
  })

  let newPostElement = React.createRef();
  
  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let message = newPostElement.current.value;
    props.updateNewPostTextCreator(message);
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
}
export default MyPosts;