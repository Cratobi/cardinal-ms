const { User } = require("../models/user")

const authenticate = (req, res, next) => {
  const token = req.header("x-auth")

  User.findByToken(token)
    .then(user => {
      !user ? Promise.reject() : null

      req.userData = {
        username: user.username,
        name: user.name,
        power: user.power
      }
      next()
    })
    .catch(e => {
      res.status(401).send()
    })
}

module.exports = { authenticate }
