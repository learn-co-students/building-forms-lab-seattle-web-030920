// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnSubmit = event => {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange}>
          Name: </input>
          <submit></submit>
        </form>
      </div>
    )
  }
}

export default BandInput
