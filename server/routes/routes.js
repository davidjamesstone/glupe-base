module.exports = {
  home: {
    handler: (request, h) => {
      return h.view('home')
    }
  },
  about: {
    handler: (request, h) => {
      return h.view('about')
    }
  }
}
