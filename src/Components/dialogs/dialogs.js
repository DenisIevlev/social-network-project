import React from 'react';
import classes from './dialogs.module.css';
import DialogsItem from './dialogsItem/dialogsItem';
import Message from './message/message';

const Dialogs = (props) => {

  let state = props.messagesPage;

  let newElementMessage = React.createRef();

  let addMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = (event) => {
    let value = event.target.value;
    props.updateNewMessage(value);
  }
  let dialogsElements = state.dialogsData.map(element => {
    return <DialogsItem id={element.id} name={element.name} />
  });

  let messagesElements = state.messagesData.map(element => {
    return <Message id={element.id} message={element.message} />
  });

  let newMessageText = state.newMessageText;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
        <div className={classes.sendMessage}>
        <textarea onChange={onMessageChange} ref={newElementMessage} value={newMessageText}></textarea>
        <button onClick={addMessage}>Send message</button>
      </div>
      </div>
    </div>
  );
}
export default Dialogs;