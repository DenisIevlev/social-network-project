import Dialogs from './dialogs';
import { addMessageCreator, updateNewMessage } from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => {
      return {
          messagesPage: state.messagesPage,
      }
}

const mapDispatchToProps = (dispatch) => {
      return {
          updateNewMessage: (value) => dispatch(updateNewMessage(value)),
          sendMessage: () => dispatch(addMessageCreator())
      }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),  
withAuthRedirect)(Dialogs);
