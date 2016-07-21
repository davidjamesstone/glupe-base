const Glue = require('glue')
const config = require('./config')
const manifest = require('./server/manifest')
const pkg = require('./package.json')
const appName = pkg.name
const appVersion = pkg.version

Glue.compose(manifest, function (err, server) {
  if (err) {
    throw err
  }

  /*
   * Start the server
   */
  server.start(function (err) {
    var details = {
      name: appName,
      version: appVersion,
      info: server.info
    }

    if (err) {
      details.error = err
      details.message = 'Failed to start ' + details.name
      server.log(['error', 'info'], details)
      throw err
    } else {
      details.config = config
      details.message = 'Started ' + details.name
      server.log('info', details)
      console.info('Server running at:', server.info)
    }
  })
})
