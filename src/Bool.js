import React, {Component} from 'react'

class Bool extends React.Component{
  constructor(){
    super()
    this.state={
      isLoggedIn: false
    }
  }
  render(){
    let display
    if(this.state.isLoggedIn === true){
      display = "in"
    }
    else {
      display = "out"
    }
  return(
    <div>
        <h1>You are conrently logged {display}</h1>
    </div>
  )
}
}
export default Bool
