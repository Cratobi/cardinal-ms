import axios from 'axios'

const instance = axios.create({
  baseURL: `http://${window.location.hostname}/api`
  // baseURL: `https://api.cardinal-flaxengroup.com.bd`,
  // baseURL: `http://api.${window.location.hostname}`,
  // baseURL: `http://api.devserver.io`,
})

export default instance
