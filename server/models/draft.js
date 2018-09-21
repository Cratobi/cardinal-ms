const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const _ = require("lodash")

const DraftSchema = new mongoose.Schema({
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
DraftSchema.methods.toJSON = function() {
  const draft = this
  return _.pick(draft, [
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

DraftSchema.statics.fetchDrafts = function() {
  const draft = this
  return draft.find()
}
DraftSchema.statics.fetchDraft = function(id) {
  const draft = this
  return draft.findById(id)
}

const Draft = mongoose.model("Draft", DraftSchema)

module.exports = { Draft }
