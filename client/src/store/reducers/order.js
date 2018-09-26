// eslint-disable-next-line
import { fromJS, set, update, size, get, toJS } from "immutable"

const initialState = fromJS({
  buyers: ["JBC", "RamJungle"],
  search_result: null,
  order: null,
  orders_count: null,
  orders: null
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_BUYERS":
      return state.set("buyers", fromJS(action.payload))
    case "RESET_BUYER":
      return state.set("buyers", initialState.get("buyers"))
    case "SAVE_ORDERS":
      return state.set("orders", fromJS(action.payload))
    case "SAVE_ORDERS_COUNT":
      return state.set("orders_count", action.payload.count)
    case "RESET_ORDERS":
      state = state.set("orders_count", initialState.get("orders_count"))
      return state.set("orders", initialState.get("orders"))
    case "ADD_ORDERS":
      return state.update("orders", orders =>
        orders.concat(fromJS(action.payload))
      )
    case "SAVE_ORDER":
      return state.set("order", fromJS(action.payload))
    case "RESET_ORDER":
      return state.set("order", initialState.get("order"))
    case "SAVE_SEARCHED_RESULT":
      return state.set("search_result", fromJS(action.payload))
    case "RESET_SEARCHED_RESULT":
      return state.set("search_result", initialState.get("search_result"))
    default:
      return state
  }
}

export default reducer
