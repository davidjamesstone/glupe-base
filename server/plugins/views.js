const handlebars = require('handlebars')
const config = require('../config')

const plugin = require('vision')
const options = {
  engines: {
    html: handlebars
  },
  layout: true,
  relativeTo: __dirname,
  path: 'views',
  isCached: !config.isDev,
  helpersPath: 'views/helpers',
  partialsPath: 'views/partials',
  context: {
    meta: {
      title: 'Hapi Website',
      description: 'My Hapi Website',
      keywords: 'foo, bar',
      author: '@me'
    }
  }
}

module.exports = { plugin, options }
