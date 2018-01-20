const mongoose = require('mongoose')
const config = require('../../config')

/*
 * Registers the database and
 * initializes a mongo connection
 */
module.exports = {
  plugin: {
    name: 'db',
    register: async (server, options) => {
      await mongoose.connect(config.db.uri)
      const connection = mongoose.connection

      // Ensure data model
      require('../../db')

      server.log(['mongoose-connect', 'db'], 'Database connection open')

      // Close db connection if the server stops
      server.events.on('stop', () => {
        server.log(['mongoose-connect', 'plugin'], 'Database connection closed')
        connection.close()
      })
    }
  }
}
