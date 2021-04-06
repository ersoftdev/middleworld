const { NotFoundError, AlreadyExistsError } = require('../webserver/error')

const MONGO_ALREADY_EXISTS = 11000

module.exports = ({ HeroInfirmity, HeroInfirmitySchema }) => ({
  find: async () => await HeroInfirmitySchema.find(),

  find: async (query) => await HeroInfirmitySchema.filter(query),

  persist: async heroInfirmity => {
    const { hero, infirmity } = heroInfirmity
    const mHeroInfirmity = new HeroInfirmitySchema({
      hero, infirmity
    })

    try {
      await mHeroInfirmity.save()
      return new HeroInfirmity(
        mHeroInfirmity.id,
        mHeroInfirmity.hero,
        mHeroInfirmity.infirmity
      )
    } catch (err) {
      if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This Hero already exist.')
      }
    }
  },

  get: async id => {
    const mHeroInfirmity = await HeroInfirmitySchema.findById(id)
    if (!mHero) throw new NotFoundError('Infirmity not found.')

    return new HeroInfirmity(
      mHeroInfirmity.id,
      mHeroInfirmity.hero,
      mHeroInfirmity.infirmity
    )
  },

  merge: async (id, data) => {
    try {
      const mHeroInfirmity = await HeroInfirmitySchema
        .findByIdAndUpdate(id, data, { new: true })

      return new HeroInfirmity(
        mHeroInfirmity.id,
        mHeroInfirmity.hero,
        mHeroInfirmity.infirmity
      )
    } catch (err) {
      if (err.name === 'CastError') {
        throw new NotFoundError('Infirmity not found.')
      } else if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This Hero Infirmity already exist.')
      } else {
        throw err
      }
    }
  },

  remove: async (id) => {
    const mHeroInfirmity = await HeroInfirmitySchema.findOneAndDelete({ _id: id })
    if (!mHeroInfirmity) {
      throw new NotFoundError('Hero Infirmity not found.')
    }

    return mHeroInfirmity
  }
})
