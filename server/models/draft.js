const mongoose = require("mongoose")
const _ = require("lodash")

const Schema = mongoose.Schema

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
    "company",
    "createdAt",
    "tabledata"
  ])
}

DraftSchema.statics.fetchDrafts = function(userId) {
  const draft = this
  return draft.find({ createdBy: userId })
}

DraftSchema.statics.fetchDraft = function(id) {
  const draft = this
  return draft.findById(id)
}

const Draft = mongoose.model("Draft", DraftSchema)

module.exports = { Draft }
