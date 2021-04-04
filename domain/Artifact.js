module.exports = () => class {
  constructor (id = null, legendary, name, description, photo, indesctructible, active) {
    this.id = id
    this.legendary = legendary
    this.name = name
    this.description = description
    this.photo = photo
    this.indesctructible = indesctructible
    this.active = active
  }
}
