const { v4: uuidv4 } = require('uuid')

const { name, version } = require('./package.json')

module.exports = {
  nodeID: `node-${name}-${version}-${uuidv4()}`,
  logger: true,
  cacher: 'Memory',
  metrics: false
}
