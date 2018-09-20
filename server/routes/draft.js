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
  Draft.fetchDrafts()
    .then(data => res.send(data))
    .catch(() => {
      res.status(400).send()
    })
})

// Provide Draft
app.get("/draft/:id", authenticate, (req, res) => {
  const id = req.params.id

  return Draft.fetchDraft(id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// Add Draft
app.post("/draft", authenticate, (req, res) => {
  const token = req.header("x-auth")
  decoded = jwt.verify(token, "secret")

  User.findById(decoded._id)
    .then(user => {
      var body = _.pick(req.body.payload, [
        "id",
        "buyer",
        "order_no",
        "style_no",
        "buyer"
      ])
      body.createdBy = { username: user.username, company: user.company }
      var draft = new Draft(body)

      draft
        .save()
        .then(draft => res.send(draft))
        .catch(err => {
          res.status(400).send(err)
        })
    })
    .catch(err => {
      res.status(400).send(err)
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
    .catch(err => {
      res.status(400).send(err)
    })
})

// Delete Draft
app.delete("/draft/:id", authenticate, (req, res) => {
  const id = req.params.id

  return Draft.findByIdAndRemove(id)
    .then(() => {
      res.send()
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = app
