const { DiceRoll } = require('rpg-dice-roller')

const HeroTypes = {
  NONE: 'HERO_TYPE_NONE',
  ATTACK: 'HERO_TYPE_ATTACK',
  SUPPORT: 'HERO_TYPE_SUPPORT',
  DEFENSE: 'HERO_TYPE_DEFENSE',
  getRandomType () {
    const roll = new DiceRoll('1d3')
    switch (roll.total) {
      case 1:
        return 'HERO_TYPE_ATTACK'
      case 2:
        return 'HERO_TYPE_SUPPORT'
      case 3:
        return 'HERO_TYPE_DEFENSE'
      default:
        return 'HERO_TYPE_NONE'
    }
  }
}

module.exports = HeroTypes
