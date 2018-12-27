import Axios from '../../axios-instance'
import { ToastStore } from 'react-toasts'
import * as actionTypes from './actionTypes'

// Dispatchers

// export const resetState = () => {
//   return {
//     type: actionTypes.RESET_STATE,
//   }
// }
export const saveUsers = payload => {
  return {
    type: actionTypes.SAVEUSERS,
    payload
  }
}
export const saveUser = payload => {
  return {
    type: actionTypes.SAVEUSER,
    payload
  }
}

// Middlewares
export const auth = router => {
  return dispatch => {
    Axios({
      method: 'get',
      url: '/auth'
    })
      .then(res => {
        dispatch(saveUser(res.data))
      })
      .catch(() => router.replace({ pathname: '/signin' }))
  }
}
export const fetchUser = () => {
  return dispatch => {
    Axios({
      method: 'get',
      url: '/admin/user'
    })
      .then(res => {
        dispatch(saveUsers(res.data))
      })
      .catch(err => {
        const err_msg = err.response.data === '' ? 'Something went wrong :(' : err.response.data
        ToastStore.error(`Error: ${err_msg}`, 6000)
      })
  }
}
export const resetUser = () => {
  return dispatch => {
    Axios({
      method: 'get',
      url: '/admin/user'
    })
      .then(res => {
        dispatch(saveUsers(res.data))
      })
      .catch(err => {
        const err_msg = err.response.data === '' ? 'Something went wrong :(' : err.response.data
        ToastStore.error(`Error: ${err_msg}`, 6000)
      })
  }
}
export const editUser = payload => {
  return dispatch => {
    Axios({
      method: 'patch',
      url: '/admin/user',
      data: payload
    })
      .then(res => {
        ToastStore.success(`A new company named "${payload.name}" has been added".`)
        dispatch(saveUsers(res.data))
      })
      .catch(err => {
        const err_msg = err.response.data === '' ? 'Something went wrong :(' : err.response.data
        ToastStore.error(`Error: ${err_msg}`, 6000)
      })
  }
}
export const deleteUser = payload => {
  console.log(payload)
  return dispatch => {
    Axios({
      method: 'delete',
      url: '/admin/user',
      data: { id: payload.id }
    })
      .then(res => {
        ToastStore.success(
          `The User "${payload.name}" as "${payload.username}" under company "${payload.company}" has been deleted.`
        )
        return dispatch(saveUsers(res.data))
      })
      .catch(err => {
        const err_msg = err.response.data === '' ? 'Something went wrong :(' : err.response.data
        ToastStore.error(`Error: ${err_msg}`, 6000)
      })
  }
}
export const addUser = payload => {
  return dispatch => {
    Axios({
      method: 'post',
      url: '/auth/signup',
      data: payload
    })
      .then(res => {
        ToastStore.success(
          `A new user of name "${payload.name}" as username "${payload.username}" in Company "${payload.company} as a "${payload.power}"`,
          8000
        )
        return dispatch(saveUsers(res.data))
      })
      .catch(err => {
        console.log(err)
        const err_msg = err.response.data === '' ? 'Something went wrong :(' : err.response.data
        ToastStore.error(`Error: ${err_msg}`, 6000)
      })
  }
}
