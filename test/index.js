'use strict'

const Lab = require('lab')
const lab = exports.lab = Lab.script()
const server = require('../bin')
const Code = require('code')

lab.experiment('Routes', () => {
  lab.test('Hello GET', done => {
    const options = {
      method: 'GET',
      url: '/'
    }
    server.inject(options, response => {
      let result = response.result
      Code.expect(result).to.equal('hello')
      done()
    })
  })

  lab.test('Hello POST', done => {
    const options = {
      method: 'POST',
      url: '/'
    }
    server.inject(options, response => {
      const result = response.result
      Code.expect(result).to.equal('hello post')
      done()
    })
  })
})
