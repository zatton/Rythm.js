import React, { Fragment } from 'react'
import Slide from '../Slide'
import bored from './bored.jpg'
import webaudio from './webaudio-js.png'

//   <Slide>{'Intercontrat 12 mars 2016'}</Slide>
//   <Slide>{'Musicien web audio api => Puissance over 9000'}</Slide>
//   <Slide>{'Analyse de fréquence FFT'}</Slide>
//   <Slide>{'Kezako FFT ?'}</Slide>
//   <Slide>{'Demo analyse FFT * 2 inline'}</Slide>
//   <Slide>
//     {'Et pourquoi pas... détecter et pulser les éléments'}
//   </Slide>
//
//   <Slide>{'Utiliser la puissance des fréquences pour pulser'}</Slide>
//   <Slide>{'utiliser des seuils => Pourcentage'}</Slide>
//   <Slide>{'Pas viable, puissance variable dans les chansons'}</Slide>
//   <Slide>
//     {'Garder en tampon un nb de valeur pour déterminer les seuils'}
//   </Slide>
//   <Slide>
//     {"Mieux ! mais un son n'est rarement qu'une seule fréquence"}
//   </Slide>
//   <Slide>{'Même principe mais avec des somes de fréquences'}</Slide>
//   <Slide>{'0, 10 = bass 150, 50 = medium etc..'}</Slide>
//   <Slide>{'Démo'}</Slide>
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
    </Slide>
  )
}

export default Intro
