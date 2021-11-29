import React from 'react';
import LoginForm from './loginForm/loginForm';
import {reduxForm} from 'redux-form';

const Login = (props) => {

  const onSubmit = (formData) => {

  }
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