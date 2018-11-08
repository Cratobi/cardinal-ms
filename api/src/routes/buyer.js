import Router from 'express'
import _ from 'lodash'

// Models
import Company from '../models/company'

// Middleware
import authenticate from '../middleware/authenticate'
import authenticateAdmin from '../middleware/authenticateAdmin'

// Express > Router
const app = Router()

// Provide all buyers
app.get('/buyer', authenticate, (req, res) => {
  return Company.fetchBuyers(req.userData.company)
    .then(data => res.send(data.buyers))
    .catch(() => {
      res.status(250).send()
    })
})

// Add Buyer
app.post('/buyer', authenticateAdmin, (req, res) => {
  const payload = _.pick(req.body, ['company', 'name'])
  Company.findOne({ name: payload.company })
    .then(company => {
      if (company.buyers.every(buyer => buyer !== payload.name)) {
        Company.findOneAndUpdate(
          { name: payload.company },
          {
            $push: { buyers: payload.name },
          },
        )
          .then(() => {
            res.send()
          })
          .catch(() => {
            res.status(250).send()
          })
      } else {
        res.status(250).send()
      }
    })
    .catch(() => {
      res.status(250).send()
    })
})

// Delete Buyer
app.delete('/buyer/:id', authenticateAdmin, (req, res) => {
  const id = req.params.id

  return Company.findByIdAndRemove(id)
    .then(() => {
      res.send()
    })
    .catch(() => {
      res.status(250).send()
    })
})

export default app
