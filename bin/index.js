'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({ port: 3000 })

server.route({
  method: 'GET',
  path: '/',
  handler(req, reply) {
    reply('hello')
  }
})

server.route({
  method: 'POST',
  path: '/',
  handler(req, reply){
    reply('hello post')
  }
})

server.start(() => console.log(`Server running at ${server.info.uri}`))
module.exports = server
