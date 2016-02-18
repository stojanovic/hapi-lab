'use strict';

const Hapi = require('hapi')


const server = new Hapi.Server()

server.connection({port: process.env.PORT || 3000})

server.start(() => console.log(`Server running at ${server.info.uri}`))
