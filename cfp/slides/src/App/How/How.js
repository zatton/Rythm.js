import React, { Fragment } from 'react'
import Slide from '../Slide'
import bored from './bored.jpg'
import bar from './bar.jpg'
import wave from './wave.jpg'
import webaudio from './webaudio-js.png'
import evil from './evil.gif'

//   <Slide>{'ça marche !! 170 lignes de codes'}</Slide>
//   <Slide>{'Ajout du support du micro pour le fun'}</Slide>
//   <Slide>
//     {
//       "A titre perso, développement en mode 'bonne vieille lib' à succès"
//     }
//   </Slide>
//   <Slide>
//     <h1>{'THE END ?'}</h1>
//   </Slide>

const Intro = () => {
  return (
    <Slide>
      <Slide>
        <h3>12 mars 2016</h3>
        <div class="fragment">
          <img src={bored} style={{ maxHeight: 400 }}/>
          <h3>Intercontrat</h3>
        </div>
      </Slide>
      <Slide>
        <h3> Web audio API </h3>
        <img src={webaudio} />
      </Slide>
      <Slide>
        <img class="fragment" src={bar} style={{ maxHeight: 200}}/>
        <img class="fragment" src={wave} style={{ maxHeight: 200}}/>
      </Slide>
      <Slide>
        <h3>Et pourquoi pas...</h3>
        <img class="fragment" src={evil} style={{ maxHeight: 200}}/>
      </Slide>
      <Slide>
        <div>
          min |--------------------| max
        </div>
        <div>
          |
        </div>
        <div>
          pulseRatio
        </div>
      </Slide>
      <Slide>
        Bof
      </Slide>
      <Slide>
        historique de valeurs
      </Slide>
      <Slide>
        {"Mieux ! mais un son n'est rarement qu'une seule fréquence"}
      </Slide>
      <Slide>{'Même principe mais avec des somes de fréquences'}</Slide>
      <Slide>Demo</Slide>
    </Slide>
  )
}

export default Intro
