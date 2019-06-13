import { lighten } from 'polished'
import { primary } from './colors'

export default (color = primary, factor = 2) =>
  `0 0 ${factor * 3}px ${lighten(0.7, color)}, 0 0 ${factor *
    4}px ${color}, 0 0 ${factor * 5}px ${color}`
