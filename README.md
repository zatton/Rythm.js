Rythm.js
========

A javascript librarie that makes your page dancing.
Actually in developpement

Getting started
===============

Install with npm

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

Create a Rythm object and give it the audio element then use the start function
```javascript
var rythm = new Rythm();
var audio = document.getElementById('audio');
rythm.setMusic(audio);
rythm.start();
```

Documentation
=============

TODO

Features
========

TODO

Contribute
==========

TODO
