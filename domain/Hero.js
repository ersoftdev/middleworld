module.exports = () => class {
  constructor (id = null, name, description, photo, alignment, active) {
    this.id = id
    this.name = name
    this.description = description
    this.photo = photo
    this.alignment = alignment
    this.active = active
  }
}
