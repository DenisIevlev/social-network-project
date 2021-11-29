import {addPostCreator} from '../../../redux/profileReducer';
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
        addPostCreator: (newPostText) => dispatch(addPostCreator(newPostText))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;