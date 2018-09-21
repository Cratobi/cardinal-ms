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
      minlength: 1,
      required: true
    },
    company: {
      type: String,
      required: true,
      minlength: 1,
      required: true
    }
  },
  createdAt: {
    type: Number,
    default: new Date().getTime(),
    required: true
  },
  tabledata: {
    type: Object,
    required: true
  }
})
OrderSchema.index({
  order_no: "text"
})
OrderSchema.methods.toJSON = function() {
  const order = this
  return _.pick(order, [
    "id",
    "buyer",
    "order_no",
    "style_no",
    "item",
    "quantity",
    "createdBy",
    "createdAt",
    "tabledata"
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
