import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import Bool from './Bool'
import Change from './Change'
import Header from './Header'
import About from './About'
import Profile from './Profile'
import Contact from './Contact'
import Download from './Download'

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: "Oladele",
      age: 15
    }
  }
  render() {
    return (
    // <div>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Project by Kay
    //       </p>
    //
    //     </header>
    //   </div>
          <div>
            <div>
              <Header/>
            </div>
            <div>
              <Profile/>
            </div>
            <div>
              <About/>
            </div>
            <div>
              <Download/>
            </div>
            <div>
              <Contact/>
            </div>
              <div>
                  <h1>{this.state.name}</h1>
                  <h3>{this.state.age} years old</h3>
              </div>
          <div>
            <Todo/>
          </div>
          <div>
            <Bool/>
          </div>
          <div>
            <Change/>
          </div>
      </div>
    );
  }
}

export default App;
