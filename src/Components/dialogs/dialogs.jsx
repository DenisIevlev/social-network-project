import React from 'react';
import classes from './dialogs.module.css';
import DialogsItem from './dialogsItem/dialogsItem';
import Message from './message/message';
import {reduxForm} from 'redux-form';
import AddMessageForm from './addMessageForm/addMessageForm';

const Dialogs = (props) => {

  let state = props.messagesPage;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  }

  let dialogsElements = state.dialogsData.map(element => {
    return <DialogsItem id={element.id} name={element.name} />
  });

  let messagesElements = state.messagesData.map(element => {
    return <Message id={element.id} message={element.message} />
  });

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  );
}

const AddMessageFormRedux = reduxForm({
  form: 'messageAddForm'
})(AddMessageForm);

export default Dialogs;
