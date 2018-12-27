import Router from 'express'
import _ from 'lodash'
import { Types } from 'mongoose'

const ObjectId = Types.ObjectId

// Models
import Draft from '../models/draft'

// Middleware
import authenticate from '../middleware/authenticate'

// Express > Router
const app = Router()

// Provide all Draft
app.get('/api/draft', authenticate, async (req, res) => {
  try {
    const draft = await Draft.fetchDrafts(req.userData.id)
    return res.send(draft)
  } catch (err) {
    return res.status(400).send(err)
  }
})

// Provide Draft
app.get('/api/draft/:id', authenticate, async (req, res) => {
  const id = req.params.id
  const userId = req.userData.id

  try {
    const draft = await Draft.fetchDraft(id)
    if (!draft.createdBy.equals(userId)) throw 'You are not authorized'

    return res.send(draft)
  } catch (err) {
    return res.status(400).send(err)
  }
})

// Add Draft
app.post('/api/draft', authenticate, async (req, res) => {
  const payload = _.pick(req.body, ['shipment_date', 'buyer', 'order_no', 'style_no', 'item', 'quantity'])
  payload.shipment_date = new Date(payload.shipment_date).getTime()
  payload.createdBy = ObjectId(req.userData.id)
  payload.company = req.userData.company

  try {
    let draft = new Draft(payload)
    draft = await draft.save()

    return res.send(draft)
  } catch (err) {
    return res.status(400).send(err)
  }
})

// Update Draft Tabledata
app.patch('/api/draft/:id', authenticate, async (req, res) => {
  const id = req.params.id
  const payload = _.pick(req.body, ['tabledata'])
  try {
    await Draft.findByIdAndUpdate(id, {
      $set: { tabledata: payload.tabledata }
    })

    return res.send()
  } catch (err) {
    return res.status(400).send(err)
  }
})

// Delete Draft
app.delete('/api/draft/:id', authenticate, async (req, res) => {
  const id = req.params.id
  try {
    await Draft.findByIdAndRemove(id)
    return res.send()
  } catch (err) {
    return res.status(400).send(err)
  }
})

export default app
