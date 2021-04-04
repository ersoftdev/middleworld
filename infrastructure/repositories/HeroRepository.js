const { NotFoundError, AlreadyExistsError } = require('../webserver/error')

const MONGO_ALREADY_EXISTS = 11000

module.exports = ({ Hero, HeroSchema }) => ({
  find: async () => await HeroSchema.find(),

  persist: async hero => {
    const { name, description, photo, alignment, active } = hero
    const mHero = new HeroSchema({
      name, description, photo, alignment, active
    })

    try {
      await mHero.save()
      return new Hero(
        mHero.id,
        mHero.name,
        mHero.description,
        mHero.photo,
        mHero.alignment,
        mHero.active
      )
    } catch (err) {
      if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This Hero already exist.')
      }
    }
  },

  get: async id => {
    const mHero = await HeroSchema.findById(id)
    if (!mHero) throw new NotFoundError('Hero not found.')

    return new Hero(
      mHero.id,
      mHero.name,
      mHero.description,
      mHero.photo,
      mHero.alignment,
      mHero.active
    )
  },

  merge: async (id, data) => {
    try {
      const mHero = await HeroSchema
        .findByIdAndUpdate(id, data, { new: true })

      return new Hero(
        mHero.id,
        mHero.name,
        mHero.description,
        mHero.photo,
        mHero.alignment,
        mHero.active
      )
    } catch (err) {
      if (err.name === 'CastError') {
        throw new NotFoundError('Hero not found.')
      } else if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This Hero already exist.')
      } else {
        throw err
      }
    }
  },

  remove: async (id) => {
    const mHero = await HeroSchema.findOneAndDelete({ _id: id })
    if (!mHero) {
      throw new NotFoundError('Hero not found.')
    }

    return mHero
  }
})
