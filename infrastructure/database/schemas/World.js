const { RESOLVER } = require('awilix')
const { Schema } = require('mongoose')

const worldSchema = new Schema({  
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  photo: String,
  active: Boolean
}, {
  timestamps: true
})

const worldModel = ({ database: mongoose }) => mongoose.model('World', worldSchema)
module.exports = worldModel

worldModel[RESOLVER] = {
  name: 'WorldSchema'
}
