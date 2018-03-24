import React, { Component } from 'react'
import Slide from '../Slide'
import echojs from './echojs.png'
import jsk from './jsk.jpg'
import drama from './drama.jpg'
import hn from './hn.jpg'
import poki from './poki.png'
import reddit from './reddit.png'
import Stepper from '../Stepper'
import { SuccessService } from '../Success'

const ThirdPromo = () => {
  return (
    <Slide>
      <Slide>
        <div>6 mois plus tard</div>
        <h2>Septembre 2017</h2>
      </Slide>
      <Slide>
        <img style={{ backgroundColor: 'white', borderRadius: 20 }} alt='' src={reddit} />
      </Slide>
      <Slide>
        <img style={{width: 200, margin: 20, borderRadius: 20}} alt='' src={echojs} />
        <img style={{width: 450, margin: 20, backgroundColor: 'white', borderRadius: 20}} alt='' src={reddit} />
      </Slide>
      <Slide>
        <img style={{borderRadius: 20}} alt='' src={hn} />
      </Slide>
      <Slide>
        <img alt='' src={drama} />
      </Slide>
      <Slide>
        <h1>Show HN</h1>
        <Stepper
          id='ThirdPromo'
          steps={[
            {
              up: () => {
                const messages = [
                  'Atteindre les 930 stars',
                  'Retweet par @FrontEndDaily',
                  'Atteindre les 1140 stars',
                  'Top trending github javascript daily',
                  'Atteindre les 1350 stars',
                ]
                messages.forEach((message, index) => {
                  setTimeout(() => SuccessService.sendSuccess(message), 300 * index)
                })
              },
            },
            {
              up: () => {
                const messages = [
                  'Atteindre les 1740 stars',
                  'Top trending github javascript weekly',
                  'Shoutout de javascript weekly',
                  'Atteindre les 1950 stars',
                  'Like de mighty Dan Abramov',
                ]
                messages.forEach((message, index) => {
                  setTimeout(() => SuccessService.sendSuccess(message), 300 * index)
                })
              },
            },
            {
              up: () => {
                const messages = [
                  'Atteindre les 2130 stars',
                  'Top trending github javascript monthly',
                  'Atteindre les 2340 stars',
                  'Shoutout de aligator.io',
                  'Atteindre les 2550 stars',
                ]
                messages.forEach((message, index) => {
                  setTimeout(() => SuccessService.sendSuccess(message), 300 * index)
                })
              },
            }
          ]}
        />
      </Slide>
      <Slide>
        <img style={{ backgroundColor: 'white', borderRadius: 20 }} alt='' src={poki} />
      </Slide>
      <Slide>
        <h1>{'THE END v4.0 ?'}</h1>
      </Slide>
    </Slide>
  )
}
export default ThirdPromo
