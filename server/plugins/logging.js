const plugin = require('good')
const options = {
  ops: {
    interval: 60 * 1000 // 60s ops log
  },
  reporters: {
    console: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [
          {
            log: '*',
            ops: '*',
            error: '*',
            response: '*',
            request: '*'
          }
        ]
      },
      {
        module: 'good-console'
      },
      'stdout'
    ]
  }
}

module.exports = { plugin, options }
