const Glue = require('glue')
const manifest = require('./manifest')

const options = {
  relativeTo: __dirname
}

function composeServer (callback) {
  Glue.compose(manifest, options, function (err, server) {
    if (err) {
      return callback(err)
    }

    /**
     * Load all routes
     */
    server.route(require('./routes'))

    callback(null, server)
  })
}

module.exports = composeServer
