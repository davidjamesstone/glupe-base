const handlebars = require('handlebars')
const config = require('../config')
const pkg = require('../package.json')
const analyticsAccount = config.analyticsAccount

const viewsContext = {
  appVersion: pkg.version,
  globalHeaderText: 'GOV.UK',
  pageTitle: 'Service name - GOV.UK',
  skipLinkMessage: 'Skip to main content',
  homepageUrl: 'https://www.gov.uk/',
  logoLinkTitle: 'Go to the GOV.UK homepage',
  crownCopyrightMessage: '© Crown copyright',
  assetPath: '/public/',
  htmlLang: 'en',
  headerClass: 'with-proposition',
  analyticsAccount: analyticsAccount,
  phase: '' // alpha or beta, blank is live and requires no phase banner
}

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
      './plugins/log-errors',
      './plugins/error-pages'
    ]
  }
}

module.exports = manifest
