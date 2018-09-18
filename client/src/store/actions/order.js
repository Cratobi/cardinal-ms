import Axios from "axios"
import Cookie from "js-cookie"
import * as actionTypes from "./actionTypes"

// Dispatchers

export const saveOrder = payload => {
  return {
    type: actionTypes.SAVE_ORDER,
    payload
  }
}
export const resetOrder = () => {
  return {
    type: actionTypes.RESET_ORDER
  }
}
export const saveOrders = payload => {
  return {
    type: actionTypes.SAVE_ORDERS,
    payload
  }
}
export const resetOrders = () => {
  return {
    type: actionTypes.RESET_ORDERS
  }
}
export const addOrders = payload => {
  return {
    type: actionTypes.ADD_ORDERS,
    payload
  }
}
export const saveOdersCount = payload => {
  return {
    type: actionTypes.SAVE_ORDERS_COUNT,
    payload
  }
}
export const saveBuyers = payload => {
  return {
    type: actionTypes.SAVE_BUYERS,
    payload
  }
}
export const resetBuyers = () => {
  return {
    type: actionTypes.RESET_BUYER
  }
}
export const saveSearchedResults = payload => {
  return {
    type: actionTypes.SAVE_SEARCHED_RESULT,
    payload
  }
}
export const resetSearchedResults = () => {
  return {
    type: actionTypes.RESET_SEARCHED_RESULT
  }
}

// Middlewares

export const fetchOrders = (page = 0) => {
  return dispatch => {
    Axios({
      method: "get",
      url: `http://localhost:3001/order?page=${page}`,
      headers: {
        "x-auth": Cookie.get("x-auth")
      }
    })
      .then(res => {
        page > 0
          ? dispatch(addOrders(res.data))
          : dispatch(saveOrders(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const searchOrder = query => {
  return dispatch => {
    Axios({
      method: "get",
      url: `http://localhost:3001/order/search?q=${query}`,
      headers: {
        "x-auth": Cookie.get("x-auth")
      }
    })
      .then(res => dispatch(saveSearchedResults(res.data)))
      .catch(err => {
        console.log(err)
      })
  }
}

export const fetchOrdersCount = () => {
  return dispatch => {
    Axios({
      method: "get",
      url: `http://localhost:3001/order/count`,
      headers: {
        "x-auth": Cookie.get("x-auth")
      }
    })
      .then(res => {
        dispatch(saveOdersCount(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const fetchOrder = id => {
  return dispatch => {
    Axios({
      method: "get",
      url: `http://localhost:3001/order/${id}`,
      headers: {
        "x-auth": Cookie.get("x-auth")
      }
    })
      .then(res => {
        dispatch(saveOrder(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const publishOrder = (id, router) => {
  return dispatch => {
    Axios({
      method: "post",
      url: `http://localhost:3001/order/${id}`,
      headers: {
        "x-auth": Cookie.get("x-auth")
      }
    })
      .then(res => {
        dispatch(fetchOrder(res.data))
        router.replace({ pathname: `/order/${res.data}` })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const fetchBuyers = () => {
  return dispatch => {
    Axios({
      method: "get",
      url: "http://localhost:3001/buyers",
      headers: {
        "x-auth": Cookie.get("x-auth")
      }
    })
      .then(payload => {
        dispatch(saveBuyers(payload.data.buyers))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
