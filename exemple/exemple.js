window.onload = function(){

  var rythm = new Rythm();
  var audio = document.getElementById('audio');
  rythm.setMusic(audio);
  rythm.start();

}
