import Axios from "axios"
import Cookie from "js-cookie"
import * as actionTypes from "./actionTypes"

// Dispatchers

export const saveOrders = payload => {
  return {
    type: actionTypes.SAVE_ORDER_LIST,
    payload
  }
}

// Middlewares

export const fetchOrder = () => {
  return dispatch => {
    Axios({
      method: "get",
      url: "http://localhost:3001/order",
      headers: {
        token: Cookie.get("token")
      }
    })
      .then(paylooad => {
        dispatch(saveOrders(paylooad.data.order_list))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
