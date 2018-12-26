import './db/mongoose'
import dotenv from 'dotenv'
import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'

import authentication from './routes/authentication'
import company from './routes/company'
import buyer from './routes/buyer'
import order from './routes/order'
import draft from './routes/draft'

dotenv.load();
const app = express()

// Middlewares
app.use(bodyparser.json())
app.use(cors())

app.use(authentication, company, buyer, draft, order)

// Server Config
const port = 3001

app.listen(port, () => {
  console.clear()
  console.log(
    `> Server started and running on port: ${port} \n----------------------------------------`,
  )
})
