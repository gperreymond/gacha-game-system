const HeroTypes = require('./HeroTypes')

class Hero {
  constructor () {
    // type
    this.TYPE = HeroTypes.NONE
    // characteristics
    this.ATTACK = 0
    this.DEFENSE = 0
    this.LIFE = 0
    this.ENDURANCE = 0
    // others
    this.CRITICAL_RATE = 0
  }
}

module.exports = Hero
