const express = require("express")
const jwt = require("jsonwebtoken")
const _ = require("lodash")
const ObjectId = require("mongoose").Types.ObjectId

// Models
const { Draft } = require("../models/draft")

// Middleware
const { authenticate } = require("../middleware/authenticate")

// Express > Router
const app = express.Router()

// Provide all Draft
app.get("/draft", authenticate, (req, res) => {
  Draft.fetchDrafts(req.userData.id)
    .then(data => res.send(data))
    .catch(() => {
      res.status(400).send()
    })
})

// Provide Draft
app.get("/draft/:id", authenticate, (req, res) => {
  const id = req.params.id
  const userId = req.userData.id

  return Draft.fetchDraft(id)
    .then(draft => {
      const createdBy = draft.createdBy
      createdBy.equals(userId) ? res.send(draft) : res.status(402).send()
    })
    .catch(() => {
      res.status(400).send()
    })
})

// Add Draft
app.post("/draft", authenticate, (req, res) => {
  const payload = _.pick(req.body, [
    "buyer",
    "order_no",
    "style_no",
    "item",
    "quantity",
    "tabledata"
  ])

  payload.createdBy = ObjectId(req.userData.id)
  payload.company = req.userData.company

  draft = new Draft(payload)

  draft
    .save()
    .then(draft => res.send(draft))
    .catch(() => {
      res.status(400).send()
    })
})

// Update Draft Tabledata
app.patch("/draft/:id", authenticate, (req, res) => {
  const id = req.params.id
  const payload = _.pick(req.body, ["tabledata"])

  return Draft.findByIdAndUpdate(id, {
    $set: { tabledata: payload.tabledata }
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
