import classes from '../dialogs.module.css';

const Message = ({message}) => {
  return (
    <div className={classes.message}>{message}</div>
  )
}
export default Message;