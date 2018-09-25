require("./db/mongoose") // Database

const express = require("express") // Express Framework
const subdomain = require("express-subdomain")
const path = require("path")
const cors = require("cors") // Top Enable Cross-Origin
const bodyParse = require("body-parser") // To parse JSON
const _ = require("lodash") // Utility Library
var morgan = require("morgan")

const apis = require("./routes/index") // Api routes

const app = express() // Express Init

// Middlewares
// app.use(morgan("dev")) //Logger
app.use(cors()) // Solve Cross-Origin Restriction
app.use(bodyParse.json()) //Parse everything to JSON

// Api subdomain
app.use(subdomain("api", apis))

// var static = "./public/static"
var public = path.resolve(__dirname, "./public")

app.use(express.static(__dirname + "/public"))

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: public })
})

// Server Config
const port = process.env.PORT || 80
// const port = 3001

app.listen(port, () => {
  console.clear()
  console.log(
    `> Server has started on the port: ${port} \n----------------------------------------`
  )
})
