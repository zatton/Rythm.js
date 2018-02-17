import React, { Component } from 'react'
import classnames from 'classnames'
import Reveal from 'reveal.js'
import Rythm from 'rythm.js'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/blood.css'
import logo from './rythmjs.png'
import Slide from './Slide'

const rythm = new Rythm()
rythm.plugMicrophone()
rythm.start()
rythm.addRythm('speaker', 'jump', 0, 50, {
  min: -5,
  max: 5,
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: false,
    }
  }

  componentDidMount() {
    Reveal.initialize()
    Reveal.addEventListener('slidechanged', event => {
      this.onSlideChange(event)
    })
  }

  onSlideChange(event) {
    console.log('coucou', event)
  }

  slideInSpeaker = () => {
    this.setState({
      center: true,
    })
  }

  slideOutSpeaker = () => {
    this.setState({
      center: false,
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="reveal">
          <div className="slides">
            <Slide state="slide1" onReveal={this.slideOutSpeaker}>
              <h2>Et pourquoi pas...</h2>
              <img src={logo} />
            </Slide>
            <Slide>
              <Slide state="vs1" onReveal={this.slideInSpeaker} />
              <Slide state="slide2" onReveal={this.slideOutSpeaker}>
                Vertical Slide 2
              </Slide>
            </Slide>
          </div>
        </div>
        <div
          className={classnames('speaker', {
            center: this.state.center,
          })}
        >
          <div className="rythm-medium" />
        </div>
      </React.Fragment>
    )
  }
}

export default App
