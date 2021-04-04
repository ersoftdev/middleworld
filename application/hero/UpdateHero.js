module.exports = ({ HeroRepository }) =>
  (id, data) => HeroRepository.merge(id, data)
