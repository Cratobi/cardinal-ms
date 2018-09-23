import Axios from "../../axios-instance"
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
    if (Cookie.get("x-auth")) {
      Axios({
        method: "get",
        url: "/auth"
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
