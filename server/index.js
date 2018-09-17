require("./db/mongoose") // Database

const express = require("express") // Express Framework
var cors = require("cors") // Top Enable Cross-Origin
const bodyParse = require("body-parser") // To parse JSON
const _ = require("lodash") // Utility Library

// Routes
const authentication = require("./routes/authentication")
const buyer = require("./routes/buyer")
const order = require("./routes/order")
const draft = require("./routes/draft")

const app = express() // Express Init

// Middlewares
app.use(cors(), bodyParse.json())

// Routes
app.use(authentication, buyer, draft, order)

// Server Config
app.listen(3001, () => {
  console.log(
    "\n> Server has started on the port: 3001 \n----------------------------------------"
  )
})
