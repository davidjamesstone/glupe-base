const Glupe = require('glupe')
const config = require('./config')
const appName = require('./package.json').name

Glupe.compose(__dirname, config, function (err, server) {
  if (err) {
    throw err
  }

  /*
   * Start the server
   */
  server.start(function (err) {
    var details = {
      name: appName,
      info: server.info
    }

    if (err) {
      details.error = err
      details.message = 'Failed to start ' + details.name
      server.log('error', details)
      throw err
    } else {
      details.config = config
      details.message = 'Started ' + details.name
      server.log('info', details)
      console.info('Server running at:', server.info)
    }
  })
})
