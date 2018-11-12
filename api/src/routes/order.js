import Router from 'express'
import _ from 'lodash'

// Models
import Order from '../models/order'
import Draft from '../models/draft'

// Middleware
import authenticate from '../middleware/authenticate'

// Express > Router
const app = Router()

// Provide all Orders
app.get('/order', authenticate, async (req, res) => {
  try {
    if (req.query.search) {
      const query = req.query.search
      let feild = 'order_no'

      if (query.charAt(0) === '@') feild = 'style_no'

      const order = await Order.searchOrders(query, feild)
      return res.send(order)
    } else {
      const order = await Order.fetchOrders(req.query.page, req.query.recent)

      return res.send(order)
    }
  } catch (err) {
    return res.status(400).send(err)
  }
})

// Search Order
app.get('/order/search', authenticate, async (req, res) => {
  let query = req.query.q
  try {
    if (query.charAt(0) !== '@') {
      let order = await Order.find({
        order_no: { $regex: query, $options: 'i' },
      })

      order = _.map(
        order,
        _.partialRight(_.pick, ['id', 'order_no', 'style_no']),
      )

      return res.send(order)
    } else {
      query = query.substr(1)

      let order = await Order.find({
        style_no: { $regex: query, $options: 'i' },
      })
      order = _.map(
        order,
        _.partialRight(_.pick, ['id', 'order_no', 'style_no']),
      )
      return res.send(order)
    }
  } catch (err) {
    return res.status(400).send(err)
  }
})

// Provide number of orders
app.get('/order/count', authenticate, async (req, res) => {
  try {
    const count = await Order.estimatedDocumentCount()
    return res.send({ count })
  } catch (err) {
    return res.status(400).send(err)
  }
})

// Provide Order
app.get('/order/:id', authenticate, async (req, res) => {
  const id = req.params.id
  try {
    const order = await Order.fetchOrder(id)

    return res.send(order)
  } catch (err) {
    return res.status(400).send(err)
  }
})

// Publish Order
app.post('/order/:id', authenticate, async (req, res) => {
  const id = req.params.id

  const body = _.pick(req.body, ['tabledata'])

  try {
    const draft = await Draft.findById(id)

    draft.tabledata = body.tabledata
    // draft = _.pick(draft, [
    //   'buyer',
    //   'order_no',
    //   'style_no',
    //   'shipment_date',
    //   'item',
    //   'quantity',
    //   'createdBy',
    //   'company',
    //   'tabledata',
    // ])

    await new Order(draft)
    order = order.save()

    draft = await Draft.findByIdAndRemove(id)

    return res.send(order.id)
  } catch (err) {
    return res.status(400).send(err)
  }
})

export default app
