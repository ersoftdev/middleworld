module.exports = () => class {
  constructor (id = null, hero, power, mana, craft,  religion) {
    this.id = id
    this.hero = hero
    this.power = power
    this.mana = mana
    this.craft = craft
    this.religion = religion
  }
}
