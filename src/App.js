import './App.css';
import Profile from './Components/profile/profile';
import Header from './Components/header/header';
import Navbar from './Components/navbar/navbar';
import DialogsContainer from './Components/dialogs/dialogscontainer';
import Music from './Components/music/music';
import News from './Components/news/news';
import UsersContainer from './Components/users/userscontainer';
import Settings from './Components/settings/settings';
import Footer from './Components/footer/footer';
import {Route} from "react-router-dom";
import classes from './Components/dialogs/dialogs.module.css';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className={classes.item}>
          <Route path="/messages" render={() => <DialogsContainer/>} />
          <Route path="/profile" render={() => <Profile/>} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/users" component={() => <UsersContainer/>}/>
          <Route path="/settings" component={() => <Settings />} />
        </div>
        <Footer />
      </div>

  );
}
export default App;
