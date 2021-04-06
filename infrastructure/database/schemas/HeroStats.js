const { RESOLVER } = require('awilix')
const { Schema } = require('mongoose')

const heroStatsSchema = new Schema({
  hero: { type: String, required: true }, 
  power: { type: number, required: true }, 
  mana: { type: number, required: true }, 
  craft: { type: number, required: true },  
  religion: String
})

const heroStatsModel = ({ database: mongoose }) => mongoose.model('HeroStats', heroStatsSchema)
module.exports = heroStatsModel

heroModel[RESOLVER] = {
  name: 'HeroStatsSchema'
}
