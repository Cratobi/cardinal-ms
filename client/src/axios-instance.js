import Axios from 'axios'
import Cookie from 'js-cookie'

const instance = Axios.create({
  // baseURL: 'http://172.16.0.2:3001',
  baseURL: 'http://localhost:81',
  // baseURL: 'http://api.cardinal.com',
  // baseURL: `http://api.${window.location.hostname}`,
  // baseURL: `http://${window.location.hostname}:81`,
  headers: {
    'x-auth': Cookie.get('x-auth'),
  },
})

export default instance
