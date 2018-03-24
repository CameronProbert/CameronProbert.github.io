const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const server = express()

server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: true }))

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

module.exports = server
