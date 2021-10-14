import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 3 },
        { id: 2, message: 'It\'s my first post', likesCount: 7 }
      ],
      newPostText: 'Hi, please enter me',
    },
    messagesPage: {
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
    },
    sidebar: {
      friendsList: [
        { id: 1, name: 'Victor', href: 'http://cdn.onlinewebfonts.com/svg/img_258083.png' },
        { id: 2, name: 'Danya', href: 'http://cdn.onlinewebfonts.com/svg/img_258083.png' },
        { id: 3, name: 'Sarah', href: 'http://cdn.onlinewebfonts.com/svg/img_258083.png' }
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {

  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newLetter = {
      id: 4,
      message: this._state.messagesPage.newMessageText
    };
    this._state.messagesPage.messagesData.push(newLetter);
    this._state.messagesPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessage(newLetter) {
    this._state.messagesPage.newMessageText = newLetter;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
     profileReducer(this._state.profilePage, action);
     dialogsReducer(this._state.messagesPage, action);
     sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;