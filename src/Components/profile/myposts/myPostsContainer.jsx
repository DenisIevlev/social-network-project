import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from './myPosts';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostTextCreator, 
    addPostCreator
})(MyPosts);
export default MyPostsContainer;