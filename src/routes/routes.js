import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterList from './components/router-list';
import Menu from '../menu/menu';
import Login from '../login/login';

class RouterApp extends Component {
  state = {
    auth: true
  }
  render(){
    return(
      <Router>
        {
          this.state.auth ?
          <Menu>
            <RouterList/>
          </Menu>
          : <Login/>
        }
      </Router>
    )
  }
}
export default RouterApp;