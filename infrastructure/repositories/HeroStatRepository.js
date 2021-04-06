const { NotFoundError, AlreadyExistsError } = require('../webserver/error')

const MONGO_ALREADY_EXISTS = 11000

module.exports = ({ HeroStat, HeroStatSchema }) => ({
  find: async () => await HeroStatSchema.find(),

  find: async (query) => await HeroStatSchema.filter(query),

  persist: async heroStat => {
    const { hero, power, mana, craft,  religion } = heroStat
    const mHeroStat = new HeroStatSchema({
      hero, power, mana, craft,  religion
    })

    try {
      await mHeroStat.save()
      return new HeroStat(
        mHeroStat.id,
        mHeroStat.hero,
        mHeroStat.power,
        mHeroStat.mana,
        mHeroStat.craft,
        mHeroStat.religion
      )
    } catch (err) {
      if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This Hero Stats already exist.')
      }
    }
  },

  get: async id => {
    const mHeroStat = await HeroStatSchema.findById(id)
    if (!mHeroStat) throw new NotFoundError('Hero Stat not found.')

    return new HeroStat(
      mHeroStat.id,
      mHeroStat.hero,
      mHeroStat.power,
      mHeroStat.mana,
      mHeroStat.craft,
      mHeroStat.religion
    )
  },

  merge: async (id, data) => {
    try {
      const mHeroStat = await HeroStatSchema
        .findByIdAndUpdate(id, data, { new: true })

      return new HeroStat(
        mHeroStat.id,
        mHeroStat.hero,
        mHeroStat.power,
        mHeroStat.mana,
        mHeroStat.craft,
        mHeroStat.religion
      )
    } catch (err) {
      if (err.name === 'CastError') {
        throw new NotFoundError('Hero Stat not found.')
      } else if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This Hero Stat already exist.')
      } else {
        throw err
      }
    }
  },

  remove: async (id) => {
    const mHeroStat = await HeroStatSchema.findOneAndDelete({ _id: id })
    if (!mHeroStat) {
      throw new NotFoundError('Hero Stat not found.')
    }

    return mHeroStat
  }
})
