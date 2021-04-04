module.exports = () => class {
  constructor (id = null, name, description, photo, dimension, active) {
    this.id = id
    this.name = name
    this.description = description
    this.photo = photo
    this.dimension = dimension
    this.active = active
  }
}
