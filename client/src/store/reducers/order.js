// eslint-disable-next-line
import { fromJS, set, update, size, get, toJS } from "immutable"

const initialState = fromJS({
  buyers: ["JBC", "RamJungle"],
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
    case "SAVE_ORDER":
      return state.set("order", fromJS(action.payload))
    default:
      return state
  }
}

export default reducer
