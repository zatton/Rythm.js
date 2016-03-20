Rythm.js
========
[![Build Status](https://travis-ci.org/Okazari/Rythm.js.svg?branch=master)](https://travis-ci.org/Okazari/Rythm.js)
[![Code Climate](https://codeclimate.com/github/Okazari/Rythm.js/badges/gpa.svg)](https://codeclimate.com/github/Okazari/Rythm.js/code)

Demo at : http://okazari.github.io/Rythm.js/

A javascript library that makes your page dancing.

Actually in developpement

Getting started
===============

Install with npm

```
npm install rythm.js
```

Import rythm into your page

```html
<script type="text/javascript" src="../rythm.js"></script>
```

Create an audio element with your music as source

```html
<audio id="audio" src="../samples/rythmC.mp3"></audio>
```

Add one the rythm css classes to indicate which element will dance.

```html
<div class="rythm-bass"></div>
```

Create a Rythm object and give it the audio element then use the start function.
```javascript
var rythm = new Rythm();
var audio = document.getElementById('audio');
rythm.setMusic(audio);
rythm.start();
```

Documentation
=============

Rythm object
------------

```javascript
var rythm = new Rythm();

/* The starting scale is the minimum scale your elements will take (Scale ratio is startingScale + (pulseRatio * currentPulse));
 * Value in percentage between 0-1
 * Default 0.75
 */
rythm.startingScale = value;

/* The pulse ratio is be the maximum additionnal scale your element will take (Scale ratio is startingScale + (pulseRatio * currentPulse))
 * Value in percentage between 0-1
 * Default 0.30
 */
rythm.pulseRatio = value;

/* The max value history represent the number of passed value that will be stored to evaluate the current pulse.
 * Int value, minimum 1
 * Default 100
 */
rythm.maxValueHistory = value;

/* Set the music the page will dance to.
 * @audioElement : HTMLAudioElement
 */
rythm.setMusic(audioElement);

/* Adjust music's gain.
 * value : Number
 */
rythm.setGain(value);

/* Add your own rythm-class
 * elementClass: That you want to link your rythm to.
 * startValue: The starting frequence of your rythm.
 * nbValue: The number of frequences of your rythm.
 * 1024 Frequences, your rythm will react to the average of your selected frequences.
 * Exemples : bass 0-10 ; medium 150-40 ; high 500-100
 */

rythm.addRythm(elementClass, startValue, nbValue);

//Let's dance
rythm.start();

//Stop the party
rythm.stop();
```

Classes
-------

+ rythm-bass
+ rythm-medium
+ rythm-high

Features
========

 + You actually can add classes to make your HTML Elements pulse following the rythm of your music.

Future
------
 + Add more rythm class frequences
 + Add rythm move class (pulse, rotate etc...)

Contribute
==========

Any pull request will be apreciated. You can start coding on this project following this steps :
 + Fork the project
 + Clone your repository
 + run ```npm install```
 + run ```gulp``` in the main folder to launch a development webserver.
 + Enjoy the rythm.
