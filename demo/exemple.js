window.onload = function(){

  var rythm = new Rythm();
  var audio = document.getElementById('audio');

  rythm.addRythm('pulse1','pulse',0,10)
  rythm.addRythm('pulse2','pulse',0,10, { min: 0.1, max: 1 })
  rythm.addRythm('pulse3','pulse',0,10, { min: 1, max: 1.75 })
  rythm.addRythm('jump1','jump',0,10)
  rythm.addRythm('jump2','jump',150, 40, { min: -20, max: 20 })
  rythm.addRythm('shake1','shake',0,10)
  rythm.addRythm('shake2','shake',0,10, { min: 0, max: 20 })
  rythm.addRythm('shake3','shake',0,10, { direction: 'left' })
  rythm.addRythm('twist1','twist',0,10)
  rythm.addRythm('twist2','twist',0,10, { min: 20, max: 180 })
  rythm.addRythm('twist3','twist',0,10, { direction: 'left' })
  rythm.addRythm('vanish1','vanish',0,10)
  rythm.addRythm('vanish2','vanish',0,10, { reverse: true })
  rythm.addRythm('color1','color',0,10)
  rythm.addRythm('color2','color',0,10, { from: [0,0,255], to:[255,0,255] })
  rythm.addRythm('color3','color',0,10, { from: [255,255,0], to:[255,0,0] })

  document.getElementById('mic').addEventListener('click', function(){
    if(rythm.stopped === false){
      rythm.stop();
    }
    rythm.plugMicrophone().then(function(){
      rythm.start();
    })
  })

  document.getElementById('start').addEventListener('click', function(){
    if(rythm.stopped === false){
      rythm.stop();
    }
    rythm.setMusic("../samples/rythmC.mp3");
    rythm.setGain(0.1)
    rythm.start();
  })

  document.getElementById('stop').addEventListener('click', function(){
    if(rythm.stopped === false){
      rythm.stop();
    }
  }) 
}

