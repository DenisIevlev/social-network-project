import React from 'react';
import './App.css';
import ProfileContainer from './Components/profile/profileContainer';
import HeaderContainer from './Components/header/headerContainer';
import NavbarContainer from './Components/navbar/navbarContainer';
import DialogsContainer from './Components/dialogs/dialogsContainer';
import Music from './Components/music/music';
import News from './Components/news/news';
import UsersContainer from './Components/users/usersContainer';
import Settings from './Components/settings/settings';
import Footer from './Components/footer/footer';
import LoginContainer from './Components/header/Login/loginContainer';
import Preloader from './Components/common/preloader/preloader';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import classes from './Components/dialogs/dialogs.module.css';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className={classes.item}>
          <Route path="/messages" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/users" component={() => <UsersContainer />} />
          <Route path="/settings" component={() => <Settings />} />
          <Route path="/login" component={() => <LoginContainer />} />
        </div>
        <Footer />
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(connect(mapStateToProps, ({ initializeApp })), withRouter)(App);
