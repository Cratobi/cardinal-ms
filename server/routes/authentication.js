const express = require("express")
const _ = require("lodash")

// Model
const { Account } = require("../models/account")

// Middleware
const { authenticate } = require("../middleware/authenticate")

// Express > Router
const app = express.Router()

// Varify Token
app.get("/auth", authenticate, (req, res) => {
  res.send(req.user)
})
// Sign In
app.post("/auth/signin", (req, res) => {
  var body = _.pick(req.body, ["username", "password"])
  if (body.username && body.password) {
    Account.findByCredentials(body.username, body.password)
      .then(account =>
        account.generateAuthToken("web").then(token => {
          res.header("x-auth", token).send({ token })
        })
      )
      .catch(err => {
        res.status(400).send()
      })
  } else {
    return res.status(400).send()
  }
})
// Sign Out
app.delete("/auth/signout", authenticate, (req, res) => {
  req.account.removeToken(req.token).then(
    () => {
      res.status(200).send()
    },
    () => {
      res.status(400).send()
    }
  )
})

// Sign Up
app.post("/auth/signup", (req, res) => {
  var body = _.pick(req.body, ["name", "username", "password"])
  var account = new Account(body)

  account
    .save()
    .then(() => account.generateAuthToken("web"))
    .then(token => {
      res.header("x-auth", token).send(account)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = app
