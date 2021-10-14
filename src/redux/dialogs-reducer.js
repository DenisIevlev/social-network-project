const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Victor' },
    { id: 2, name: 'Danya' },
    { id: 3, name: 'Denis' },
    { id: 4, name: 'Svetlana' },
    { id: 5, name: 'Arthur' }
  ],
  messagesData: [
    { id: 1, message: 'Hi, how are you?' },
    { id: 2, message: 'How is your health?' },
    { id: 3, message: 'What do you need?' }
  ],
  newMessageText: 'Hello, do you can speak?'
};

const dialogsReducer = (state = initialState, action) => {
  let newLetter;
  let stateCopy;
  switch (action.type) {
    case ADD_MESSAGE:
      newLetter = {
        id: 4,
        message: state.newMessageText
      };
      return stateCopy = {
        ...state,
        messagesData: [...state.messagesData, newLetter],
        newMessageText: ''
      };
    case UPDATE_NEW_MESSAGE:
      return stateCopy = {
        ...state,
        messagesData: [...state.messagesData],
        newMessageText: action.newLetter,
      };
    default:
      return state;
  }
}

export default dialogsReducer;

export const addMessageCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateNewMessage = (message) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    newLetter: message
  }
}