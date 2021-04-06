const { NotFoundError, AlreadyExistsError } = require('../webserver/error')

const MONGO_ALREADY_EXISTS = 11000

module.exports = ({ ArtifactHero, ArtifactHeroSchema }) => ({
  find: async () => await ArtifactHeroSchema.find(),

  find: async (query) => await ArtifactHeroSchema.filter(query),

  persist: async artifactHero => {
    const { hero, stack, delay } = artifactHero
    const mArtifactHero = new ArtifactHeroSchema({
      hero, stack, delay
    })

    try {
      await mArtifactHero.save()
      return new ArtifactHero(
        mArtifactHero.id,
        mArtifactHero.hero,
        mArtifactHero.stack,
        mArtifactHero.delay
      )
    } catch (err) {
      if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This Hero Artifact already exist.')
      }
    }
  },

  get: async id => {
    const mArtifactHero = await ArtifactHeroSchema.findById(id)
    if (!mArtifactHero) throw new NotFoundError('Hero Artifact not found.')

    return new ArtifactHero(
      mArtifactHero.id,
      mArtifactHero.hero,
      mArtifactHero.stack,
      mArtifactHero.delay
    )
  },

  merge: async (id, data) => {
    try {
      const mArtifactHero = await ArtifactHeroSchema
        .findByIdAndUpdate(id, data, { new: true })

      return new ArtifactHero(
        mArtifactHero.id,
        mArtifactHero.hero,
        mArtifactHero.stack,
        mArtifactHero.delay
      )
    } catch (err) {
      if (err.name === 'CastError') {
        throw new NotFoundError('Hero Artifact not found.')
      } else if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This Hero Artifact already exist.')
      } else {
        throw err
      }
    }
  },

  remove: async (id) => {
    const mArtifactHero = await ArtifactHeroSchema.findOneAndDelete({ _id: id })
    if (!mArtifactHero) {
      throw new NotFoundError('Hero Artifact not found.')
    }

    return mArtifactHero
  }
})
