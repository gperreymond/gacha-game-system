const { DiceRoll } = require('rpg-dice-roller')
const { find } = require('lodash')

const Growth = require('./Growth')

const properties = [{
  name: 'SOUL_ELEMENT_WARRIOR',
  attack: Growth.LOW,
  defense: Growth.MEDIUM,
  life: Growth.HIGH
}, {
  name: 'SOUL_ELEMENT_HUNTER',
  attack: Growth.HIGH,
  defense: Growth.LOW,
  life: Growth.MEDIUM
}, {
  name: 'SOUL_ELEMENT_MAGE',
  attack: Growth.HIGH,
  defense: Growth.MEDIUM,
  life: Growth.LOW
}, {
  name: 'SOUL_ELEMENT_ROGUE',
  attack: Growth.VERY_HIGH,
  defense: Growth.MEDIUM,
  life: Growth.VERY_LOW
}, {
  name: 'SOUL_ELEMENT_PRIEST',
  attack: Growth.VERY_LOW,
  defense: Growth.VERY_HIGH,
  life: Growth.MEDIUM
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
