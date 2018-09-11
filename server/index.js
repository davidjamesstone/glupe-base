const flappy = require('flappy')
const config = require('./config')
const port = config.port

const server = flappy({ port })
  .use(require('inert'))
  .use(require('blipp'), config.isDev)
  .use(require('./plugins/logging'), config.isDev)
  .use(require('./plugins/views'))
  .use(require('./plugins/routes'))
  .use(require('./plugins/errors'))

module.exports = server
