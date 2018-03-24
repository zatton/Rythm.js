import React, { Component } from 'react'
import Slide from '../Slide'
import Stepper from '../Stepper'
import { SuccessService } from '../Success'
import refactor from './refactor.jpg'
import tbc from './tbc.jpg'
import contrib from './contrib.png'

const NewVibes = () => {
  return (
    <Slide>
      <Slide>
        <h4>
          Nouvel objectif
        </h4>
        <h2 className="fragment">
          Pull requests
        </h2>
      </Slide>
      <Slide>
        <img alt="" src={refactor}/>
      </Slide>
      <Slide>
        <img alt="" src={contrib}/>
      </Slide>
      <Slide>
        <h1>33 pr</h1>
      </Slide>
      <Slide>
        <h1>
          The  END v5.0 ?
        </h1>
      </Slide>
      <Slide>
        <img alt="" src={tbc}/>
      </Slide>
    </Slide>
  )
}


export default NewVibes
