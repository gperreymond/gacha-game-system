const { Command } = require('../../../utils')
const { Hero } = require('../../../../lib')

const handler = async function (ctx) {
  // Generate uuid
  ctx.params.id = ctx.broker.generateUid()
  // Generate random hero
  const hero = new Hero()
  hero.generate()
  console.log(hero)
  // Return
  return {
    aggregateID: ctx.params.id
  }
}

const command = new Command()
command.setHandler(handler)

module.exports = command
