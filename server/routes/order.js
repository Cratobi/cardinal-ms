const express = require("express")
const _ = require("lodash")

// Models
const { Order } = require("../models/order")
const { Draft } = require("../models/draft")

// Middleware
const { authenticate } = require("../middleware/authenticate")

// Express > Router
const app = express.Router()

// Provide all Orders
app.get("/api/order", authenticate, (req, res) => {
  if (req.query.search) {
  } else {
    Order.fetchOrders(req.query.page)
      .then(data => res.send(data))
      .catch(() => {
        res.status(400).send()
      })
  }
})
// Search Order
app.get("/api/order/search", authenticate, (req, res) => {
  let query = req.query.q
  if (query.charAt(0) !== "@") {
    Order.find({ order_no: { $regex: query, $options: "i" } })
      .then(data => {
        data = _.map(
          data,
          _.partialRight(_.pick, ["id", "order_no", "style_no"])
        )
        res.send(data)
      })
      .catch(() => {
        res.status(400).send()
      })
  } else {
    query = query.substr(1)
    Order.find({ style_no: { $regex: query, $options: "i" } })
      .then(data => {
        data = _.map(
          data,
          _.partialRight(_.pick, ["id", "order_no", "style_no"])
        )
        res.send(data)
      })
      .catch(() => {
        res.status(400).send()
      })
  }
})

app.get("/api/order/count", authenticate, (req, res) => {
  Order.estimatedDocumentCount()
    .then(count => res.send({ count }))
    .catch(() => {
      res.status(400).send()
    })
})

// Provide Order
app.get("/api/order/:id", authenticate, (req, res) => {
  const id = req.params.id

  return Order.fetchOrder(id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// Publish Order
app.post("/api/order/:id", authenticate, (req, res) => {
  const id = req.params.id

  Draft.findById(id)
    .then(draft => {
      console.log(
        "\n ---------------------- \n",
        draft.tabledata,
        "\n ---------------------- \n"
      )
      draft = _.pick(draft, [
        "buyer",
        "order_no",
        "style_no",
        "item",
        "quantity",
        "createdBy",
        "tabledata"
      ])
      order = new Order(draft)

      order
        .save()
        .then(order => {
          Draft.findByIdAndRemove(id)
            .then(() => {
              res.send(order.id)
            })
            .catch(() => {
              res.status(400).send()
            })
        })
        .catch(() => {
          res.status(400).send()
        })
    })
    .catch(() => {
      res.status(400).send()
    })
})

module.exports = app
