const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const _ = require("lodash")

const Schema = mongoose.Schema

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
    type: Schema.ObjectId,
    required: true
  },
  company: {
    type: String,
    required: true,
    minlength: 1
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
    "company",
    "createdAt",
    "tabledata"
  ])
}

OrderSchema.statics.fetchOrders = function(skips = 0, recent) {
  const order = this
  if (recent === "true") {
    return order
      .find()
      .sort({ createdAt: -1 })
      .limit(20)
  }
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
