import axios from "axios"

const token = Cookie.get("x-auth")

// const instance = axios.create({
//   baseURL: "https://cardinal-ms.herokuapp.com"
// })
const instance = axios.create({
  baseURL: "http://localhost:3001"
})

export default instance
