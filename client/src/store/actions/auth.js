import Axios from '../../axios-instance'
import { ToastStore } from 'react-toasts'
import * as actionTypes from './actionTypes'

// Dispatchers

// export const resetState = () => {
//   return {
//     type: actionTypes.RESET_STATE,
//   }
// }
export const saveUser = payload => {
  return {
    type: actionTypes.SAVEUSER,
    payload,
  }
}

// Middlewares
export const auth = router => {
  return dispatch => {
    Axios({
      method: 'get',
      url: '/auth',
    })
      .then(res => dispatch(saveUser(res.data)))
      .catch(() => router.replace({ pathname: '/signin' }))
  }
}
export const addUser = payload => {
  return () => {
    Axios({
      method: 'post',
      url: `/auth/signup`,
      data: payload,
    })
      .then(res => {
        const userData = res.data

        ToastStore.success(
          `A new user of name "${userData.name}" as username "${
            userData.username
          }" in Company "${userData.company} as a "${userData.power}"`,
          8000,
        )
      })
      .catch(() => {
        ToastStore.error(`Error`, 6000)
      })
  }
}
