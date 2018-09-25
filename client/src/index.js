import React from "react"
import ReactDOM from "react-dom"

import App from "./containers/App"
import "./index.css"
import { createStore, applyMiddleware, compose } from "redux"
import { combineReducers } from "redux-immutablejs"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import thunk from "redux-thunk"

import authReducer from "./store/reducers/auth"
import orderReducer from "./store/reducers/order"
import draftReducer from "./store/reducers/draft"
import registerServiceWorker from "./registerServiceWorker"

const rootReducer = combineReducers({
  auth: authReducer,
  draft: draftReducer,
  order: orderReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
