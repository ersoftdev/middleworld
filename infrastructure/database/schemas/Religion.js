const { RESOLVER } = require('awilix')
const { Schema } = require('mongoose')

const religionSchema = new Schema({  
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  photo: String,
  active: Boolean
}, {
  timestamps: true
})

const religionModel = ({ database: mongoose }) => mongoose.model('Religion', religionSchema)
module.exports = religionModel

religionModel[RESOLVER] = {
  name: 'ReligionSchema'
}
