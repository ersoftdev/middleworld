const pick = require('lodash/fp/pick')

const ArtifactController = (container) => ({
  listArtifacts: async (req, res) => {
    const { ListArtifacts } = container

    const artifacts = await ListArtifacts()
    return artifacts
  },

  createArtifact: async (req, res) => {
    const { CreateArtifact } = container
    const { legendary, name, description, photo, indesctructible, active } = req.body

    const artifact = await CreateArtifact(
      legendary, name, description, photo, indesctructible, active
    )

    res.code(201).send(artifact)
  },

  findArtifact: async (req, res) => {
    const { GetArtifact } = container

    const artifact = await GetArtifact(req.params.id)
    return artifact
  },

  deleteArtifact: async (req, res) => {
    const { DeleteArtifact } = container

    const artifact = await DeleteArtifact(req.params.id)
    return artifact
  },

  updateArtifact: async (req, res) => {
    const { UpdateArtifact } = container

    const permitted = [
      'legendary', 'name', 'description', 'photo', 'indesctructible', 'active'
    ]

    const artifact = await UpdateArtifact(req.params.id, pick(permitted, req.body))
    return artifact
  }
})

module.exports = ArtifactController
