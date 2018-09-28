const express = require("express")
const jwt = require("jsonwebtoken")
const _ = require("lodash")

// Models
const { User } = require("../models/user")
const { Draft } = require("../models/draft")

// Middleware
const { authenticate } = require("../middleware/authenticate")

// Express > Router
const app = express.Router()

// Provide all Draft
app.get("/draft", authenticate, (req, res) => {
  const token = req.header("x-auth")
  decoded = jwt.verify(token, "secret")

  User.findById(decoded._id)
    .then(user => {
      Draft.fetchDrafts(user._id)
        .then(data => res.send(data))
        .catch(() => {
          res.status(400).send()
        })
    })
    .catch(() => {
      res.status(400).send()
    })
})

// Provide Draft
app.get("/draft/:id", authenticate, (req, res) => {
  const id = req.params.id
  const token = req.header("x-auth")
  decoded = jwt.verify(token, "secret")

  return Draft.fetchDraft(id)
    .then(draft => {
      User.findById(decoded._id)
        .then(user => {
          const createdBy = JSON.stringify(draft.createdBy)
          const userId = JSON.stringify(user._id)
          createdBy === userId ? res.send(draft) : res.status(402).send()
        })
        .catch(() => {
          res.status(400).send()
        })
    })
    .catch(() => {
      res.status(400).send()
    })
})

// Add Draft
app.post("/draft", authenticate, (req, res) => {
  const token = req.header("x-auth")
  decoded = jwt.verify(token, "secret")

  User.findById(decoded._id)
    .then(user => {
      const payload = _.pick(req.body.payload, [
        "buyer",
        "order_no",
        "style_no",
        "item",
        "quantity",
        "tabledata"
      ])
      payload.createdBy = user._id
      payload.company = user.company

      draft = new Draft(payload)

      draft
        .save()
        .then(draft => res.send(draft))
        .catch(() => {
          res.status(400).send()
        })
    })
    .catch(() => {
      res.status(400).send()
    })
})

// Update Draft Tabledata
app.patch("/draft/:id", authenticate, (req, res) => {
  const id = req.params.id
  const payload = req.body.payload
  return Draft.findByIdAndUpdate(id, {
    $set: { tabledata: payload }
  })
    .then(() => {
      res.send()
    })
    .catch(() => {
      res.status(400).send()
    })
})

// Delete Draft
app.delete("/draft/:id", authenticate, (req, res) => {
  const id = req.params.id

  return Draft.findByIdAndRemove(id)
    .then(() => {
      res.send()
    })
    .catch(() => {
      res.status(400).send()
    })
})

module.exports = app
