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


// <Slide>{'6 mois plus tard : Septembre 2017'}</Slide>
// <Slide>{'Ancien post Reddit'}</Slide>
// <Slide>{'Relance EchoJS/Reddit'}</Slide>
// <Slide>{'hackerNews : show HN'}</Slide>
// <Slide>{"FLOP :'('"}</Slide>
// <Slide>{'ou pas !'}</Slide>
// <Slide>{'+180 HN => +300 stars'}</Slide>
// <Slide>
//   {'Trendings github => 4ème catégorie JS tweet blablabla'}
// </Slide>
// <Slide>{"L'évenement Poki"}</Slide>
// <Slide>{'SUCCESS'}</Slide>
// <Slide>{'THE END v4.0 ?'}</Slide>
// <Slide>{'Nouvel objectif'}</Slide>
// <Slide>{'Refacto => Guide de contribution'}</Slide>
// <Slide>{'PRs'}</Slide>
// <Slide>{'Shoutout aux contributeurs'}</Slide>
// <Slide>{'Au total 33 pr'}</Slide>
// <Slide>{'The  END v5.0 ?'}</Slide>
// <Slide>{'TO BE CONTINUED'}</Slide>
// <Slide>{'Clonclusions ?'}</Slide>
// <Slide>{'Trouver des leviers pour atteindre les trendings'}</Slide>
// <Slide>
//   {"Démo rapide et avec de l'impact pour accrocher les gens"}
// </Slide>
// <Slide>{'Persever !!! #THEEND Pousser la chance.'}</Slide>
// <Slide>
//   <h2>{"N'abandonnez pas vos idée"}</h2>
// </Slide>
// <Slide>
//   <h2>{'Après tout... Et pourquoi pas ?'}</h2>
// </Slide>
