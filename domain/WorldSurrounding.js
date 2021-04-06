module.exports = () => class {
  constructor (id = null, world, environment) {
    this.id = id
    this.world = world
    this.environment = environment
  }
}
