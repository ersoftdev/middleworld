const { asFunction } = require('awilix')

const mongoDB = container => {
  const HeroRepositoryMongo = require('../repositories/HeroRepository')
  const WorldRepositoryMongo = require('../repositories/WorldRepository')
  const ArtifactRepositoryMongo = require('../repositories/ArtifactRepository')
  const ReligionRepositoryMongo = require('../repositories/ReligionRepository')

  const ArtifactHeroRepositoryMongo = require('../repositories/ArtifactHeroRepository')
  const HeroInfirmityRepositoryMongo = require('../repositories/HeroInfirmityRepository')
  const HeroStatRepositoryMongo = require('../repositories/HeroStatRepository')
  const WorldSurroundingRepositoryMongo = require('../repositories/WorldSurroundingRepository')

  // Load Database and Schemas
  container.loadModules([
    'infrastructure/database/**/*.js'
  ])

  container.register({
    HeroRepository: asFunction(HeroRepositoryMongo),
    WorldRepository: asFunction(WorldRepositoryMongo),
    ArtifactRepository: asFunction(ArtifactRepositoryMongo),
    ReligionRepository: asFunction(ReligionRepositoryMongo),
    ReligionRepository: asFunction(ArtifactHeroRepositoryMongo),
    ReligionRepository: asFunction(HeroInfirmityRepositoryMongo),
    ReligionRepository: asFunction(HeroStatRepositoryMongo),
    ReligionRepository: asFunction(WorldSurroundingRepositoryMongo)
  })
}

const resolveDB = container => {
  // for future conditions
  if (process.env.DB_DRIVER === 'mongo') mongoDB(container)
}

module.exports = resolveDB
