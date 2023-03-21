import React, { Component } from 'react'
import giphy from './giphy.gif'
export default class loading extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <img src={giphy} alt="giphy" />
        </div>
        
      </div>
    )
  }
}
