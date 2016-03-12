function Rythm(){

  var that = this;

  that._audioCtx = new AudioContext();
  that._analyser = that._audioCtx.createAnalyser();
  that._gain = that._audioCtx.createGain();
  that._source;
  that._audio;
  that._hzHistory = [];
  that._analyser.fftSize = 64;
  that.pulseRatio = 0.75;
  that.buffer = 100;
  
  that.setMusic = function setMusic(audioSource){
    that._audio = audioSource;
    that._source = that._audioCtx.createMediaElementSource(that._audio);
    that._source.connect(that._gain);
    that._gain.connect(that._analyser);
    that._analyser.connect(that._audioCtx.destination);
  }

  that.setGain = function setGain(value){
    that._gain.gain.value = value;
  }

  that.start = function start(){
    that._hzHistory = []
    that._frequences = new Uint8Array(that._analyser.frequencyBinCount);
    that._audio.play();
    renderRythm();
  }

  function renderRythm() {
    that._analyser.getByteFrequencyData(that._frequences);
    for(var i=0; i<that._frequences.length; i++){
      if(!that._hzHistory[i]){
        that._hzHistory[i] = [];
      }
      if(that._hzHistory[i].length > that.buffer){
        that._hzHistory[i].shift();
      }
      that._hzHistory[i].push(that._frequences[i]);
      var value = that._frequences[i];
    }
    pulse("bass", getRatio(2));
    pulse("medium", getRatio(6));
    pulse("hight", getRatio(9));
    requestAnimationFrame(renderRythm);
  }

  function getRatio(index){
    var min = 255;
    var max = 0;
    for(var i = 0; i < that._hzHistory[index].length; i++){
      if(that._hzHistory[index][i] < min){
        min = that._hzHistory[index][i];
      }
      if(that._hzHistory[index][i] > max){
        max = that._hzHistory[index][i];
      }
    }
    var scale = max - min;
    var actualValue = that._frequences[index] -min;
    var percentage = (actualValue/scale);
    return 1+(that.pulseRatio * percentage);
  }

  function pulse(name, value){
    var element = document.getElementById(name);
    element.style="transform:scale("+value+")";
  }

}


window.onload = function(){

  var rythm = new Rythm();
  var audio = document.getElementById('audio');
  rythm.setMusic(audio);
  rythm.setGain(0.4);
  rythm.start();

}
