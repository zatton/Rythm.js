export default (elem, value, options = {}) => {
  const max = options.max || 1
  const min = options.min || 0
  const vanish = (max - min) * value
  if(options.reverse) {
    elem.style.opacity = max - vanish
  } else {
    elem.style.opacity = min + vanish
  }
}
