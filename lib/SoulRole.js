const { DiceRoll } = require('rpg-dice-roller')
const { find } = require('lodash')

const Growth = require('./Growth')

const properties = [{
  name: 'SOUL_ELEMENT_DEFENSE',
  attack: Growth.LOW,
  defense: Growth.HIGH,
  life: Growth.MEDIUM
}, {
  name: 'SOUL_ELEMENT_ATTACK',
  attack: Growth.HIGH,
  defense: Growth.LOW,
  life: Growth.MEDIUM
}, {
  name: 'SOUL_ELEMENT_SUPPORT',
  attack: Growth.LOW,
  defense: Growth.MEDIUM,
  life: Growth.HIGH
}]

const Soul = {
  getValues (name) {
    const property = find(properties, function (o) { return o.name === name })
    return property
  },
  getRandomItem () {
    const roll = new DiceRoll(`1d${properties.length}`).total - 1
    return properties[roll].name
  }
}

module.exports = Soul
