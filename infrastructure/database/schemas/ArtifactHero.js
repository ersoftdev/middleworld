const { RESOLVER } = require('awilix')
const { Schema } = require('mongoose')

const artifactHeroSchema = new Schema({
  hero: { type: String, required: true }, 
  stack: Number, 
  delay: Number  
}, {
  timestamps: true
})

const artifactHeroModel = ({ database: mongoose }) => mongoose.model('ArtifactHero', artifactHeroSchema)
module.exports = artifactHeroModel

artifactModel[RESOLVER] = {
  name: 'ArtifactHeroSchema'
}
