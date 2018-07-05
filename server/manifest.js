const nunjucks = require('nunjucks')
const config = require('../config')
const pkg = require('../package.json')
const analyticsAccount = config.analyticsAccount

const viewsContext = {
  appVersion: pkg.version,
  assetPath: '/assets',
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
            njk: {
              compile: (src, options) => {
                const template = nunjucks.compile(src, options.environment)

                return (context) => {
                  return template.render(context)
                }
              },

              prepare: (options, next) => {
                const path = options.path
                options.compileOptions.environment = nunjucks.configure(path, { watch: false })
                return next()
              }
            }
          },
          path: 'server/views',
          isCached: config.views.cache,
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
