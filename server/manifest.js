const config = require('../config')

const manifest = {
  server: {
    port: config.server.port,
    host: config.server.home,
    routes: {
      validate: {
        options: {
          abortEarly: false
        }
      }
    }
  },
  register: {
    plugins: [
      {
        plugin: 'good',
        options: config.logging
      },
      './plugin/router',
      './plugin/logerrors'
    ]
  }
}

module.exports = manifest
