import React, { Component } from 'react';
import Navbar from './navbar';

class Menu extends Component{
  render(){
    return(
      <div>
        <Navbar>
          { this.props.children }
        </Navbar>
      </div>
    )
  }
};

export default Menu;