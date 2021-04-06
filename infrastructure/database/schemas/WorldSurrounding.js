const { RESOLVER } = require('awilix')
const { Schema } = require('mongoose')

const worldSurroundingSchema = new Schema({  
  world: { type: String, required: true },
  description: { type: String, required: true },
  environment: String
}, {
  timestamps: true
})

const worldSurroundingModel = ({ database: mongoose }) => mongoose.model('WorldSurrounding', worldSurroundingSchema)
module.exports = worldSurroundingModel

worldModel[RESOLVER] = {
  name: 'WorldSurroundingSchema'
}
