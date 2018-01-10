const pkg = require('./package.json')
const composeServer = require('./server')

async function startServer () {
  let server
  const info = {}

  try {
    // Compose and start the server
    server = await composeServer()
    await server.start()

    // Log server start
    info.uri = server.info.uri
    info.message = `Started ${pkg.name}@${pkg.version}`
    server.log('info', info)
    console.info(info.message, info.uri)
  } catch (err) {
    // Log server error
    info.err = err
    info.message = `Failed to start ${pkg.name}@${pkg.version}`
    if (server) server.log(['error', 'info'], info)
    console.error(info.message, info)

    process.exit(1)
  }
}

startServer()
