module.exports = ({ WorldRepository, World }) =>
  (name, description, photo, dimension, active) => {
    const world = new World(null, name, description, photo, dimension, active)
    return WorldRepository.persist(world)
  }
