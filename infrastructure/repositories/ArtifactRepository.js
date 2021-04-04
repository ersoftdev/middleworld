const { NotFoundError, AlreadyExistsError } = require('../webserver/error')

const MONGO_ALREADY_EXISTS = 11000

module.exports = ({ Artifact, ArtifactSchema }) => ({
  find: async () => await ArtifactSchema.find(),

  persist: async artifact => {
    const { legendary, name, description, photo, indesctructible, active } = artifact
    const mArtifact = new ArtifactSchema({
      legendary, name, description, photo, indesctructible, active
    })

    try {
      await mArtifact.save()
      return new Artifact(
        mArtifact.id,
        mArtifact.name,
        mArtifact.description,
        mArtifact.photo,
        mArtifact.indesctructible,
        mArtifact.active
      )
    } catch (err) {
      if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This Artifact already exist.')
      }
    }
  },

  get: async id => {
    const mArtifact = await ArtifactSchema.findById(id)
    if (!mArtifact) throw new NotFoundError('Artifact not found.')

    return new Artifact(
      mArtifact.id,
      mArtifact.name,
      mArtifact.description,
      mArtifact.photo,
      mArtifact.indesctructible,
      mArtifact.active
    )
  },

  merge: async (id, data) => {
    try {
      const mArtifact = await ArtifactSchema
        .findByIdAndUpdate(id, data, { new: true })

      return new Artifact(
        mArtifact.id,
        mArtifact.name,
        mArtifact.description,
        mArtifact.photo,
        mArtifact.indesctructible,
        mArtifact.active
      )
    } catch (err) {
      if (err.name === 'CastError') {
        throw new NotFoundError('Artifact not found.')
      } else if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This Artifact already exist.')
      } else {
        throw err
      }
    }
  },

  remove: async (id) => {
    const mArtifact = await ArtifactSchema.findOneAndDelete({ _id: id })
    if (!mArtifact) {
      throw new NotFoundError('Artifact not found.')
    }

    return mArtifact
  }
})
