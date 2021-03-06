import {combineReducers, createStore, applyMiddleware} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;