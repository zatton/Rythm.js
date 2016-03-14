Rythm.js
========

A javascript library that makes your page dancing.

Actually in developpement

Getting started
===============

Install with npm (Soon)

```
npm install rythm.js
```

Import rythm in to your page

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

Create a Rythm object and give it the audio element then use the start function
```javascript
var rythm = new Rythm();
var audio = document.getElementById('audio');
rythm.setMusic(audio);
rythm.start();
```

Documentation
=============

IN PROGESS

```javascript
var rythm = new Rythm();

//Default 1
rythm.startingScale = value;

//Default 100
rythm.maxValueHistory = value;

//Default 0.75
rythm.pulseRatio = value;

//Set the music the page will dance to.
rythm.setMusic(audioElement);

//Adjust the gain of the music.
rythm.setGain(value);

//Let's dance
rythm.start();

//Stop the party
rythm.stop();
```

Features
========

TODO

Contribute
==========

TODO
