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
app.post('/auth/signup', authenticateAdmin, async (req, res) => {
  const body = _.pick(req.body, [
    'name',
    'username',
    'password',
    'company',
    'power',
  ])
  try {
    let user = new User(body)
    await user.save()
    const data = await User.find()
    return res.send(data)
  } catch {
    const err_msg =
      err.response.data === '' ? 'Something went wrong :(' : err.response.data
    res.status(400).send(err_msg)
  }
})
// Provide all buyers for admin
app.get('/admin/user', authenticateAdmin, async (req, res) => {
  try {
    const users = await User.find()
    return res.send(users)
  } catch {
    return res.status(400).send(err_msg)
  }
})
app.patch('/admin/user', authenticateAdmin, async (req, res) => {
  const payload = _.pick(req.body, ['id', 'old_buyer_name', 'new_buyer_name'])

  try {
    await Company.findOneAndUpdate(
      { _id: ObjectId(payload.id), buyers: payload.old_buyer_name },
      { $set: { 'buyers.$': payload.new_buyer_name } },
    )
    try {
      const data = await Company.find()
      return res.send(data)
    } catch (err) {
      res.status(400).send()
    }
  } catch (err) {
    res.status(400).send()
  }
})
app.delete('/admin/user', authenticateAdmin, async (req, res) => {
  console.log(req.body)
  const payload = _.pick(req.body, ['id'])

  try {
    await User.findByIdAndRemove(payload.id)
    const data = await User.find()
    return res.send(data)
  } catch (err) {
    return res.status(400).send()
  }
})

export default app
