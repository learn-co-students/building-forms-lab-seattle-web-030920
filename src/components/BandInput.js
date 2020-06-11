// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state={
    name: ""
  }

  onChange=e=>{
    this.setState({name: e.target.value})
  }

  handleSubmit=e=>{
      e.preventDefault()
      this.props.addBand(this.state)
      this.setState({name: ""})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
       <input onChange={this.onChange} type="text" name="name" value={this.state.name}/>
       </form>
      </div>
    )
  }
}

export default BandInput
