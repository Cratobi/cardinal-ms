import Router from 'express'
import _ from 'lodash'

// Model
import User from '../models/user'

// Middleware
import authenticate from '../middleware/authenticate'
import authenticateAdmin from '../middleware/authenticateAdmin'

// Express > Router
const app = Router()

// Varify Token
app.get('/', (req, res) => {
  res.send('Hello there :]')
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
  const body = _.pick(req.body, [
    'name',
    'username',
    'password',
    'company',
    'power',
  ])
  let user = new User(body)

  user
    .save()
    .then(user => {
      res.send(user)
    })
    .catch(() => {
      res.status(400).send()
    })
})

export default app
