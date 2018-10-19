import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://172.16.0.2:3001',
  // baseURL: 'http://localhost:3001',
})

export default instance
