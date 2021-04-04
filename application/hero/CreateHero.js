module.exports = ({ HeroRepository, Hero }) =>
  (name, description, photo, alignment, active) => {
    const hero = new Hero(null, name, description, photo, alignment, active)
    return HeroRepository.persist(hero)
  }
