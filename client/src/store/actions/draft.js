import Axios from "axios"
import Cookie from "js-cookie"
import * as actionTypes from "./actionTypes"

// Dispatchers

export const saveDrafts = payload => {
  return {
    type: actionTypes.SAVE_DRAFTS,
    payload
  }
}
export const resetDrafts = () => {
  return {
    type: actionTypes.RESET_DRAFTS
  }
}
export const saveDraftMetadata = payload => {
  return {
    type: actionTypes.SAVE_DRAFT_METADATA,
    payload: payload
  }
}
export const saveDraftTabledata = payload => {
  return {
    type: actionTypes.SAVE_DRAFT_TABLEDATA,
    payload: payload
  }
}
export const resetDraft = () => {
  return {
    type: actionTypes.RESET_DRAFT
  }
}
export const resetDraftTable = () => {
  return {
    type: actionTypes.RESET_DRAFT_TABLE
  }
}
export const syncTables = data => {
  return {
    type: actionTypes.SYNCTABLES,
    payload: data
  }
}

// Middlewares
export const fetchDrafts = () => {
  return dispatch => {
    Axios({
      method: "get",
      url: "http://localhost:3001/draft",
      headers: {
        "x-auth": Cookie.get("x-auth")
      }
    })
      .then(payload => {
        dispatch(saveDrafts(payload.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const fetchDraft = id => {
  return dispatch => {
    Axios({
      method: "get",
      url: `http://localhost:3001/draft/${id}`,
      headers: {
        "x-auth": Cookie.get("x-auth")
      }
    })
      .then(payload => {
        dispatch(saveDraftMetadata(payload.data))
        payload.data.tabledata
          ? dispatch(saveDraftTabledata(payload.data.tabledata))
          : dispatch(resetDraftTable())
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const sendDraftMetadta = (payload, router) => {
  return dispatch => {
    Axios({
      method: "post",
      url: "http://localhost:3001/draft",
      headers: {
        "x-auth": Cookie.get("x-auth")
      },
      data: {
        payload
      }
    })
      .then(payload => {
        dispatch(saveDraftMetadata(payload.data))
        router.replace({ pathname: "/draft/" + payload.data.id })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const sendDraftTabledata = payload => {
  return dispatch => {
    Axios({
      method: "patch",
      url: `http://localhost:3001/draft/${payload.id}`,
      headers: {
        "x-auth": Cookie.get("x-auth")
      },
      data: {
        payload: payload.tabledata
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

export const onChange = payload => {
  return dispatch => {
    dispatch(syncTables(payload))
  }
}

export const deleteDraft = (id, router) => {
  return dispatch => {
    Axios({
      method: "delete",
      url: `http://localhost:3001/draft/${id}`,
      headers: {
        "x-auth": Cookie.get("x-auth")
      },
      data: null
    })
      .then(() => {
        if (router) {
          router.replace({ pathname: "/" })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
