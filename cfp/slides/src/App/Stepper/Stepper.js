import React, { Component } from 'react'
import Reveal from 'reveal.js'

class Stepper extends Component {

  getStep = event => {
    const { id, steps } = this.props
    const tracking = event.fragment.getAttribute('data-fragment-id')
    if (!tracking) return false
    const [key, index] = tracking.split('_')
    if (key !== id) return false
    return steps[index]
  }

  onFragmentShown = event => {
    const { onStep = () => {} } = this.props
    const step = this.getStep(event)
    step && step.up && step.up()
    onStep(step)
  }

  onFragmentHidden = event => {
    const { onStep = () => {} } = this.props
    const step = this.getStep(event)
    step && step.down && step.down()
    onStep(step)
  }

  componentDidMount() {
    const { steps, id } = this.props
    if (steps) {
      Reveal.addEventListener('fragmentshown', this.onFragmentShown)
      Reveal.addEventListener('fragmenthidden', this.onFragmentHidden)
    }
  }

  componentWillUnmount() {
    Reveal.removeEventListener('fragmentshown', this.onFragmentShown)
    Reveal.removeEventListener('fragmenthidden', this.onFragmentHidden)
  }

  render() {
    const { steps, id } = this.props
    return steps.map((_, index) => <div className="fragment" key={`${id}_${index}`} data-fragment-id={`${id}_${index}`}></div>)
  }
}

export default Stepper
