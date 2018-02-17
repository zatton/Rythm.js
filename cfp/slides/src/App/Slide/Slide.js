import React, { Component } from 'react'
import Reveal from 'reveal.js'

class Slide extends Component {
  componentDidMount() {
    const { onReveal, state } = this.props
    if (state) {
      Reveal.addEventListener(state, event => {
        onReveal(event)
      })
    }
  }

  render() {
    const { children, state } = this.props
    return <section data-state={state}>{children}</section>
  }
}

export default Slide
