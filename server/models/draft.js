const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const _ = require("lodash")

const DraftSchema = new mongoose.Schema({
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
    "tabledata",
    "createdBy",
    "createdAt"
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
