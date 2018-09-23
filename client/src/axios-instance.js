import Axios from "axios"
import Cookie from "js-cookie"

const instance = Axios.create({
  baseURL: "http://api.cardinal.com",
  headers: {
    "x-auth": Cookie.get("x-auth")
  }
})
// const instance = Axios.create({
//   baseURL: "https://api.cardinal-ms.herokuapp.com",
//   headers: {
//     "x-auth": Cookie.get("x-auth")
//   }
// })
// const instance = Axios.create({
//   baseURL: "http://localhost:3001",
//   headers: {
//     "x-auth": Cookie.get("x-auth")
//   }
// })

export default instance
