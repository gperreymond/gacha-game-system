const { DiceRoll } = require('rpg-dice-roller')

const Growth = {
  VERY_LOW: '1d2', // from 1 to 2
  LOW: '1d6', // from 1 to 6
  MEDIUM: '2d3 + 2', // from 4 to 8
  HIGH: '5d2 + 3', // from 8 to 13
  VERY_HIGH: '5d2 + 3d2', // from 8 to 16
  getRandomValue (growth) {
    const roll = new DiceRoll(growth)
    return roll.total
  }
}

module.exports = Growth
