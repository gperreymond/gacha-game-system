/**

There are 3 sorts of "souls"

- Element : Fire, Water, Earth and Air
- Type : Warrior, Hunter, Mage, Rogue, Priest
- Role : Defense, Attack, Support

A hero is a combinaison of those 3 types of "souls", each combinaison give you some dice to roll.

**/

const { DiceRoll } = require('rpg-dice-roller')

const SoulElement = require('./SoulElement')
const SoulType = require('./SoulType')
const SoulRole = require('./SoulRole')

class Hero {
  constructor () {
    this.xp = 0
    this.level = 1
    this.element = SoulElement.getRandomItem()
    this.type = SoulType.getRandomItem()
    this.role = SoulRole.getRandomItem()
    this.attack = 0
    this.defense = 0
    this.life = 0
  }

  generate () {
    const { attack: a1, defense: d1, life: l1 } = SoulRole.getValues(this.role)
    const { attack: a2, defense: d2, life: l2 } = SoulElement.getValues(this.element)
    const { attack: a3, defense: d3, life: l3 } = SoulType.getValues(this.type)
    this.attack = new DiceRoll(a1).total + new DiceRoll(a2).total + new DiceRoll(a3).total
    this.defense = new DiceRoll(d1).total + new DiceRoll(d2).total + new DiceRoll(d3).total
    this.life = new DiceRoll(l1).total + new DiceRoll(l2).total + new DiceRoll(l3).total
    return true
  }
}

module.exports = Hero
