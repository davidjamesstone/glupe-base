const Glue = require('glue')
const manifest = require('./manifest')

module.exports = () => {
  return Glue.compose(manifest, { relativeTo: __dirname })
}
