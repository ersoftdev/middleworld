const pick = require('lodash/fp/pick')

const WorldController = (container) => ({
  listWorlds: async (req, res) => {
    const { ListWorlds } = container

    const worlds = await ListWorlds()
    return worlds
  },

  createWorld: async (req, res) => {
    const { CreateWorld } = container
    const { name, description, photo, dimension, active } = req.body

    const world = await CreateWorld(
      name, description, photo, dimension, active
    )

    res.code(201).send(world)
  },

  findWorld: async (req, res) => {
    const { GetWorld } = container

    const world = await GetWorld(req.params.id)
    return world
  },

  deleteWorld: async (req, res) => {
    const { DeleteWorld } = container

    const world = await DeleteWorld(req.params.id)
    return world
  },

  updateWorld: async (req, res) => {
    const { UpdateWorld } = container

    const permitted = [
      'name', 'description', 'photo', 'dimension', 'active'
    ]

    const world = await UpdateWorld(req.params.id, pick(permitted, req.body))
    return world
  }
})

module.exports = WorldController
