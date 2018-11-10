import Router from 'express'
import _ from 'lodash'

// Models
import Company from '../models/company'

// Middleware
import authenticateAdmin from '../middleware/authenticateAdmin'

// Express > Router
const app = Router()

// Provide company
app.get('/company/:id', authenticateAdmin, (req, res) => {
  const id = req.params.id

  return Company.fetchCompany(id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      const err_msg =
        err.response.data === '' ? 'Something went wrong :(' : err.response.data
      res.status(400).send()
    })
})
// Provide all compnaies foradmin
app.get('/admin/company', authenticateAdmin, async (req, res) => {
  try {
    let data = await Company.find()
    data = _.map(data, _.partialRight(_.pick, ['_id', 'name', 'buyers']))

    return res.send(data)
  } catch (err) {
    res.status(400).send()
  }
})
app.patch('/admin/company', authenticateAdmin, async (req, res) => {
  const payload = _.pick(req.body, [
    'id',
    'old_company_name',
    'new_company_name',
  ])

  try {
    await Company.findOneAndUpdate(
      { _id: ObjectId(payload.id) },
      { $set: { name: payload.new_buyer_name } },
    )
    try {
      const data = await Company.find()
      return res.send(data)
    } catch (err) {
      res.status(400).send()
    }
  } catch (err) {
    res.status(400).send()
  }
})
app.delete('/admin/company', authenticateAdmin, async (req, res) => {
  const payload = _.pick(req.body, ['id'])

  try {
    await Company.findByIdAndRemove(payload.id)
    try {
      const data = await Company.find()
      return res.send(data)
    } catch (err) {
      res.status(400).send()
    }
  } catch (err) {
    return res.status(400).send()
  }
})

// Add Company
app.post('/admin/company', authenticateAdmin, async (req, res) => {
  const payload = _.pick(req.body, ['name'])

  try {
    let company = await Company.findOne({ name: payload.name })
    if (company) throw 'Company already exists'

    company = new Company(payload)

    await company.save()
    const companies = await Company.find()
    return res.send(companies)
  } catch (err) {
    return res.status(400).send(err)
  }
})

// Delete Company
app.delete('/company/:id', authenticateAdmin, async (req, res) => {
  const id = req.params.id

  try {
    await Company.findByIdAndRemove(id)
    const data = await Company.find()
    return res.send(data)
  } catch (err) {
    return res.status(400).send()
  }
})

export default app
