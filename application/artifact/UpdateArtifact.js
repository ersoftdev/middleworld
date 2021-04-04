module.exports = ({ ArtifactRepository }) =>
  (id, data) => ArtifactRepository.merge(id, data)
