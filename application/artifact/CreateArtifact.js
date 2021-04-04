module.exports = ({ ArtifactRepository, Artifact }) =>
  (legendary, name, description, photo, indesctructible, active) => {
    const artifact = new Artifact(null, legendary, name, description, photo, indesctructible, active)
    return ArtifactRepository.persist(artifact)
  }
