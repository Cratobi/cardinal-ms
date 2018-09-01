const _ = require("lodash")
const express = require("express")
const bodyParse = require("body-parser")

const { mongoose } = require("./db")
const { Account } = require("./models/account")
const { authentication } = require("./middleware/authentication")

const app = express() // Express

app.use(bodyParse.json())

app.get("/auth/", authentication, (req, res) => {
  res.send(req.user)
})

app.post("/auth/signup", (req, res) => {
  var body = _.pick(req.body, ["name", "username", "password"])
  var account = new Account(body)

  account
    .save()
    .then(() => account.generateAuthToken())
    .then(token => {
      res.header("x-auth", token).send(account)
    })
    .catch(e => {
      res.status(400).send(e)
    })
})

app.post("/auth/signin", (req, res) => {
  var body = _.pick(req.body, ["username", "password"])

  Account.findByCredentials(body.username, body.password)
    .then(account =>
      account.generateAuthToken().then(token => {
        res.header("x-auth", token).send(account)
      })
    )
    .catch(e => {
      res.status(400).send()
    })
})

app.delete("/auth/token", authentication, (req, res) => {
  req.user.removeToken(req.token).then(
    () => {
      res.status(200).send()
    },
    () => {
      res.status(400).send()
    }
  )
})

//---------------------------------------//
// Signin
// app.post("/auth/signin", (req, res) => {
//   const body = _.pick(req.body, ["name", "username", "password"]);

//   Account.findOne({ username: req.body.username.trim().toLowerCase() }).then(
//     account => {
//       account
//         ? req.body.password === "12345"
//           ? res.send({ status: "success", message: "Password Matched" })
//           : res.send({
//               status: "error",
//               message: "Password not Matched"
//             })
//         : res.send({ status: "error", message: "Username not Matched" });
//     },
//     err => {
//       res.status(400).send(err);
//     }
//   );
// });

// Signup
// app.post("/auth/signup", (req, res) => {
//   const body = _.pick(req.body, ["name", "username", "password"]);
//   const account = new Account({
//     name: req.body.name.trim(),
//     username: req.body.username.trim().toLowerCase(),
//     password: req.body.password
//   });

//   account.save().then(
//     data => {
//       res.send(data);
//     },
//     err => {
//       err.code === 11000
//         ? res.status(400).send({ status: "error", message: "Username exists" })
//         : null;

//       res.status(400).send(err);
//     }
//   );
// });

app.listen(3001, () => {
  console.log("Started on port 3001")
})

module.exports = { app }
