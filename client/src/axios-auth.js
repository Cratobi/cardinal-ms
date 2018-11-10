import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://172.16.0.2:3001',
  // baseURL: 'http://localhost:81',
  // baseURL: 'http://api.cardinal.com',
  // baseURL: `http://api.${window.location.hostname}`,
  baseURL: `http://${window.location.hostname}:81`,
})

export default instance
