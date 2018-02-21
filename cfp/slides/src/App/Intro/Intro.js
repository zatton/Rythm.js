import React from 'react'
import Slide from '../Slide'
import ux from './ux.jpg'
import trololo from './trololo.jpg'
import material from './material.jpg'
import geo from './geo.jpg'
import welcome from './welcome.gif'
import construction from './construction.png'
import drama from './drama.jpg'

const Intro = () => {
  return (
    <Slide>
      <Slide>
        <h2>Benjamin Plouzennec</h2>
        <div className="row">
          <img alt="" src={trololo} />
          <ul className="center-x center-y" style={{ marginLeft: 100 }}>
            <li>Twitter - @OkazariBzh</li>
            <li>Github - okazari</li>
          </ul>
        </div>
      </Slide>
      <Slide>
        <img alt="" src={ux} />
      </Slide>
      <Slide>
        <img alt="" src={material} />
      </Slide>
      <Slide>
        <img alt="" src={geo} />
      </Slide>
      <Slide>
        <img alt="" src={welcome} />
      </Slide>
      <Slide>
        <img alt="" src={construction} />
      </Slide>
      <Slide>
        <marquee><h2>{'<ma  rquee>'}</h2></marquee>
      </Slide>
      <Slide>
        <blink><h2>{'<blink> #dead'}</h2></blink>
      </Slide>
      <Slide>
        <img alt="" src={drama} />
      </Slide>
    </Slide>
  )
}

export default Intro
