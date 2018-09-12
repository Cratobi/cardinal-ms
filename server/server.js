const express = require("express")
var cors = require("cors")
const bodyParse = require("body-parser")
const _ = require("lodash")

const { mongoose } = require("./db")
const { Account } = require("./models/account")
const { Order } = require("./models/order")
const { Draft } = require("./models/draft")
const { auth } = require("./middleware/auth")

// ------ INIT ------ //

const app = express()
app.use(cors())
app.use(bodyParse.json())

// ------ ORDER ------ //

// Provide all Orders
app.get("/order", auth, (req, res) => {
  Order.fetchOrders(req.query.page)
    .then(data => res.send(data))
    .catch(() => {
      res.status(400).send()
    })
})

// Provide Order
app.get("/order/:id", auth, (req, res) => {
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
app.post("/order/:id", auth, (req, res) => {
  const id = req.params.id

  Draft.findById(id)
    .then(order => {
      let data = _.pick(order, [
        "createdAt",
        "createdBy",
        "tabledata",
        "buyer",
        "order_no",
        "style_no"
      ])
      order = new Order(data)

      order
        .save()
        .then(data => {
          Draft.findByIdAndRemove(id)
            .then(() => {
              res.send(data.id)
            })
            .catch(err => {
              res.status(400).send(err)
            })
        })
        .catch(err => {
          res.status(400).send(err)
        })
    })
    .catch(err => {
      console.log(err)
      res.status(400).send(err)
    })
})

// ------ DRAFT ------ //

// Provide all Draft
app.get("/draft", auth, (req, res) => {
  Draft.fetchDrafts()
    .then(data => res.send(data))
    .catch(() => {
      res.status(400).send()
    })
})

// Provide Draft
app.get("/draft/:id", auth, (req, res) => {
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
app.post("/draft", auth, (req, res) => {
  Account.findOne({ username: "cratobi" })
    .then(data => {
      var body = _.pick(req.body.payload, [
        "id",
        "buyer",
        "order_no",
        "style_no"
      ])
      body.createdBy = data.username
      var draft = new Draft(body)

      draft
        .save()
        .then(data => res.send(data))
        .catch(err => {
          res.status(400).send(err)
        })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// Update Draft Tabledata
app.patch("/draft/:id", auth, (req, res) => {
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
app.delete("/draft/:id", auth, (req, res) => {
  const id = req.params.id

  return Draft.findByIdAndRemove(id)
    .then(() => {
      res.send()
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// ------ AUTHENTICATION ------ //

// Varify Token
app.get("/auth", auth, (req, res) => {
  res.send()
})

// Sign In
app.post("/auth/signin", (req, res) => {
  var body = _.pick(req.body, ["username", "password"])
  if (body.username && body.password) {
    Account.findByCredentials(body.username, body.password)
      .then(account =>
        account.generateAuthToken().then(token => {
          res.header("token", token).send({ token })
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
app.delete("/auth/signout", auth, (req, res) => {
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
    .catch(err => {
      res.status(400).send(err)
    })
})

// Server Config

app.listen(3001, () => {
  console.log("Started on port 3001")
})

module.exports = { app }
