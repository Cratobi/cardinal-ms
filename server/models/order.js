const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const _ = require("lodash")

const OrderSchema = new mongoose.Schema({
  buyer: {
    type: String,
    require: true,
    trim: true,
    minlength: 5,
    required: true
  },
  order_no: {
    type: String,
    require: true,
    trim: true,
    minlength: 5,
    required: true
  },
  style_no: {
    type: String,
    require: true,
    minlength: 8,
    required: true
  },
  createdAt: {
    type: Number,
    default: new Date().getTime()
  }
})

OrderSchema.methods.toJSON = function() {
  const order = this
  return _.pick(order, ["id", "buyer", "order_no", "style_no", "createdAt"])
}

OrderSchema.statics.fetchOrder = function() {
  const order = this
  return order.find()
}

OrderSchema.pre("save", function(next) {
  const user = this

  user.isModified("password")
    ? bcrypt.genSalt(10, (e, salt) => {
        bcrypt.hash(user.password, salt, (e, hash) => {
          user.password = hash
          next()
        })
      })
    : next()
})

const Order = mongoose.model("Order", OrderSchema)

module.exports = { Order }
