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
export const saveOrders = payload => {
  return {
    type: actionTypes.SAVE_ORDERS,
    payload
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
export const saveSearchedResults = payload => {
  return {
    type: actionTypes.SAVE_SEARCHED_RESULT,
    payload
  }
}

// Middlewares

export const fetchOrders = (page = 0) => {
  return dispatch => {
    Axios({
      method: "get",
      url: `http://localhost:3001/order?page=${page}`,
      headers: {
        token: Cookie.get("x-auth")
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
        token: Cookie.get("x-auth")
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
        token: Cookie.get("x-auth")
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
        token: Cookie.get("x-auth")
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
        token: Cookie.get("x-auth")
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
        token: Cookie.get("x-auth")
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
