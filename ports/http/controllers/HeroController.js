const pick = require('lodash/fp/pick')

const HeroController = (container) => ({
  listHeroes: async (req, res) => {
    const { ListHeroes } = container

    const heroes = await ListHeroes()
    return heroes
  },

  createHero: async (req, res) => {
    const { CreateHero } = container
    const { name, description, photo, alignment, active } = req.body

    const hero = await CreateHero(
      name, description, photo, alignment, active
    )

    res.code(201).send(hero)
  },

  findHero: async (req, res) => {
    const { GetHero } = container

    const hero = await GetHero(req.params.id)
    return hero
  },

  deleteHero: async (req, res) => {
    const { DeleteHero } = container

    const hero = await DeleteHero(req.params.id)
    return hero
  },

  updateHero: async (req, res) => {
    const { UpdateHero } = container

    const permitted = [
      'name', 'description', 'photo', 'alignment', 'active'
    ]

    const hero = await UpdateHero(req.params.id, pick(permitted, req.body))
    return hero
  }
})

module.exports = HeroController
