module.exports = [{
  method: 'GET',
  path: '/robots.txt',
  options: {
    handler: {
      file: 'server/public/robots.txt'
    }
  }
}, {
  method: 'GET',
  path: '/public/{path*}',
  options: {
    handler: {
      directory: {
        path: ['server/public']
      }
    }
  }
}]
