import React, {Component} from 'react'

class Change extends React.Component{
  constructor(){
    super()
    this.state={
      count: 0
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
      this.setState((kay)=>{
        return{
          count: kay.count + 55
        }
      })
    }
  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}><h3>change</h3></button>
      </div>
  )
}
}

export default Change
