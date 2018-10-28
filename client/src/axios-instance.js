import Axios from 'axios'
import Cookie from 'js-cookie'

const instance = Axios.create({
  // baseURL: 'http://172.16.0.2:3001',
  // baseURL: 'http://localhost:3001',
  baseURL: `http://${window.location.hostname}:3001`,
  headers: {
    'x-auth': Cookie.get('x-auth'),
  },
})

export default instance
