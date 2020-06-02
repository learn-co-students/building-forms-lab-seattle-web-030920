import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
}

const mapDispatchToProps = dispatch => {
  return { addBand: data => dispatch({
    type: "ADD_BAND",
    band: data
  })}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
