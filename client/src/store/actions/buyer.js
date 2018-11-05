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
export const addCompany = payload => {
  return () => {
    Axios({
      method: 'post',
      url: `/company`,
      data: payload,
    })
      .then(() => {
        ToastStore.success(
          `A new company named "${payload.name}" has been added".`,
        )
        fetchCompanies()
      })
      .catch(() => {
        ToastStore.error(`Error`, 6000)
      })
  }
}
export const addBuyer = payload => {
  return () => {
    Axios({
      method: 'post',
      url: `/buyer`,
      data: payload,
    })
      .then(() => {
        ToastStore.success(
          `A new buyer named "${payload.name}" has been added in Company "${
            payload.company
          }"`,
          6000,
        )
        fetchBuyers()
      })
      .catch(() => {
        ToastStore.error(`Error`, 6000)
      })
  }
}

export const fetchCompanies = () => {
  return dispatch => {
    Axios({
      method: 'get',
      url: `/company`,
    })
      .then(companies => {
        dispatch(saveCompanies(companies.data))
      })
      .catch(() => {
        console.log()
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
        dispatch(saveBuyers(res.data))
      })
      .catch(() => {
        console.log()
      })
  }
}
