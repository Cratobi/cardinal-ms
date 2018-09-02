const { Account } = require("../models/account")

const authentication = (req, res, next) => {
  const token = req.header("token")
  Account.findByToken(token)
    .then(account => {
      !account ? Promise.reject() : null
      req.account = account
      req.token = token
      next()
    })
    .catch(e => {
      res.status(401).send()
    })
}

module.exports = { authentication }
