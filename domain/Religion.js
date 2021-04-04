module.exports = () => class {
  constructor (id = null, name, description, photo, active) {
    this.id = id
    this.name = name
    this.description = description
    this.photo = photo
    this.active = active
  }
}
