const { NotFoundError, AlreadyExistsError } = require('../webserver/error')

const MONGO_ALREADY_EXISTS = 11000

module.exports = ({ Religion, ReligionSchema }) => ({
  find: async () => await ReligionSchema.find(),

  persist: async religion => {
    const { name, description, photo, active } = religion
    const mReligion = new ReligionSchema({
      name, description, photo, active
    })

    try {
      await mReligion.save()
      return new Religion(
        mReligion.id,
        mReligion.name,
        mReligion.description,
        mReligion.photo,
        mReligion.active
      )
    } catch (err) {
      if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This Religion already exist.')
      }
    }
  },

  get: async id => {
    const mReligion = await ReligionSchema.findById(id)
    if (!mReligion) throw new NotFoundError('Religion not found.')

    return new Religion(
      mReligion.id,
      mReligion.name,
      mReligion.description,
      mReligion.photo,
      mReligion.active
    )
  },

  merge: async (id, data) => {
    try {
      const mReligion = await ReligionSchema
        .findByIdAndUpdate(id, data, { new: true })

      return new Religion(
        mReligion.id,
        mReligion.name,
        mReligion.description,
        mReligion.photo,
        mReligion.active
      )
    } catch (err) {
      if (err.name === 'CastError') {
        throw new NotFoundError('Religion not found.')
      } else if (err.code === MONGO_ALREADY_EXISTS) {
        throw new AlreadyExistsError('This Religion already exist.')
      } else {
        throw err
      }
    }
  },

  remove: async (id) => {
    const mReligion = await ReligionSchema.findOneAndDelete({ _id: id })
    if (!mReligion) {
      throw new NotFoundError('Religion not found.')
    }

    return mReligion
  }
})
