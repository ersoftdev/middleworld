module.exports = ({ ReligionRepository }) =>
  (id, data) => ReligionRepository.merge(id, data)
