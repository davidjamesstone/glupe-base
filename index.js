const server = require('./server')

server
  .start()
  .then(server => console.log(server.info))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
