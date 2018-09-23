import axios from "axios"

const instance = axios.create({
  baseURL: "http://api.cardinal.com"
})
// const instance = axios.create({
//   baseURL: "https://api.cardinal-ms.herokuapp.com"
// })
// const instance = axios.create({
//   baseURL: "http://localhost:3001"
// })

export default instance
