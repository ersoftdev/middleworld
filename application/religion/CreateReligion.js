module.exports = ({ ReligionRepository, Religion }) =>
  (name, description, photo, active) => {
    const religion = new Religion(null, name, description, photo, active)
    return ReligionRepository.persist(religion)
  }
