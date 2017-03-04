import player from './Player.js'
import analyser from './Analyser.js'
import dancer from './Dancer.js'

export default class Rythm {

  constructor() {
    this.player = player
    this.analyser = analyser
    this.maxValueHistory = analyser.maxValueHistory
    this.dancer = dancer
    this.rythms = []
    this.addRythm('rythm-bass','pulse',0,10)
    this.addRythm('rythm-medium','pulse',150,40)
    this.addRythm('rythm-high','pulse',400,200)
  }

  connectExternalAudioElement = (audioElement) => this.player.connectExternalAudioElement (audioelement)

  setMusic = (url) => this.player.setMusic(url)

  plugMicrophone = () => this.player.plugMicrophone()

  setGain = (value) => this.player.setGain(value)

  addRythm = (elementClass, type, startValue, nbValue, options) => {
    this.rythms.push({
      elementClass,
      type,
      startValue,
      nbValue,
      options
    })
  }

  start = () => {
    this.stopped = false
    this.player.start()
    this.analyser.reset()
    this.renderRythm()
  }

  renderRythm = () => {
    if (this.stopped) return
    this.analyser.analyse()
    this.rythms.forEach(mappingItem => {
      const { type, elementClass, nbValue, startValue, options } = mappingItem
      this.dancer.dance(type, elementClass, this.analyser.getRangeAverageRatio(startValue, nbValue), options)
    })
    requestAnimationFrame(this.renderRythm)
  }

  stop = () => { 
    this.stopped = true
    this.player.stop()
  }

}