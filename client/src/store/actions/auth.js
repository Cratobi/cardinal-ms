import Axios from "../../axios-instance"
import * as actionTypes from "./actionTypes"

// Dispatchers

// export const resetState = () => {
//   return {
//     type: actionTypes.RESET_STATE
//   }
// }
// export const authenticate = () => {
//   return {
//     type: actionTypes.AUTHENTICATE
//   }
// }
export const saveUser = payload => {
  return {
    type: actionTypes.SAVEUSER,
    payload
  }
}

// Middlewares
// export const checkCookie = () => {
//   return dispatch => {
//     if (Cookie.get("x-auth")) {
//       Axios({
//         method: "get",
//         url: "/auth"
//       })
//         .then(() => {
//           dispatch(authenticate())
//         })
//         .catch(err => {
//           console.log(err)
//         })
//     }
//   }
// }
export const auth = router => {
  return dispatch => {
    Axios({
      method: "get",
      url: "/auth"
    })
      .then(res => dispatch(saveUser(res.data)))
      .catch(router.replace({ pathname: "/signin" }))
  }
}

// export const verifyToken = () => {
//   return dispatch => {
//     if (Cookie.get("x-auth")) {
//       Axios({
//         method: "get",
//         url: "/auth"
//       })
//         .then(() => {
//           dispatch(resetState())
//         })
//         .catch(err => {
//           dispatch(resetState())
//         })
//     }
//   }
// }
