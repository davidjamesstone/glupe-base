const config = require('../config')

const manifest = {
  server: {},
  connections: [
    {
      port: config.server.port,
      host: config.server.host,
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
