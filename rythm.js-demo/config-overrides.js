module.exports = function override(config, env) {
  //do stuff with the webpack config...
  setTimeout(() => console.log(config.resolve), 4000)
  return config
}
