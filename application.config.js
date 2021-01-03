const nconf = require('nconf')
nconf.argv().env().file({ file: 'nconf.json' })

module.exports = {
}
