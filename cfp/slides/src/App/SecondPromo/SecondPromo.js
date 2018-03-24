import React, { Component } from 'react'
import Slide from '../Slide'
import Stepper from '../Stepper'
import echojs from './echojs.png'
import jsk from './jsk.jpg'
import github from './github.png'
import { SuccessService } from '../Success'
import rennesjs from './rennesjs.png'
import demo from './demo.png'

const SecondPromo = () => {
  return (
    <Slide>
      <Slide>
        <img alt="" src={rennesjs} />
      </Slide>
      <Slide>
        <img style={{width: 200, margin: 20, borderRadius: 20}} alt='' src={echojs} />
        <img style={{width: 200, margin: 20, borderRadius: 20}} alt='' src={jsk} />
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
        <h3>{'1 Idée'}</h3>
        <h3>=</h3>
        <h3>{'1 issue'}</h3>
        <Stepper
          id='SecondPromo3'
          steps={[{
            up: () => SuccessService.sendSuccess('PR de Egoist'),
          },{
            up: () => SuccessService.sendSuccess('Atteindre les 550 stars'),
          }]}
        />
      </Slide>
      <Slide>
        <div>
          <img alt="" src={demo} />
        </div>
      </Slide>
      <Slide>
        <img style={{width: 200, margin: 20, borderRadius: 20}} alt='' src={echojs} />
        <img style={{width: 200, margin: 20, borderRadius: 20}} alt='' src={jsk} />
      </Slide>
      <Slide>
        <h1>😢</h1>
      </Slide>
      <Slide>
        <h1>{'THE END v3.0 ?'}</h1>
      </Slide>
    </Slide>
  )
}

export default SecondPromo
