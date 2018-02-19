import React, { Fragment } from 'react'
import Slide from '../Slide'
import ux from './ux.jpg'
import trololo from './trololo.jpg'
import material from './material.jpg'
import geo from './geo.jpg'
import welcome from './welcome.gif'
import construction from './construction.png'
const Intro = () => {
  return (
    <Slide>
      <Slide>
        <h2>Benjamin Plouzennec</h2>
        <div class="row">
          <img src={trololo} />
          <ul class="center-x center-y" style={{ marginLeft: 100 }}>
            <li>Twitter - @OkazariBzh</li>
            <li>Github - okazari</li>
          </ul>
        </div>
      </Slide>
      <Slide>
        <img src={ux} />
      </Slide>
      <Slide>
        <img src={material} />
      </Slide>
      <Slide>
        <img src={geo} />
      </Slide>
      <Slide>
        <img src={welcome} />
      </Slide>
      <Slide>
        <img src={construction} />
      </Slide>
      <Slide>
        <marquee><h2>{'<marquee>'}</h2></marquee>
      </Slide>
      <Slide>
        <blink><h2>{'<blink> #dead'}</h2></blink>
      </Slide>
    </Slide>
  )
}

export default Intro
