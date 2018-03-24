import React, { Component } from 'react'
import classnames from 'classnames'
import Reveal from 'reveal.js'
import Rythm from 'rythm.js'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/blood.css'
import logo from './rythmjs.png'
import Slide from './Slide'
import Intro from './Intro'
import How from './How'
import Success from './Success'
import FirstPromo from './FirstPromo'
import SecondPromo from './SecondPromo'
import ThirdPromo from './ThirdPromo'
import NewVibes from './NewVibes'
import Conclusion from './Conclusion'

const rythm = new Rythm()
rythm.plugMicrophone()
rythm.start()
rythm.addRythm('speaker', 'jump', 0, 50, {
  min: -5,
  max: 5,
})
rythm.addRythm('base-bar', {
  dance:(elem, value) => {
    elem.style.height = `${(value * 100).toFixed(0)}%`
  },
  reset:() => {
  }
}, 150, 40)
rythm.addRythm('percentage', {
  dance:(elem, value) => {
    elem.textContent = (value * 100).toFixed(0)
  },
  reset:() => {

  }
}, 150, 40)

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
    // console.log('coucou', event)
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
            <Slide>
              <h2>Et pourquoi pas...</h2>
              <img src={logo} />
            </Slide>
            <Intro />
            <How />
            <FirstPromo />
            <SecondPromo />
            <ThirdPromo />
            <NewVibes />
            <Conclusion />
          </div>
        </div>
        <div
          className={classnames('speaker', {
            center: this.state.center,
          })}
        >
          <div className="rythm-medium" />
        </div>
        <Success />
      </React.Fragment>
    )
  }
}

export default App
