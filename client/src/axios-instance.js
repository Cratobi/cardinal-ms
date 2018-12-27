import Axios from 'axios'
import Cookie from 'js-cookie'

const instance = Axios.create({
  baseURL: `http://${window.location.hostname}/api`,
  // baseURL: `https://api.cardinal-flaxengroup.com.bd`,
  // baseURL: `http://api.${window.location.hostname}`,
  // baseURL: `http://api.devserver.io`,
  headers: {
    'x-auth': Cookie.get('x-auth')
  }
})

export default instance
