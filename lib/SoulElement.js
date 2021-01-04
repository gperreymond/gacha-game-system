const { DiceRoll } = require('rpg-dice-roller')
const { find } = require('lodash')

const Growth = require('./Growth')

const properties = [{
  name: 'SOUL_ELEMENT_FIRE',
  attack: Growth.HIGH,
  defense: Growth.LOW,
  life: Growth.LOW
}, {
  name: 'SOUL_ELEMENT_WATER',
  attack: Growth.LOW,
  defense: Growth.LOW,
  life: Growth.HIGH
}, {
  name: 'SOUL_ELEMENT_EARTH',
  attack: Growth.LOW,
  defense: Growth.HIGH,
  life: Growth.LOW
}, {
  name: 'SOUL_ELEMENT_AIR',
  attack: Growth.MEDIUM,
  defense: Growth.MEDIUM,
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
