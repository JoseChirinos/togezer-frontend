import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterList from './components/router-list';
import Main from '../main/main';
import Login from '../login/login';

class RouterApp extends Component {
  state = {
    auth: false
  }
  handleLogin = (e)=>{
    this.setState({
      auth:true
    })
  }
  render(){
    return(
      <Router>
        {
          this.state.auth ?
          <Main>
            <RouterList/>
          </Main>
          : <Login handleLogin={ this.handleLogin }/>
        }
      </Router>
    )
  }
}
export default RouterApp;