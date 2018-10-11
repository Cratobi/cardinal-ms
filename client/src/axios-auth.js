import axios from "axios"

const instance = axios.create({
  baseURL: "http://api.cardinal.com:3001"
  // baseURL: "https://api.cardinal-ms.herokuapp.com"
})

export default instance
