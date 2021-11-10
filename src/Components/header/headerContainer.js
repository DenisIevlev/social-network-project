import React from 'react';
import Header from './header';
import {setAuthUserDataActionCreator} from '../../redux/authReducer';
import {usersAPI} from '../../api/api';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
       usersAPI.authMe().then(response => {
      if (response.resultCode === 0) {
        let { id, email, login } = response.data;
        this.props.setAuthUserDataActionCreator(id, email, login);
      }
    })
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})
export default connect(mapStateToProps, { setAuthUserDataActionCreator })(HeaderContainer);