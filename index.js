const Glupe = require('glupe')
const config = require('./config')

Glupe.compose(__dirname, config, function (err, server) {
  if (err) {
    throw err
  }

  server.start(function (err) {
    if (err) {
      server.log('error', 'Error starting server')
      throw err
    }

    server.log('info', 'Server started')
    console.info('Server running at:', server.info)
  })
})
