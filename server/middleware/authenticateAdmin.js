const { User } = require("../models/user")

const authenticateAdmin = (req, res, next) => {
  const token = req.header("x-auth")

  User.findByToken(token)
    .then(user => {
      if (!user) {
        return Promise.reject()
      }
      if (user.power !== "admin") {
        return Promise.reject()
      }

      req.userData = {
        id: user.id,
        username: user.username,
        name: user.name,
        company: user.company,
        power: user.power
      }
      next()
    })
    .catch(e => {
      res.status(401).send()
    })
}

module.exports = { authenticateAdmin }
