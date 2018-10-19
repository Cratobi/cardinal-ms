const express = require('express')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

// Models
const { Order } = require('../models/order')
const { Draft } = require('../models/draft')

// Middleware
const { authenticate } = require('../middleware/authenticate')

// Express > Router
const app = express.Router()

// Provide all Orders
app.get('/order', authenticate, (req, res) => {
  if (req.query.search) {
    const query = req.query.search
    let feild = 'order_no'

    if (query.charAt(0) === '@') {
      feild = 'style_no'
    }
    Order.searchOrders(query, feild)
      .then(data => res.send(data))
      .catch(() => {
        res.status(400).send()
      })
  } else {
    Order.fetchOrders(req.query.page, req.query.recent)
      .then(data => res.send(data))
      .catch(() => {
        res.status(400).send()
      })
  }
})

// Search Order
app.get('/order/search', authenticate, (req, res) => {
  let query = req.query.q
  if (query.charAt(0) !== '@') {
    Order.find({ order_no: { $regex: query, $options: 'i' } })
      .then(data => {
        data = _.map(
          data,
          _.partialRight(_.pick, ['id', 'order_no', 'style_no']),
        )
        res.send(data)
      })
      .catch(() => {
        res.status(400).send()
      })
  } else {
    query = query.substr(1)
    Order.find({ style_no: { $regex: query, $options: 'i' } })
      .then(data => {
        data = _.map(
          data,
          _.partialRight(_.pick, ['id', 'order_no', 'style_no']),
        )
        res.send(data)
      })
      .catch(() => {
        res.status(400).send()
      })
  }
})

// Provide number of orders
app.get('/order/count', authenticate, (req, res) => {
  Order.estimatedDocumentCount()
    .then(count => res.send({ count }))
    .catch(() => {
      res.status(400).send()
    })
})

// Provide Order
app.get('/order/:id', authenticate, (req, res) => {
  const id = req.params.id

  return Order.fetchOrder(id)
    .then(data => {
      res.send(data)
    })
    .catch(() => {
      res.status(400).send()
    })
})

// Publish Order
app.post('/order/:id', authenticate, (req, res) => {
  const id = req.params.id

  const body = _.pick(req.body, ['tabledata'])

  Draft.findById(id)
    .then(draft => {
      draft.tabledata = body.tabledata
      draft = _.pick(draft, [
        'buyer',
        'order_no',
        'style_no',
        'shipment_date',
        'item',
        'quantity',
        'createdBy',
        'company',
        'tabledata',
      ])

      const order = new Order(draft)
      return order
        .save()
        .then(order => {
          Draft.findByIdAndRemove(id).then(() => {
            res.send(order.id)
          })
        })
        .catch(err => {
          res.status(400).send(err)
        })
    })
    .catch(() => {
      res.status(404).send()
    })
})

module.exports = app
