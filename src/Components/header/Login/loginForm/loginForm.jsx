import React from 'react';
import {required, maxLengthCreator, minLengthCreator} from '../../../../utilities/validators/validators';
import {Input} from '../../../common/FormControls/FormControls';
import {createField} from '../../../common/FormControls/FormControls';
import classes from '../../../common/FormControls/FormsControls.module.css';

const minLength3 = minLengthCreator(8);
const maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error}) => {
    return (
     <form onSubmit={handleSubmit}>
       <div>{createField('Login', 'email', Input, [required, maxLength30, minLength3], {type: 'email'})}</div>
       <div>{createField('Password', 'password', Input, [required, maxLength30, minLength3], {type: 'password'})}</div>
       <div>{createField(null, 'rememberMe', 'input', null, {type: 'checkbox'}, 'remember Me')}</div>
       { error && <div className={classes.formSummaryError}>
         {error} </div> }
       <div><button>Login</button></div>
      </form>
    );
  }
export default LoginForm;  