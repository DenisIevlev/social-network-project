import Dialogs from './dialogs';
import { addMessageCreator, updateNewMessage } from '../../redux/dialogsReducer';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
      return {
          messagesPage: state.messagesPage,
          isAuth: state.auth.isAuth
      }
}

const mapDispatchToProps = (dispatch) => {
      return {
          updateNewMessage: (value) => dispatch(updateNewMessage(value)),
          sendMessage: () => dispatch(addMessageCreator())
      }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;