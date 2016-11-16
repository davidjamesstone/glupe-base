const config = require('../config')

const manifest = {
  server: {
    connections: {
      routes: {
        validate: {
          options: {
            abortEarly: false
          }
        }
      }
    }
  },
  connections: [
    {
      port: config.server.port,
      host: config.server.home,
      labels: config.server.labels
    }
  ],
  registrations: [
    {
      plugin: {
        register: 'good',
        options: config.logging
      }
    }
  ]
}

module.exports = manifest
