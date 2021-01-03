const { DiceRoll } = require('rpg-dice-roller')
const HeroTypes = require('./HeroTypes')

class Hero {
  constructor () {
    // principal
    this.level = 0
    this.xp = 0
    this.type = HeroTypes.NONE
    // characteristics
    this.attack = 0
    this.defense = 0
    this.life = 0
    this.endurance = 0
  }

  generate () {
    // Get type
    const typeRoll = new DiceRoll('1d3')
    this.type = HeroTypes.getTypeFromRoll(typeRoll.total)
  }

  nextLevel (level) {
    const exponent = 1.5
    const baseXP = 1000
    return Math.floor(baseXP * (level ^ exponent))
  }
}

module.exports = Hero
