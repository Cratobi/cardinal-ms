import Axios from "axios"
import Cookie from "js-cookie"
import * as actionTypes from "./actionTypes"

// Dispatchers

export const authenticate = () => {
  return {
    type: actionTypes.AUTHENTICATE
  }
}

// Middlewares

export const checkCookie = () => {
  return dispatch => {
    const token = Cookie.get("token")
    if (token) {
      Axios({
        method: "get",
        url: "http://localhost:3001/auth",
        headers: {
          token
        }
      })
        .then(() => {
          dispatch(authenticate())
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
