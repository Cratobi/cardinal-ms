// eslint-disable-next-line
import { fromJS, get, set } from 'immutable'

const initialState = fromJS({
  users: null,
  userInfo: null,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE':
      return state.set('authorization', true)
    case 'SAVEUSER':
      return state.set('userInfo', fromJS(action.payload))
    case 'SAVEUSERS':
      const companies = []
      action.payload.map(user => {
        if (companies.every(company => company !== user.company)) {
          return companies.push(user.company)
        }
        return null
      })
      const users = []
      companies.map(function(company) {
        const usersUnderACompany = []

        action.payload.map(user => {
          if (user.company === company) {
            usersUnderACompany.push(user)
          }
          return null
        })
        return users.push({
          company,
          users: usersUnderACompany,
        })
      })
      return state.set('users', fromJS(users))
    case 'USER_LOGOUT':
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
