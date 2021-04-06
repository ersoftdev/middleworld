const { NotFoundError, AlreadyExistsError } = require('../webserver/error')

const MONGO_ALREADY_EXISTS = 11000

module.exports = ({ WorldSurrounding, WorldSurroundingSchema }) => ({
  find: async () => await WorldSurroundingSchema.find(),

  find: async (query) => await WorldSurroundingSchema.filter(query),

  persist: async worldSurrounding => {
    const { world, environment } = worldSurrounding
    const mWorldSurrounding = new WorldSurroundingSchema({
      world, environment
    })

    try {
      await mWorldSurrounding.save()
      return new WorldSurrounding(
        mWorldSurrounding.id,
        mWorldSurrounding.world,
        mWorldSurrounding.environment
      )
    } catch (err) {
      if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This World Surrounding already exist.')
      }
    }
  },

  get: async id => {
    const mWorldSurrounding = await WorldSurroundingSchema.findById(id)
    if (!mWorldSurrounding) throw new NotFoundError('World Surrounding not found.')

    return new WorldSurrounding(
      mWorldSurrounding.id,
      mWorldSurrounding.world,
      mWorldSurrounding.environment
    )
  },

  merge: async (id, data) => {
    try {
      const mWorldSurrounding = await WorldSurroundingSchema
        .findByIdAndUpdate(id, data, { new: true })

      return new WorldSurrounding(
        mWorldSurrounding.id,
        mWorldSurrounding.world,
        mWorldSurrounding.environment
      )
    } catch (err) {
      if (err.name === 'CastError') {
        throw new NotFoundError('World Surrounding not found.')
      } else if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This World Surrounding already exist.')
      } else {
        throw err
      }
    }
  },

  remove: async (id) => {
    const mWorldSurrounding = await WorldSurroundingSchema.findOneAndDelete({ _id: id })
    if (!mWorldSurrounding) {
      throw new NotFoundError('World Surrounding not found.')
    }

    return mWorldSurrounding
  }
})
