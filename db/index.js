const mongoose = require('mongoose')
const Joi = require('joi')
const generator = require('vsd-db-mongoose')(mongoose)
const modelData = require('./db.json')
const objectId = require('joi-objectid')

/**
 * Register objectId on joi
 * so we can use it in our app
 */
Joi.objectId = objectId(Joi)

/**
 * Generate mongoose schema from the data
 */
var schemas = generator.generateSchemas(modelData)

// Do any custom work on the schemas here.
// E.g. add statics and virtuals, register plugins.

/**
 * Generate mongoose models
 */
var models = generator.generateModels(schemas)

module.exports = models
