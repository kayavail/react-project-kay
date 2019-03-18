import React, {Component} from 'react'
// import {Route, NavLink, Switch} from 'react-router-dom';
import bg from './Images/bg.jpg'


class Header extends Component{
  render(){
    return(
      <div>
          <div className="main">
            <a href="index.html">Home</a>
            <a href="index.html">About</a>
            <a href="index.html">Experience</a>
            <a href="index.html">Download</a>
            <a href="index.html">Contact</a>
          </div>
          <div className="topbg">
            <img src={bg} width="100%" height="400"/>
          </div>
      </div>
    )
  }
}

export default Header
