const { RESOLVER } = require('awilix')
const { Schema } = require('mongoose')

const heroSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  photo: String,
  alignment: {
    type: String,
    enum: ['Light', 'Dark', 'Chaos', 'Neutral']
  },
  active: Boolean
}, {
  timestamps: true
})

const heroModel = ({ database: mongoose }) => mongoose.model('Hero', heroSchema)
module.exports = heroModel

heroModel[RESOLVER] = {
  name: 'HeroSchema'
}
