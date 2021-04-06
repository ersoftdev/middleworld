module.exports = () => class {
  constructor (id = null, hero, stack, delay) {
    this.id = id
    this.hero = hero
    this.stack = stack
    this.delay = delay
  }
}
