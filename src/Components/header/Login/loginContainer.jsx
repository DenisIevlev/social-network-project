import React from 'react';
import Login from './login';
import {loginUserData, logoutUserData} from '../../../redux/authReducer';
import { connect } from 'react-redux';

class LoginContainer extends React.Component {
  componentDidMount() {
       this.props.loginUserData();
  }
  render() {
    return <Login {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  rememberMe: state.auth.rememberMe,
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { loginUserData, logoutUserData })(LoginContainer);