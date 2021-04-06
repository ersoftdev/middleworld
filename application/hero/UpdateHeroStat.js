module.exports = ({ HeroStatRepository }) =>
  (id, data) => HeroStatRepository.merge(id, data)
