module.exports = ({ HeroArtifactRepository, HeroArtifact }) =>
  (hero, stack, delay) => {
    const heroArtifact = new HeroArtifact(hero, stack, delay)
    return HeroArtifactRepository.persist(heroArtifact)
  }
