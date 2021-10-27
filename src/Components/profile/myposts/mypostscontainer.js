import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from './myPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
        return {
        updateNewPostTextCreator: (message) => dispatch(updateNewPostTextCreator(message)),
        addPost: () => dispatch(addPostCreator())
        }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;