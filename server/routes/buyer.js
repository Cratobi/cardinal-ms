const express = require("express")
const jwt = require("jsonwebtoken")
const _ = require("lodash")

// Models
const { Buyer } = require("../models/buyer")
const { User } = require("../models/user")

// Middleware
const { authenticate } = require("../middleware/authenticate")

// Express > Router
const app = express.Router()

// Provide all buyers
app.get("/buyer", authenticate, (req, res) => {
  Buyer.fetchBuyers()
    .then(data => res.send(data))
    .catch(() => {
      res.status(400).send()
    })
})

// Provide buyer
app.get("/buyer/:id", authenticate, (req, res) => {
  const id = req.params.id

  return Buyer.fetchBuyer(id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// Add Buyer
app.post("/buyer", authenticate, (req, res) => {
  const body = _.pick(req.body, ["name"])
  const token = req.header("x-auth")
  decoded = jwt.verify(token, "secret")

  Buyer.findOne({ name: body.name })
    .then(buyer => {
      User.findById(decoded._id).then(user => {
        if (buyer) {
          buyer.company.map(company => {
            company !== user.company
              ? Buyer.findByIdAndUpdate(buyer.id, {
                  $push: { company: user.company }
                })
                  .then(() => {
                    res.send()
                  })
                  .catch(() => {
                    res.status(400).send()
                  })
              : res.status(400).send()
          })
        } else {
          body.company = [user.company]
          const buyer = new Buyer(body)
          return buyer
            .save()
            .then(() => res.send("from me"))
            .catch(() => {
              res.status(400).send()
            })
        }
      })
    })
    .catch(() => {
      res.status(400).send()
    })
})

// Delete Buyer
app.delete("/buyer/:id", authenticate, (req, res) => {
  const id = req.params.id

  return Buyer.findByIdAndRemove(id)
    .then(() => {
      res.send()
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = app
