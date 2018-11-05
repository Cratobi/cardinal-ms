const express = require('express')
const _ = require('lodash')

// Model
const { User } = require('../models/user')

// Middleware
const { authenticate } = require('../middleware/authenticate')
const { authenticateAdmin } = require('../middleware/authenticateAdmin')

// Express > Router
const app = express.Router()

// Varify Token
app.get('/', (req, res) => {
  res.send('Working')
})
app.get('/auth', authenticate, (req, res) => {
  res.send(req.userData)
})
// Sign In
app.post('/auth/signin', (req, res) => {
  var body = _.pick(req.body, ['username', 'password', 'access', 'system'])
  if (body.username && body.password) {
    User.findByCredentials(body.username, body.password)
      .then(user =>
        user.generateAuthToken(body.access, body.system).then(token => {
          res.header('x-auth', token).send({ token })
        }),
      )
      .catch(() => res.status(400).send())
  } else {
    return res.status(400).send()
  }
})
// Sign Out
app.delete('/auth/signout', authenticate, (req, res) => {
  User.removeToken(req.token)
    .then(() => res.send())
    .catch(() => res.status(400).send())
})

// Sign Up
app.post('/auth/signup', authenticateAdmin, (req, res) => {
  console.log(req.body)
  var body = _.pick(req.body, [
    'name',
    'username',
    'password',
    'company',
    'power',
  ])
  var user = new User(body)

  user
    .save()
    .then(user => {
      res.send(user)
    })
    .catch(() => {
      res.status(400).send()
    })
})

module.exports = app
