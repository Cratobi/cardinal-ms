import Router from 'express'
import _ from 'lodash'
import mongoose from 'mongoose'
// const ObjectId = mongoose.Types.ObjectId

const ObjectId = require('mongoose').Types.ObjectId

// Models
import Draft from '../models/draft'

// Middleware
import authenticate from '../middleware/authenticate'

// Express > Router
const app = Router()

// Provide all Draft
app.get('/draft', authenticate, (req, res) => {
  Draft.fetchDrafts(req.userData.id)
    .then(data => res.send(data))
    .catch(err => {         const err_msg =           err.response.data === ''             ? 'Something went wrong :('             : err.response.data
      res.status(400).send()
    })
})

// Provide Draft
app.get('/draft/:id', authenticate, (req, res) => {
  const id = req.params.id
  const userId = req.userData.id

  return Draft.fetchDraft(id)
    .then(draft => {
      const createdBy = draft.createdBy
      createdBy.equals(userId) ? res.send(draft) : res.status(402).send()
    })
    .catch(err => {         const err_msg =           err.response.data === ''             ? 'Something went wrong :('             : err.response.data
      res.status(400).send()
    })
})

// Add Draft
app.post('/draft', authenticate, (req, res) => {
  const payload = _.pick(req.body, [
    'shipment_date',
    'buyer',
    'order_no',
    'style_no',
    'item',
    'quantity',
  ])
  payload.shipment_date = new Date(payload.shipment_date).getTime()
  payload.createdBy = ObjectId(req.userData.id)
  payload.company = req.userData.company

  let draft = new Draft(payload)

  draft
    .save()
    .then(draft => res.send(draft))
    .catch(() => res.status(400).send())
})

// Update Draft Tabledata
app.patch('/draft/:id', authenticate, (req, res) => {
  const id = req.params.id
  const payload = _.pick(req.body, ['tabledata'])

  return Draft.findByIdAndUpdate(id, {
    $set: { tabledata: payload.tabledata },
  })
    .then(() => {
      res.send()
    })
    .catch(err => {         const err_msg =           err.response.data === ''             ? 'Something went wrong :('             : err.response.data
      res.status(400).send()
    })
})

// Delete Draft
app.delete('/draft/:id', authenticate, (req, res) => {
  const id = req.params.id

  return Draft.findByIdAndRemove(id)
    .then(() => {
      res.send()
    })
    .catch(err => {         const err_msg =           err.response.data === ''             ? 'Something went wrong :('             : err.response.data
      res.status(400).send()
    })
})

export default app
