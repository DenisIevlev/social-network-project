import React from 'react';
import LoginForm from './loginForm/loginForm';
import {reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom';

const Login = (props) => {

  const onSubmit = (formData) => {
     props.loginUserData(formData.email, formData.password, formData.rememberMe);
  }
    if (props.isAuth) { return <Redirect to={'/profile'}/> }
    return (
     <div> 
      <h1>Login</h1>
     <LoginReduxForm onSubmit={onSubmit}/>
     </div>
    );
  }

 const LoginReduxForm = reduxForm({
   form: 'login'
 })(LoginForm);

export default Login;  