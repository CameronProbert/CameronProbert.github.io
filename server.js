const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const pug = require('pug')

const server = express()

server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: true }))
server.set('view engine', 'pug')

//const blogTemplate = pug.renderFile('template-blog.pug')

/* server.get('/test', (req, res) => {
  res.send(pug.renderFile('./views/template-blog.pug'))
}) */

server.get('/test', (req, res) => {
  res.render('template-blog')
})

module.exports = server
