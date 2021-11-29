import React from 'react';
import classes from '../dialogs.module.css';
import {Field} from 'redux-form';

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.sendMessage}>
      <div> <Field component="textarea" name="newMessageText" placeholder="Enter your message"/></div>
       <div><button >Send message</button></div>
      </form>
  )
}

export default AddMessageForm;