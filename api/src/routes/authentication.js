import Router from 'express'
import _ from 'lodash'
import { Types } from 'mongoose'

const ObjectId = Types.ObjectId

// Model
import User from '../models/user'
import Company from '../models/company'

// Middleware
import authenticate from '../middleware/authenticate'
import authenticateAdmin from '../middleware/authenticateAdmin'

// Express > Router
const app = Router()

// Varify Token
app.get('/api', (req, res) => res.send('Server is working :}'))

app.get('/api/auth', authenticate, async (req, res) => {
  res.send(req.userData)
})
// Sign In
app.post('/api/auth/signin', async (req, res) => {
  var body = _.pick(req.body, ['username', 'password', 'access', 'system'])
  try {
    if (!body.username && !body.password) throw 'Username and Password are required'

    const user = await User.findByCredentials(body.username, body.password)
    const token = await user.generateAuthToken(body.access, body.system)
    return res.header('x-auth', token).send({ token })
  } catch (err) {
    return res.status(400).send(err)
  }
})
// Sign Out
app.delete('/api/auth/signout', authenticate, async (req, res) => {
  try {
    await User.removeToken(req.token)
    return res.send()
  } catch (err) {
    return res.status(400).send(err)
  }
})

// Sign Up
app.post('/api/auth/signup', authenticateAdmin, async (req, res) => {
  const body = _.pick(req.body, ['name', 'username', 'password', 'company', 'power'])
  try {
    let user = new User(body)
    await user.save()
    const data = await User.findOne({ username: body.username })
    return res.send(data)
  } catch (err) {
    const err_msg = err.response.data === '' ? 'Something went wrong :(' : err.response.data
    res.status(400).send(err_msg)
  }
})
// Provide all buyers for admin
app.get('/api/admin/user', authenticateAdmin, async (req, res) => {
  try {
    const users = await User.find()
    return res.send(users)
  } catch (err) {
    const err_msg = err.response.data === '' ? 'Something went wrong :(' : err.response.data
    return res.status(400).send(err_msg)
  }
})
app.patch('/api/admin/user', authenticateAdmin, async (req, res) => {
  const payload = _.pick(req.body, ['id', 'old_buyer_name', 'new_buyer_name'])

  try {
    await Company.findOneAndUpdate(
      { _id: ObjectId(payload.id), buyers: payload.old_buyer_name },
      { $set: { 'buyers.$': payload.new_buyer_name } }
    )
    const data = await Company.find()
    return res.send(data)
  } catch (err) {
    res.status(400).send(err)
  }
})
app.delete('/admin/user', authenticateAdmin, async (req, res) => {
  const payload = _.pick(req.body, ['id'])

  try {
    await User.findByIdAndRemove(payload.id)
    const data = await User.find()
    return res.send(data)
  } catch (err) {
    return res.status(400).send(err)
  }
})

export default app
