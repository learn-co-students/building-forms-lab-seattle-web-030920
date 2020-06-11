import React, { Component } from 'react'

export class Bands extends Component {
    render() {
        return (
            <div>
                {this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
            </div>
        )
    }
}

export default Bands
