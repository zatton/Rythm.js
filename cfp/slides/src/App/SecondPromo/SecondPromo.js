import React, { Component } from 'react'
import Slide from '../Slide'
import Stepper from '../Stepper'
import echojs from './echojs.png'
import jsk from './jsk.jpg'
import github from './github.png'
import { SuccessService } from '../Success'
import rennesjs from './rennesjs.png'

const SecondPromo = () => {
  return (
    <Slide>
      <Slide>
        <img alt="" src={rennesjs} />
      </Slide>
      <Slide>
        <img style={{width: 200, margin: 20}} alt='' src={echojs} />
        <img style={{width: 200, margin: 20}} alt='' src={jsk} />
        <Stepper
          id='SecondPromo'
          steps={[{
            up: () => SuccessService.sendSuccess('Atteindre les 60 stars'),
          }]}
        />
      </Slide>
      <Slide>
        <img alt="" src={github} />
        <Stepper
          id='SecondPromo2'
          steps={[{
            up: () => SuccessService.sendSuccess('Atteindre les 150 stars'),
          }]}
        />
      </Slide>
      <Slide>
        <h1>{'THE END v3.0 ?'}</h1>
      </Slide>
    </Slide>
  )
}

export default SecondPromo

// <Slide>{'Plug-in atom => RennesJS'}</Slide>
// <Slide>{'EchoJS - Javascript kicks'}</Slide>
// <Slide>{'Trending github'}</Slide>
// <Slide>{'150Stars !'}</Slide>
// <Slide>{'Idée = issue github'}</Slide>
// <Slide>{'Pr de Egoist'}</Slide>
// <Slide>{'1 mois plus tard => 550stars'}</Slide>
// <Slide>
//   {'Tentage de V2 => Nouvelle page de démo, EchoJS + JSKick'}
// </Slide>
// <Slide>
//   <h1>{'THE END v3.0 ?'}</h1>
