const mongoose = require("mongoose")
const _ = require("lodash")

// Schema Declearation
const BuyerSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 1,
    trim: true,
    unique: true,
    required: true
  },
  createdAt: {
    type: Number,
    default: new Date().getTime()
  },
  company: [
    {
      type: String,
      minlength: 1,
      required: true
    }
  ]
})

// ----- Basic Methods ----- //

// Fetch All Buyers
BuyerSchema.statics.fetchBuyers = function() {
  const buyer = this
  return buyer.find()
}
// Fetch Buyer
BuyerSchema.statics.fetchBuyer = function(id) {
  const buyer = this
  return buyer.findById(id)
}

// Model Declearation
const Buyer = mongoose.model("Buyer", BuyerSchema)

module.exports = { Buyer }
