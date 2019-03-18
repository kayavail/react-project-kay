import React, {Component} from 'react'
// import {Route, NavLink, Switch} from 'react-router-dom';
import profile from './Images/profile.jpg'
import fb from './Images/fb.png'
import tw from './Images/tw.png'
import instagram from './Images/instagram.jpg'


class Profile extends Component{
  render(){
    return(
      <div>
          <div className="profile">
            <img src={profile} width="300" height="300"/>
            <h2>JOHN DOE</h2>
            <p>Project Manager at Alabian Solutions Limited</p>
            <p><strong>Email</strong>: info@alabiansoluton.com, <strong>Phone</strong>: 073030030300</p>
            </div>
            <div className="profilesoc">
            <a href=""><img src={fb} width="" height=""/></a>
            <a href=""><img src={tw} width="" height=""/></a>
            <a href=""><img src={instagram} width="" height=""/></a>
          </div>
          </div>

    )
  }
}

export default Profile
