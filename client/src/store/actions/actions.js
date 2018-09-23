import Axios from "../../axios-instance"
import Cookie from "js-cookie"
import * as actionTypes from "./actionTypes"

// Dispatchers

export const authenticate = () => {
  return {
    type: actionTypes.AUTHENTICATE
  }
}
export const unauthenticate = () => {
  return {
    type: actionTypes.UNAUTHENTICATE
  }
}

// Middlewares

export const checkCookie = () => {
  return dispatch => {
    if (Cookie.get("x-auth")) {
      Axios({
        method: "get",
        url: "/auth"
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
