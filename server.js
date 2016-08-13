var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var fs = require('fs')

// fake auth.
var user = 'banana'
var password = 'abc123'

app.use(bodyParser.urlencoded({extended: true}))

app.post('/', function (req, res) {
  if (req.body.name === user && req.body.password === password) {
    res.status(200).send('logged in')
  } else {
    res.status(401).send('forbidden')
  }
})

app.get('/', function (req, res) {
  res.send(fs.readFileSync('./assets/login.html', 'utf-8'))
})

app.get('/js.js', function (req, res) {
  res.setHeader('Content-Type', 'application/javascript')
  res.send(fs.readFileSync('./dist/index.js', 'utf-8'))
})

app.listen(process.env.PORT || 3000)
