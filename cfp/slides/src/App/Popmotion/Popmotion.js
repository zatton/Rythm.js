import React, { Component } from 'react'
import Stepper from '../Stepper'

class Popmotion extends Component {

  constructor(props) {
    super(props)
    const { tweens = [] } = props
    this.state = {
      steps: tweens.map(tween => {
        const t = tween()
        t.stop()
        let played = false
        return {
          up: () => {
            if(played) {
              t.reverse()
            } else {
              played = true
            }
            t.resume()
          },
          down: () => {
            t.reverse()
            t.resume()
          },
        }
      })
    }
  }

  render() {
    const { steps } = this.state
    return <Stepper id="popmotion" steps={steps} />
  }
}

export default Popmotion
