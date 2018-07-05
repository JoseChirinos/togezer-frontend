import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterList from '../components/router-list';
import Menu from '../../common/menu/menu';

class RouterApp extends Component {
  render(){
    return(
      <Router>
        <Menu>
          <RouterList/>
        </Menu>
      </Router>
    )
  }
}
export default RouterApp;