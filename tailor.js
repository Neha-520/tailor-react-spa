'use strict'

const http = require('http')
const Tailor = require('node-tailor')
const url = require('url')
const fs = require('fs')
// const tailor = new Tailor({
//   templatesPath: __dirname + '/templates'
// })

// /fragemnt -chat {
//   htt[.cre]
// }
http
  .createServer((req, res) => {
    if (req.url === '/') {
      let tailor = new Tailor({
        templatesPath: __dirname + '/packages/fragment-header/templates'
      })
      req.headers['x-request-uri'] = req.url
      req.url = '/index'

      tailor.requestHandler(req, res)
    }
    if (req.url === '/favicon.ico') {
      res.writeHead(200, { 'Content-Type': 'image/x-icon' })
      return res.end('')
    }
    if (req.url === '/contact') {
      let tailor = new Tailor({
        templatesPath: __dirname + '/packages/fragment-contacts/templates'
      })
      req.headers['x-request-uri'] = req.url
      req.url = '/index'

      tailor.requestHandler(req, res)
    }
  })
  .listen(8080, () => {
    global.console.log('Tailor server listening on port 8080')
  })
