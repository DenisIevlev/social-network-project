import React from 'react';
import {Field} from 'redux-form';
import {required, maxLengthCreator, minLengthCreator} from '../../../../utilities/validators/validators';
import {Input} from '../../../common/FormControls/FormControls';

const minLength3 = minLengthCreator(8);
const maxLength60 = maxLengthCreator(15);

const LoginForm = (props) => {
    return (
     <form onSubmit={props.handleSubmit}>
       <div><Field placeholder={"Login"} name={"login"} component={Input} validate={[required, maxLength60, minLength3]}/></div>
       <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength60, minLength3]}/></div>
       <div><Field type={"Checkbox"} name={"rememberMe"} component={"input"}/>remember me</div>
       <div><button>Login</button></div>
      </form>
    );
  }
export default LoginForm;  