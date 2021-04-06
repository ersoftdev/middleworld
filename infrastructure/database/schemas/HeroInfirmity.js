const { RESOLVER } = require('awilix')
const { Schema } = require('mongoose')

const heroInfirmitySchema = new Schema({
  hero: {  type: String, required: true }, 
  infirmity: String
}, {
  timestamps: true
})

const heroInfirmityModel = ({ database: mongoose }) => mongoose.model('HeroInfirmity', heroInfirmitySchema)
module.exports = heroInfirmityModel

heroModel[RESOLVER] = {
  name: 'HeroInfirmity'
}
