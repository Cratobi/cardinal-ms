import Axios from "axios"
import Cookie from "js-cookie"
import * as actionTypes from "./actionTypes"

// Dispatchers

export const resetState = () => {
  return {
    type: actionTypes.RESET_STATE
  }
}

// Middlewares
export const verifyToken = () => {
  return dispatch => {
    const token = Cookie.get("x-auth")

    if (token) {
      Axios({
        method: "get",
        url: "http://localhost:3001/auth",
        headers: {
          "x-auth": token
        }
      })
        .then(() => {
          dispatch(resetState())
        })
        .catch(err => {
          dispatch(resetState())
        })
    }
  }
}
