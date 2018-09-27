// eslint-disable-next-line
import { fromJS, get, set } from "immutable"

const initialState = fromJS({
  userInfo: null
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return state.set("authorization", true)
    case "SAVEUSER":
      return state.set("userInfo", fromJS(action.payload))
    case "USER_LOGOUT":
      const { routing } = state
      return (state = { routing })
    default:
      return state
  }
}

// const rootReducer = (state, action) => {
//   if (action.type === "USER_LOGOUT") {
//     state = undefined
//   }

//   return appReducer(state, action)
// }

export default reducer