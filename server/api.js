const express = require("express") // Express Framework

// Routes
const authentication = require("./routes/authentication")
const buyer = require("./routes/buyer")
const order = require("./routes/order")
const draft = require("./routes/draft")

const app = express() // Express Init

app.use(authentication, buyer, draft, order)
