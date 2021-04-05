const each = require('lodash/fp/each')
const fastify = require('fastify')
const fastifyStatic = require('fastify-static')
const path = require('path')

module.exports = ({ routes }) => {
  const server = fastify()

  each(path => {
    server.route(path)
  })(routes)

  server.register(fastifyStatic, {
    root: path.join(__dirname, '../..'),
    redirect: true
  })
  
  server.get('/docs/', (req, res) => { res.sendFile('docs/') })

  return server
}
