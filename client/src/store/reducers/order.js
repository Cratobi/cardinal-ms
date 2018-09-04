import { fromJS, set } from "immutable"

const initialState = fromJS({
  orders_list: null,
  orders: null
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ORDER_LIST":
      return state.set("orders_list", fromJS(action.payload))
    default:
      return state
  }
}

export default reducer
