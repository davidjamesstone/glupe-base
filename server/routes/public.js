module.exports = [{
  method: 'GET',
  path: '/robots.txt',
  options: {
    handler: {
      file: 'server/public/static/robots.txt'
    }
  }
}, {
  method: 'GET',
  path: '/public/{path*}',
  options: {
    handler: {
      directory: {
        path: [
          'server/public/static',
          'server/public/gft',
          'server/public/gtm',
          'server/public/build'
        ]
      }
    }
  }
}]
