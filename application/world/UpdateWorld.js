module.exports = ({ WorldRepository }) =>
  (id, data) => WorldRepository.merge(id, data)
