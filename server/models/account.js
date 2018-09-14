const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const _ = require("lodash")

const AccountSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    minlength: 5,
    required: true
  },
  username: {
    type: String,
    require: true,
    trim: true,
    minlength: 5,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    minlength: 8,
    required: true
  },
  admin: {
    type: Boolean,
    default: false,
    required: true
  },
  createdAt: {
    type: Number,
    default: new Date().getTime()
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
})

AccountSchema.methods.toJSON = function() {
  const user = this
  const userObject = user.toObject()

  return _.pick(userObject, ["username"])
}

AccountSchema.methods.generateAuthToken = function(access) {
  const user = this
  const token = jwt
    .sign({ _id: user._id.toHexString(), access }, "secret")
    .toString()

  user.tokens.push({ access, token })

  return user.save().then(() => {
    return token
  })
}

AccountSchema.methods.removeToken = function(token) {
  const user = this

  return user.update({
    $pull: {
      tokens: { token }
    }
  })
}

AccountSchema.statics.findByToken = function(token) {
  const User = this
  let decoded

  try {
    decoded = jwt.verify(token, "secret")
  } catch (e) {
    return Promise.reject()
  }

  return User.findOne({
    _id: decoded._id,
    "tokens.token": token,
    "tokens.access": "token"
  })
}

AccountSchema.statics.findByCredentials = function(username, password) {
  const Account = this

  return Account.findOne({ username }).then(account => {
    !account ? Promise.reject() : null

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, account.password, (e, res) => {
        res ? resolve(account) : reject()
      })
    })
  })
}

AccountSchema.pre("save", function(next) {
  const user = this

  user.isModified("password")
    ? bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          user.password = hash
          next()
        })
      })
    : next()
})

const Account = mongoose.model("Account", AccountSchema)

module.exports = { Account }
