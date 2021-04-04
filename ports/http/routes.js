module.exports = ({ HeroController, ArtifactController, ReligionController, WorldController }) => [
  /*  hero  */
  {
    method: 'GET',
    path: '/api/heroes',
    handler: HeroController.listHeroes
  },
  {
    method: 'POST',
    path: '/api/hero',
    handler: HeroController.createHero
  },
  {
    method: 'GET',
    path: '/api/hero/:id',
    handler: HeroController.findHero
  },
  {
    method: 'DELETE',
    path: '/api/hero/:id',
    handler: HeroController.deleteHero
  },
  {
    method: 'PATCH',
    path: '/api/hero/:id',
    handler: HeroController.updateHero
  },
  {
    method: 'PUT',
    path: '/api/hero/:id',
    handler: HeroController.updateHero
  },
  /* end hero */

  /* artifact */
  {
    method: 'GET',
    path: '/api/artifacts',
    handler: ArtifactController.listArtifacts
  },
  {
    method: 'POST',
    path: '/api/artifact',
    handler: ArtifactController.createArtifact
  },
  {
    method: 'GET',
    path: '/api/artifact/:id',
    handler: ArtifactController.findArtifact
  },
  {
    method: 'DELETE',
    path: '/api/artifact/:id',
    handler: ArtifactController.deleteArtifact
  },
  {
    method: 'PATCH',
    path: '/api/artifact/:id',
    handler: ArtifactController.updateArtifact
  },
  {
    method: 'PUT',
    path: '/api/artifact/:id',
    handler: ArtifactController.updateArtifact
  },
  /* end artifact */

  /* religion */
  {
    method: 'GET',
    path: '/api/religions',
    handler: ReligionController.listReligions
  },
  {
    method: 'POST',
    path: '/api/religion',
    handler: ReligionController.createReligion
  },
  {
    method: 'GET',
    path: '/api/religion/:id',
    handler: ReligionController.findReligion
  },
  {
    method: 'DELETE',
    path: '/api/religion/:id',
    handler: ReligionController.deleteReligion
  },
  {
    method: 'PATCH',
    path: '/api/religion/:id',
    handler: ReligionController.updateReligion
  },
  {
    method: 'PUT',
    path: '/api/religion/:id',
    handler: ReligionController.updateReligion
  },
  /* end religion */

  /* world  */
  {
    method: 'GET',
    path: '/api/worlds',
    handler: WorldController.listWorlds
  },
  {
    method: 'POST',
    path: '/api/world',
    handler: WorldController.createWorld
  },
  {
    method: 'GET',
    path: '/api/world/:id',
    handler: WorldController.findWorld
  },
  {
    method: 'DELETE',
    path: '/api/world/:id',
    handler: WorldController.deleteWorld
  },
  {
    method: 'PATCH',
    path: '/api/world/:id',
    handler: WorldController.updateWorld
  },
  {
    method: 'PUT',
    path: '/api/world/:id',
    handler: WorldController.updateWorld
  }
  /* end world */
]
