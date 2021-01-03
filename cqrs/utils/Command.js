const path = require('path')

class Command {
  constructor () {
    this.action = {}
    this.action.metadata = {
      cqrs: {
        type: 'Command'
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

  setEventType (value) {
    this.action.metadata.cqrs.eventType = value
  }

  setAggregateType (value) {
    this.action.metadata.cqrs.aggregateType = value
  }

  getAction () {
    return this.action
  }
}

module.exports = Command
