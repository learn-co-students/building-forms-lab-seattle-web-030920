import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand:
      (name) => dispatch({type: "ADD_BAND", name: name})
  }
}

export default connect()(BandsContainer)
