const pick = require('lodash/fp/pick')

const ReligionController = (container) => ({
  listReligions: async (req, res) => {
    const { ListReligions } = container

    const religions = await ListReligions()
    return religions
  },

  createReligion: async (req, res) => {
    const { CreateReligion } = container
    const { name, description, photo, active } = req.body

    const religion = await CreateReligion(
      name, description, photo, active
    )

    res.code(201).send(religion)
  },

  findReligion: async (req, res) => {
    const { GetReligion } = container

    const religion = await GetReligion(req.params.id)
    return religion
  },

  deleteReligion: async (req, res) => {
    const { DeleteReligion } = container

    const religion = await DeleteReligion(req.params.id)
    return religion
  },

  updateReligion: async (req, res) => {
    const { UpdateReligion } = container

    const permitted = [
      'name', 'description', 'photo', 'active'
    ]

    const religion = await UpdateReligion(req.params.id, pick(permitted, req.body))
    return religion
  }
})

module.exports = ReligionController
