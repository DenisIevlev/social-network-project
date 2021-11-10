import React from 'react';
import {checkedActionCreator, cancelActionCreator} from '../../redux/profileReducer';
import ProfileInfo from './profileInfo';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
    profile: state.profilePage.profile,
    checked: state.profilePage.checked,
    }
}

const profileInfoContainer = connect(mapStateToProps, {
    checkedActionCreator,
    cancelActionCreator
})(ProfileInfo);
export default profileInfoContainer;