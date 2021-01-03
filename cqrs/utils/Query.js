const path = require('path')

class Query {
  constructor () {
    this.action = {}
    this.action.metadata = {
      cqrs: {
        type: 'Query'
      }
    }
  }

  setHandler (value) {
    this.action.handler = value
  }

  setModel (value) {
    const modelFilepath = path.resolve(__dirname, '../..', value)
    this.action.metadata.cqrs.model = modelFilepath
  }

  getAction () {
    return this.action
  }
}

module.exports = Query
