import pulse from './dances/pulse.js'
import shake from './dances/shake.js'
import jump from './dances/jump.js'
import twist from './dances/twist.js'
import vanish from './dances/vanish.js'

class Dancer {
  constructor() {
    this.dances = {}
    this.registerDance('size', pulse)
    this.registerDance('pulse', pulse)
    this.registerDance('shake', shake)
    this.registerDance('jump', jump)
    this.registerDance('twist', twist)
    this.registerDance('vanish', vanish)
  }

  registerDance(type, value) {
    this.dances[type] = value
  }

  dance(type, className, ratio, options) {
    const dance = this.dances[type] || this.dances['size']
    const elements = document.getElementsByClassName(className)
    Array.from(elements).forEach(elem => dance(elem, ratio, options))
  }
}

export default new Dancer