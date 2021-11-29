import Dialogs from './dialogs';
import { addMessageCreator } from '../../redux/dialogsReducer';
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
          sendMessage: (newMessageText) => dispatch(addMessageCreator(newMessageText))
      }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),  
withAuthRedirect)(Dialogs);
