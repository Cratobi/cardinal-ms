// TODO:

// if (token) {
//   Axios({
//     method: "get",
//     url: "http://localhost:3001/auth",
//     headers: {
//       token
//     }
//   })
//     .then(() => this.props.authenticate())
//     .then(() => this.props.history.replace({ pathname: "/" }))
// }
// else {
//   const state = { ...this.state }
//   state.render = true
//   this.setState(state)
// }

import React, { Component } from "react"
// eslint-disable-next-line
import { get } from "immutable"
import { connect } from "react-redux"
import Axios from "axios"
import Cookie from "js-cookie"
import { Route, Switch, withRouter } from "react-router-dom"
import * as actions from "../store/actions/index"

import Home from "./Home/Home"
import Header from "./Header/Header"
import Auth from "./Auth/Auth"
import Orders from "./Orders/Orders"
import Order from "./Order/Order"
import Draft from "./Draft/Draft"
import Drafts from "./Drafts/Drafts"

class App extends Component {
  componentWillMount() {
    if (!this.props.authorization) {
      if (
        this.props.location.pathname !== "/signup" &&
        this.props.location.pathname !== "/signup/"
      ) {
        const token = Cookie.get("token")

        token
          ? Axios({
              method: "get",
              url: "http://localhost:3001/auth",
              headers: {
                token
              }
            })
              .then(() => this.props.authenticate())
              .catch(() => this.props.history.replace({ pathname: "/signin" }))
          : this.props.history.replace({ pathname: "/signin" })
      }
    }
  }

  render() {
    return (
      <div>
        {this.props.history.location.pathname !== "/signin" ? <Header /> : null}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Auth} />
          <Route path="/signup" exact component={Auth} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/draft" exact component={Drafts} />
          <Route path="/draft/:id" exact component={Draft} />
          <Route path="/order" exact component={Orders} />
          <Route path="/order/:id" component={Order} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  state = state.get("init")

  return {
    authorization: state.get("authorization")
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => dispatch(actions.authenticate())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
