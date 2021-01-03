const HeroTypes = {
  NONE: 'HERO_TYPE_NONE',
  ATTACK: 'HERO_TYPE_ATTACK',
  SUPPORT: 'HERO_TYPE_SUPPORT',
  DEFENSE: 'HERO_TYPE_DEFENSE',
  getTypeFromRoll (roll) {
    console.log(roll)
    switch (roll) {
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
