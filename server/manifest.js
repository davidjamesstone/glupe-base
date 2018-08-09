const handlebars = require('handlebars')
const config = require('../config')
const pkg = require('../package.json')
const analyticsAccount = config.analyticsAccount

const viewsContext = {
  appVersion: pkg.version,
  serviceName: 'Service name',
  pageTitle: 'Service name - GOV.UK',
  analyticsAccount: analyticsAccount
}

const manifest = {
  server: {
    port: config.server.port,
    host: config.server.host,
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
      'inert',
      {
        plugin: 'good',
        options: config.logging
      },
      {
        plugin: 'vision',
        options: {
          engines: {
            html: handlebars
          },
          layout: true,
          relativeTo: __dirname,
          path: 'views',
          isCached: config.views.cache,
          helpersPath: 'views/helpers',
          partialsPath: 'views/partials',
          context: viewsContext
        }
      },
      './plugins/router',
      './plugins/error-pages'
    ]
  }
}

module.exports = manifest
