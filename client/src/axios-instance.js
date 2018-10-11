import Axios from "axios"
import Cookie from "js-cookie"

const instance = Axios.create({
  baseURL: "http://api.cardinal.com:3001",
  // baseURL: "https://api.cardinal-ms.herokuapp.com",
  headers: {
    "x-auth": Cookie.get("x-auth")
  }
})

export default instance
