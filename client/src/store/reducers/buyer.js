// eslint-disable-next-line
import { fromJS, List, set } from 'immutable'

const initialState = fromJS({
  companies: null,
  buyers: null,
})

const buyerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_COMPANIES':
      return state.set('companies', fromJS(action.payload))
    case 'RESET_COMPANIES':
      return state.set('companies', initialState.get('buyers'))
    case 'SAVE_BUYERS':
      return state.set('buyers', List(action.payload))
    case 'RESET_BUYER':
      return state.set('buyers', initialState.get('buyers'))

    default:
      return state
  }
}

export default buyerReducer
