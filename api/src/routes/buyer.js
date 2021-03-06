import Router from 'express'
import _ from 'lodash'
import { Types } from 'mongoose'

const ObjectId = Types.ObjectId

// Models
import Company from '../models/company'

// Middleware
import authenticate from '../middleware/authenticate'
import authenticateAdmin from '../middleware/authenticateAdmin'

// Express > Router
const app = Router()

// Provide all buyers
app.get('/api/buyer', authenticate, async (req, res) => {
  try {
    const company = await Company.fetchBuyers(req.userData.company)
    return res.send(company.buyers)
  } catch (err) {
    return res.status(400).send(err)
  }
})
// Provide all buyers for admin
app.patch('/api/admin/buyer', authenticateAdmin, async (req, res) => {
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
app.delete('/api/admin/buyer', authenticateAdmin, async (req, res) => {
  const payload = _.pick(req.body, ['id', 'buyer_name'])

  try {
    await Company.findOneAndUpdate({ _id: payload.id }, { $pull: { buyers: payload.buyer_name } })
    const data = await Company.find()
    return res.send(data)
  } catch (err) {
    res.status(400).send(err)
  }
})

// Add Buyer
app.post('/api/admin/buyer', authenticateAdmin, async (req, res) => {
  const payload = _.pick(req.body, ['company', 'name'])

  try {
    const company = await Company.findOne({ name: payload.company })
    if (!company.buyers.every(buyer => buyer !== payload.name)) throw 'Buyer already exists for this Company'

    await Company.findOneAndUpdate({ name: payload.company }, { $push: { buyers: payload.name } })

    const data = await Company.find()
    return res.send(data)
  } catch (err) {
    return res.status(400).send(err)
  }
})

export default app
