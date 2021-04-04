const { RESOLVER } = require('awilix')
const { Schema } = require('mongoose')

const artifactSchema = new Schema({
  legendary: Boolean,
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  photo: String,
  indestructible: Boolean,
  active: Boolean
}, {
  timestamps: true
})

const artifactModel = ({ database: mongoose }) => mongoose.model('Artifact', artifactSchema)
module.exports = artifactModel

artifactModel[RESOLVER] = {
  name: 'ArtifactSchema'
}
