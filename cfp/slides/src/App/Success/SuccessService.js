let subscriber = () => {}

// setInterval(() => subscriber('wesh'), 1000)

export default {
  onSuccess: (callback) => {
    subscriber = callback
  },
  sendSuccess: (text) => {
    subscriber(text)
  },
}
