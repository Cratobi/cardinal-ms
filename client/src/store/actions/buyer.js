import Axios from '../../axios-instance'
import { ToastStore } from 'react-toasts'
import * as actionTypes from './actionTypes'

// Dispatchers
export const saveCompanies = payload => {
  return {
    type: actionTypes.SAVE_COMPANIES,
    payload,
  }
}
export const resetCompanies = payload => {
  return {
    type: actionTypes.RESET_COMPANIES,
    payload,
  }
}
export const saveBuyers = payload => {
  return {
    type: actionTypes.SAVE_BUYERS,
    payload,
  }
}
export const resetBuyers = () => {
  return {
    type: actionTypes.RESET_BUYER,
  }
}

// Middlewares
export const fetchCompanies = () => {
  return dispatch => {
    Axios({
      method: 'get',
      url: `/admin/company`,
    })
      .then(res => {
        dispatch(saveCompanies(res.data))
      })
      .catch(err => {
        const err_msg =
          err.response.data === ''
            ? 'Something went wrong :('
            : err.response.data
        ToastStore.error(`Error: ${err_msg}`, 6000)
      })
  }
}
export const addCompany = payload => {
  return dispatch => {
    Axios({
      method: 'post',
      url: `/admin/company`,
      data: payload,
    })
      .then(res => {
        ToastStore.success(
          `A new company named "${payload.name}" has been added.`,
        )
        dispatch(saveCompanies(res.data))
      })
      .catch(err => {
        const err_msg =
          err.response.data === ''
            ? 'Something went wrong :('
            : err.response.data

        ToastStore.error(`Error: ${err_msg}`, 6000)
      })
  }
}
export const editCompany = payload => {
  return dispatch => {
    Axios({
      method: 'patch',
      url: `/admin/company`,
      data: payload,
    })
      .then(res => {
        ToastStore.success(
          `A new company named "${payload.name}" has been added".`,
        )
        dispatch(saveCompanies(res.data))
      })
      .catch(err => {
        const err_msg =
          err.response.data === ''
            ? 'Something went wrong :('
            : err.response.data
        ToastStore.error(`Error: ${err_msg}`, 6000)
      })
  }
}
export const deleteCompany = payload => {
  return dispatch => {
    Axios({
      method: 'delete',
      url: `/admin/company`,
      data: payload,
    })
      .then(res => {
        ToastStore.success(
          `The Companny "${payload.company_name}" has been deleted.`,
        )
        dispatch(saveCompanies(res.data))
      })
      .catch(err => {
        const err_msg =
          err.response.data === ''
            ? 'Something went wrong :('
            : err.response.data
        ToastStore.error(`Error: ${err_msg}`, 6000)
      })
  }
}
export const deleteBuyer = payload => {
  return dispatch => {
    Axios({
      method: 'delete',
      url: `/admin/buyer`,
      data: payload,
    })
      .then(res => {
        ToastStore.success(
          `The Buyer "${payload.buyer_name}" of the company "${
            payload.company_name
          }" has been deleted".`,
        )
        dispatch(saveCompanies(res.data))
      })
      .catch(err => {
        const err_msg =
          err.response.data === ''
            ? 'Something went wrong :('
            : err.response.data
        ToastStore.error(`Error: ${err_msg}`, 6000)
      })
  }
}
export const addBuyer = payload => {
  return dispatch => {
    Axios({
      method: 'post',
      url: `/admin/buyer`,
      data: payload,
    })
      .then(res => {
        ToastStore.success(
          `A new buyer named "${payload.name}" has been added in Company "${
            payload.company
          }"`,
          6000,
        )
        dispatch(saveCompanies(res.data))
      })
      .catch(err => {
        const err_msg =
          err.response.data === ''
            ? 'Something went wrong :('
            : err.response.data
        ToastStore.error(`Error: ${err_msg}`, 6000)
      })
  }
}
export const fetchBuyers = () => {
  return dispatch => {
    Axios({
      method: 'get',
      url: '/buyer',
    })
      .then(res => {
        return dispatch(saveBuyers(res.data))
      })
      .catch(err => {
        console.log(err)
        const err_msg =
          err.response.data === ''
            ? 'Something went wrong :('
            : err.response.data
        ToastStore.error(`Error: ${err_msg}`, 6000)
      })
  }
}
