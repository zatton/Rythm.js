import React, { Component } from 'react'
import Reveal from 'reveal.js'

class Slide extends Component {

  onReveal = event => {
    const { onReveal } = this.props
    onReveal(event)
  }

  componentDidMount() {
    const { state } = this.props
    if (state) {
      Reveal.addEventListener(state, this.onReveal)
    }
  }

  componentWillUnmount() {
    const { state } = this.props
    Reveal.removeEventListener(state, this.onReveal)
  }

  render() {
    const { children, state } = this.props
    return <section data-state={state}>{children}</section>
  }
}

export default Slide
