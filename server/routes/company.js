const express = require('express')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

// Models
const { Company } = require('../models/company')

// Middleware
const { authenticateAdmin } = require('../middleware/authenticateAdmin')

// Express > Router
const app = express.Router()

// Provide all companys
app.get('/company', authenticateAdmin, (req, res) => {
  return Company.fetchCompanies()
    .then(data => {
      const companies = []
      data.map(data => companies.push(data.name))
      return res.send(companies)
    })
    .catch(() => {
      res.status(400).send()
    })
})

// Provide company
app.get('/company/:id', authenticateAdmin, (req, res) => {
  const id = req.params.id

  return Company.fetchCompany(id)
    .then(data => {
      res.send(data)
    })
    .catch(() => {
      res.status(400).send()
    })
})

// Add Company
app.post('/company', authenticateAdmin, (req, res) => {
  const payload = _.pick(req.body, ['name'])
  Company.findOne({ name: payload.name })
    .then(company => {
      if (!company) {
        const company = new Company(payload)

        company
          .save()
          .then(() => res.send())
          .catch(() => {
            res.status(400).send()
          })
      } else {
        res.status(400).send()
      }
    })
    .catch(() => {
      res.status(400).send()
    })
})

// Delete Company
app.delete('/company/:id', authenticateAdmin, (req, res) => {
  const id = req.params.id

  return Company.findByIdAndRemove(id)
    .then(() => {
      res.send()
    })
    .catch(() => {
      res.status(400).send()
    })
})

module.exports = app
