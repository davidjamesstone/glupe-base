module.exports = {
  method: 'GET',
  path: '/',
  options: {
    handler: (request, h) => {
      throw new Error('Eror')
      return h.view('home')
    }
  }
}
