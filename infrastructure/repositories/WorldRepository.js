const { NotFoundError, AlreadyExistsError } = require('../webserver/error')

const MONGO_ALREADY_EXISTS = 11000

module.exports = ({ World, WorldSchema }) => ({
  find: async () => await WorldSchema.find(),

  persist: async world => {
    const { name, description, photo, dimension, active } = world
    const mWorld = new WorldSchema({
      name, description, photo, dimension, active
    })

    try {
      await mWorld.save()
      return new World(
        mWorld.id,
        mWorld.name,
        mWorld.description,
        mWorld.photo,
        mWorld.dimension,
        mWorld.active
      )
    } catch (err) {
      if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This World already exist.')
      }
    }
  },

  get: async id => {
    const mWorld = await WorldSchema.findById(id)
    if (!mWorld) throw new NotFoundError('World not found.')

    return new World(
      mWorld.id,
      mWorld.name,
      mWorld.description,
      mWorld.photo,
      mWorld.dimension,
      mWorld.active
    )
  },

  merge: async (id, data) => {
    try {
      const mWorld = await WorldSchema
        .findByIdAndUpdate(id, data, { new: true })

      return new World(
        mWorld.id,
        mWorld.name,
        mWorld.description,
        mWorld.photo,
        mWorld.dimension,
        mWorld.active
      )
    } catch (err) {
      if (err.name === 'CastError') {
        throw new NotFoundError('World not found.')
      } else if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This World already exist.')
      } else {
        throw err
      }
    }
  },

  remove: async (id) => {
    const mWorld = await WorldSchema.findOneAndDelete({ _id: id })
    if (!mWorld) {
      throw new NotFoundError('World not found.')
    }

    return mWorld
  }
})
