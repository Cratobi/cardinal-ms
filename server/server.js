const express = require("express")
const bodyParse = require("body-parser")
const _ = require("lodash")

const { mongoose } = require("./db")
const { Account } = require("./models/account")
const { Order } = require("./models/order")
const { authentication } = require("./middleware/authentication")

// ------ INIT ------ //

const app = express()
app.use(bodyParse.json())

// ------ ORDER ------ //

app.get("/order", authentication, (req, res) => {
  Order.fetchOrder()
    .then(order_list => res.send({ order_list }))
    .catch(() => {
      res.status(400).send()
    })
})

// ------ AUTHENTICATION ------ //

// Varify Token
app.get("/auth", authentication, (req, res) => {
  res.send()
})

// Sign In
app.post("/auth/signin", (req, res) => {
  var body = _.pick(req.body, ["username", "password"])

  Account.findByCredentials(body.username, body.password)
    .then(account =>
      account.generateAuthToken().then(token => {
        res.header("token", token).send({ token })
      })
    )
    .catch(() => {
      res.status(400).send()
    })
})

// Sign Out
app.delete("/auth/signout", authentication, (req, res) => {
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
    .then(() => account.generateAuthToken())
    .then(token => {
      res.header("token", token).send(account)
    })
    .catch(e => {
      res.status(400).send(e)
    })
})

// Server Config

app.listen(3001, () => {
  console.log("Started on port 3001")
})

module.exports = { app }
