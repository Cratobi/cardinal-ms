const express = require("express")
const _ = require("lodash")

// Model
const { User } = require("../models/user")

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
  var body = _.pick(req.body, ["username", "password", "access", "system"])
  if (body.username && body.password) {
    User.findByCredentials(body.username, body.password)
      .then(user =>
        user.generateAuthToken(body.access, body.system).then(token => {
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
  req.user.removeToken(req.token).then(
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
  var body = _.pick(req.body, [
    "name",
    "username",
    "password",
    "admin",
    "company"
  ])
  var user = new User(body)

  user
    .save()
    .then(() => user.generateAuthToken("web"))
    .then(token => {
      res.header("x-auth", token).send()
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = app
