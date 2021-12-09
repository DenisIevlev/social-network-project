import React from 'react';
import {Field} from 'redux-form';
import {required, maxLengthCreator, minLengthCreator} from '../../../../utilities/validators/validators';
import {Input} from '../../../common/FormControls/FormControls';
import classes from '../../../common/FormControls/FormsControls.module.css';

const minLength3 = minLengthCreator(8);
const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
     <form onSubmit={props.handleSubmit}>
       <div><Field placeholder={"Login"} name={"email"} component={Input} validate={[required, maxLength30, minLength3]}/></div>
       <div><Field type={"Password"} placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength30, minLength3]}/></div>
       <div><Field type={"Checkbox"} name={"rememberMe"} component={"input"}/>remember me</div>
       { props.error && <div className={classes.formSummaryError}>
         {props.error} </div> }
       <div><button>Login</button></div>
      </form>
    );
  }
export default LoginForm;  