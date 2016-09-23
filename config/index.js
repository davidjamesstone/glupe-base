var Joi = require('joi')
var schema = require('./schema')
var config = require('./server.json')

// Validate config
var result = Joi.validate(config, schema, {
  abortEarly: false
})

// Throw if config is invalid
if (result.error) {
  throw new Error('The server config is invalid. ' + result.error.message)
}

// Return the config
module.exports = result.value
