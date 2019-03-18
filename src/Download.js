import React, {Component} from 'react'
// import {Route, NavLink, Switch} from 'react-router-dom';



class Download extends Component{
  constructor(){
    super()
    this.state={
      download: ""
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
      this.setState((kay)=>{
        return{
          download: "Your download has started..."
        }
      })
    }

    handleClick(){
      let durat= true;
      if(durat === true){
      setTimeout((kayo)=>{
        this.setState(
          {download: "Your download has started..."}
        )}, 1000)
      }
        else {
          setTimeout((kayo)=>{
            this.setState(
              {download: "Your download has failed..."}
            )}, 3000)
        }
      }


  render(){
    return(
      <div>
          <div className="downloadbg">
          <div className="download">
          <h2>Download</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h3 style={{color:"red"}}>{this.state.download}</h3>
          <button onClick={this.handleClick}>Download</button>
          </div>

          </div>
      </div>
    )
  }
}

export default Download
