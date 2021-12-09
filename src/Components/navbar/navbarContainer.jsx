import React from 'react';
import Navbar from './navbar';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';

class NavbarContainer extends React.Component {
  render() {
    return (
      <Navbar {...this.props} friendsList={this.props.friendsList} ></Navbar>
    )
  }
}

let mapStateToProps = (state) => ({
  friendsList: state.sidebar.friendsList
})


export default compose(connect(mapStateToProps, {}),  
withRouter)(NavbarContainer);
