import { fromJS, set } from "immutable"

const initialState = fromJS({
  authorization: false
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return state.set("authorization", true)
    default:
      return state
  }
}

export default reducer
