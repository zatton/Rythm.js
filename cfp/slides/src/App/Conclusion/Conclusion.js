import React, { Component } from 'react'
import Slide from '../Slide'
import Stepper from '../Stepper'
import { SuccessService } from '../Success'
import lessons from './lessons.jpg'
import gh from './github.png'
import reddit from './reddit.png'
import hn from './hn.jpg'
import perserverance from './Perseverance.jpg'
import trust from './trust.jpg'
import trololo from './trololo.jpg'

const Conclusion = () => {
  return (
    <Slide>
      <Slide>
        <h2>Conclusion</h2>
        <img style={{maxHeight: '50vh'}} alt="" src={lessons} />
      </Slide>
      <Slide>
        <img alt="" src={gh} style={{maxWidth: 300, margin: 20, borderRadius: 20}} />
        <img alt="" src={reddit} style={{width: 400, margin: 20, backgroundColor: 'white', borderRadius: 20}} />
        <img alt="" src={hn} style={{ margin: 20, borderRadius: 20}} />
      </Slide>
      <Slide>
        <iframe src="https://okazari.github.io/Rythm.js/" width="800" height="500" />
      </Slide>
      <Slide>
        <img alt="" src={perserverance} />
      </Slide>
      <Slide>
        <img alt="" src={trust} />
      </Slide>
      <Slide>
        <h2>
          Et pourquoi pas ?
        </h2>
      </Slide>
      <Slide>
        <h2>
          Merci
        </h2>
        <div className="row">
          <img alt="" src={trololo} style={{borderRadius: 20}}/>
          <ul className="center-x center-y" style={{ marginLeft: 100 }}>
            <li>Twitter - @OkazariBzh</li>
            <li>Github - okazari</li>
          </ul>
        </div>
      </Slide>
    </Slide>
  )
}

export default Conclusion
