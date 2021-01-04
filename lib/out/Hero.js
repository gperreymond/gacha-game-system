const HeroTypes = require('./HeroTypes')
const HeroTypesGrowth = require('./HeroTypesGrowth')

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
    this.type = HeroTypes.getRandomType()
    // Get stats
    switch (this.type) {
      case HeroTypes.ATTACK:
        this.attack = HeroTypesGrowth.getRandomValue(HeroTypesGrowth.HIGH)
        this.defense = HeroTypesGrowth.getRandomValue(HeroTypesGrowth.LOW)
        this.life = HeroTypesGrowth.getRandomValue(HeroTypesGrowth.MEDIUM)
        this.endurance = 8
        break
      case HeroTypes.DEFENSE:
        this.attack = HeroTypesGrowth.getRandomValue(HeroTypesGrowth.LOW)
        this.defense = HeroTypesGrowth.getRandomValue(HeroTypesGrowth.MEDIUM)
        this.life = HeroTypesGrowth.getRandomValue(HeroTypesGrowth.HIGH)
        this.endurance = 12
        break
      case HeroTypes.SUPPORT:
        this.attack = HeroTypesGrowth.getRandomValue(HeroTypesGrowth.MEDIUM)
        this.defense = HeroTypesGrowth.getRandomValue(HeroTypesGrowth.MEDIUM)
        this.life = HeroTypesGrowth.getRandomValue(HeroTypesGrowth.MEDIUM)
        this.endurance = 10
        break
      default:
        break
    }
  }

  nextLevel (level) {
    const exponent = 1.5
    const baseXP = 1000
    return Math.floor(baseXP * (level ^ exponent))
  }
}

module.exports = Hero
