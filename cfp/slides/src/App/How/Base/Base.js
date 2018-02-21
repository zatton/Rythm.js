import React, { Component } from 'react'
import Reveal from 'reveal.js'
import Slide from '../../Slide'
import svg from './speaker.js'
import './base.css'

class Base extends Component {
  constructor(props){
    super(props)
    const state = {
      step: 0,
    }
  }
  render() {
    return (
      <Slide>
        <div style={{ justifyContent: 'space-around', display: 'flex', alignItems: 'center'}}>
          <div className="explainer">
            max
            <div className="base-bar-container">
              <div className="base-bar">
              </div>
            </div>
            min
          </div>
          <div><span className="percentage" />%</div>
          <div className="rythm-medium" dangerouslySetInnerHTML={{ __html: svg }} />
        </div>
      </Slide>
    )
  }
}

export default Base
