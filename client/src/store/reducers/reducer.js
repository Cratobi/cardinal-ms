import { fromJS, get, set } from "immutable"

const initialState = fromJS({
  authorization: false
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return state.set("authorization", true)
    case "UNAUTHENTICATE":
      return state.set("authorization", false)
    default:
      return state
  }
}

export default reducer
