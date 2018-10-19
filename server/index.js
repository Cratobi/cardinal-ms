require('./db/mongoose')

const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')
var logger = require('morgan')

const apis = require('./routes/index')
const app = express()

// Middlewares
app.use(logger('dev'))
app.use(cors())
app.use(bodyParse.json())

app.use(apis)

// Server Config
const port = 3002

app.listen(port, () => {
  console.clear()
  console.log(
    `> Server started and running. PORT: ${port} \n----------------------------------------`,
  )
})
