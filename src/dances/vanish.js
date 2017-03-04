export default (elem, value, options = {}) => {
  const max = options.max || 1
  const min = options.min || 0
  const scale = (max - min) * value
  if(options.reverse) {
    console.log(max - scale)
    elem.style.opacity = max - scale
  } else {
    elem.style.opacity = min + scale
  }
}
