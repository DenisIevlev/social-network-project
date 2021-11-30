import React from 'react';
import classes from '../dialogs.module.css';
import {Field} from 'redux-form';
import {required, maxLengthCreator, minLengthCreator} from '../../../utilities/validators/validators';
import {Textarea} from '../../common/FormControls/FormControls';

const maxLength60 = maxLengthCreator(60);
const minLength3 = minLengthCreator(3);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.sendMessage}>
      <div> <Field component={Textarea} name="newMessageText" placeholder="Enter your message" validate={[required, maxLength60, minLength3]}/></div>
       <div><button >Send message</button></div>
      </form>
  )
}

export default AddMessageForm;