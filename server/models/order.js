const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const _ = require("lodash")

const OrderSchema = new mongoose.Schema({
  buyer: {
    type: String,
    // required: true,
    minlength: 1
  },
  order_no: {
    type: String,
    // required: true,
    trim: true,
    minlength: 1
  },
  style_no: {
    type: String,
    // required: true,
    trim: true,
    minlength: 1
  },
  createdBy: {
    type: String,
    // required: true,
    minlength: 1
  },
  createdAt: {
    type: Number,
    default: new Date().getTime()
  },
  tabledata: {
    type: Object,
    default: null
  }
})
OrderSchema.methods.toJSON = function() {
  const order = this
  return _.pick(order, [
    "id",
    "buyer",
    "order_no",
    "style_no",
    "tabledata",
    "createdBy",
    "createdAt"
  ])
}

OrderSchema.statics.fetchOrders = function(skips = 0) {
  const order = this
  skips = skips * 10
  return order
    .find()
    .sort({ createdAt: -1 })
    .skip(skips)
    .limit(10)
}
OrderSchema.statics.fetchOrder = function(id) {
  const order = this
  return order.findById(id)
}

const Order = mongoose.model("Order", OrderSchema)

module.exports = { Order }
