const express = require("express") // Express Framework

// Routes
const authentication = require("./authentication")
const buyer = require("./buyer")
const order = require("./order")
const draft = require("./draft")

const app = express.Router() // Express Init

app.use(authentication, buyer, draft, order)

module.exports = app
