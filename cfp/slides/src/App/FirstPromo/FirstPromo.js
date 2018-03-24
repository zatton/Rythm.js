import React, { Component } from 'react'
import Slide from '../Slide'
import echojs from './echojs.png'
import jsk from './jsk.jpg'
import Stepper from '../Stepper'
import { SuccessService } from '../Success'

const FirstPromo = () => {
  return (
    <Slide>
      <Slide>
        <img style={{width: 200, margin: 20, borderRadius: 20}} alt='' src={echojs} />
        <img style={{width: 200, margin: 20, borderRadius: 20}} alt='' src={jsk} />
        <Stepper
          id='FirstPromo'
          steps={[{
            up: () => SuccessService.sendSuccess('Obtenir 30 stars'),
          }]}
        />
      </Slide>
      <Slide>
        <blockquote>
          How to Annoy Your Users Part 1: <br />
          Auto Playing Sound
        </blockquote>
      </Slide>
      <Slide>
        <h1>{'THE END v2.0 ?'}</h1>
      </Slide>
    </Slide>
  )
}

export default FirstPromo
