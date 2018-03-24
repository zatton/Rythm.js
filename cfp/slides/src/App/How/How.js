import React from 'react'
import Slide from '../Slide'
import bored from './bored.jpg'
import bar from './bar.jpg'
import wave from './wave.jpg'
import webaudio from './webaudio-js.png'
import evil from './evil.gif'
import Base from './Base'
import bars from './bars.png'
import cimb from './cimb.jpg'
import fun from './fun.gif'

const Intro = () => {
  return (
    <Slide>
      <Slide>
        <h3>12 mars 2016</h3>
        <div className="fragment">
          <img alt="" src={bored} style={{ maxHeight: 400 }}  />
          <h3>Intercontrat</h3>
        </div>
      </Slide>
      <Slide>
        <h3> Web audio API </h3>
        <img alt="" src={webaudio} style={{borderRadius: 20}} />
      </Slide>
      <Slide>
        <img alt="" className="fragment" src={bar} style={{ maxHeight: 200 }} />
        <img
          alt=""
          className="fragment"
          src={wave}
          style={{ maxHeight: 200 }}
        />
      </Slide>
      <Slide>
        <h3>Et pourquoi pas...</h3>
        <img
          alt=""
          className="fragment"
          src={evil}
          style={{ maxHeight: 200 }}
        />
      </Slide>
      <Base />
      <Slide>
        <h4>Comment déterminer les bornes ?</h4>
      </Slide>
      <Slide>
        <img alt="" src={bars} />
        <span className="fragment">
          <div
            style={{
              height: 0,
              position: 'relative',
              top: -428,
              left: -121,
              fontSize: 30,
            }}
          >
            Max
          </div>
          <div
            style={{
              height: 0,
              position: 'relative',
              top: -243,
              left: -172,
              fontSize: 30,
            }}
          >
            Min
          </div>
        </span>
      </Slide>
      <Slide>
        <h4>{`Comment être représentatif d'un instrument ?`}</h4>
      </Slide>
      <Slide>
        <img alt="" src={cimb} />
      </Slide>
      <Slide>
        <h2 className="rythm-bass">Bass</h2>
        <h2 className="rythm-medium">Medium</h2>
        <h2 className="rythm-high">High</h2>
      </Slide>
      <Slide>
        <img alt="" src={fun} />
      </Slide>
      <Slide>
        <h1>170 lignes</h1>
      </Slide>
      <Slide>
        <ul>
          <li className="fragment">Github-page de démo</li>
          <li className="fragment">Doc complète</li>
          <li className="fragment">Badges</li>
        </ul>
      </Slide>
      <Slide>
        <h1>THE END ?</h1>
      </Slide>
    </Slide>
  )
}

export default Intro
