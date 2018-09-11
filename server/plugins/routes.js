const routes = [].concat(
  require('./routes/home'),
  require('./routes/about'),
  require('./routes/public')
)

module.exports = {
  plugin: {
    name: 'routes',
    register: (server, options) => {
      server.route(routes)
    },
    dependencies: ['vision']
  }
}
