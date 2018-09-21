import axios from "axios"

const token = Cookie.get("x-auth")

const instance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "x-auth": token,
    withCredentials: false
  }
})
// const instance = axios.create({
//   baseURL: "https://cardinal-ms.herokuapp.com",
//   headers: {
//     "x-auth": token,
//     withCredentials: false
//   }
// })

export default instance
