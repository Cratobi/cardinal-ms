const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const _ = require("lodash")

const OrderSchema = new mongoose.Schema({
  buyer: {
    type: String,
    minlength: 1,
    required: true
  },
  order_no: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  },
  style_no: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  },
  item: {
    type: String,
    trim: true,
    minlength: 1
  },
  quantity: {
    type: Number,
    trim: true,
    minlength: 1
  },
  createdBy: {
    username: {
      type: String,
      required: true,
      minlength: 1
    },
    company: {
      type: String,
      required: true,
      minlength: 1
    }
  },
  createdAt: {
    type: Number,
    default: new Date().getTime()
  },
  tabledata: {
    type: Object
  }
})
OrderSchema.index({
  order_no: "text",
  style_no: "text"
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
  skips = skips * 30
  return order
    .find()
    .sort({ createdAt: -1 })
    .skip(skips)
    .limit(30)
}
OrderSchema.statics.fetchOrder = function(id) {
  const order = this
  return order.findById(id)
}

const Order = mongoose.model("Order", OrderSchema)

module.exports = { Order }
