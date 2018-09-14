// eslint-disable-next-line
import { fromJS, set, update, size, get, toJS } from "immutable"

const initialState = fromJS({
  buyers: ["JBC", "RamJungle"],
  orders_count: null,
  search_result: null,
  orders: null,
  order: null
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_BUYERS":
      return state.set("buyers", fromJS(action.payload))
    case "SAVE_ORDERS":
      return state.set("orders", fromJS(action.payload))
    case "ADD_ORDERS":
      return state.update("orders", orders =>
        orders.concat(fromJS(action.payload))
      )
    case "SAVE_SEARCHED_RESULT":
      return state.set("search_result", fromJS(action.payload))
    case "SAVE_ORDERS_COUNT":
      return state.set("orders_count", action.payload.count)
    case "SAVE_ORDER":
      return state.set("order", fromJS(action.payload))
    default:
      return state
  }
}

export default reducer
