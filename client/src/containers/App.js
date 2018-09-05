import React, { Component } from "react"
import { connect } from "react-redux"
import { get } from "immutable"
import Axios from "axios"
import Cookie from "js-cookie"
import { Route, Switch, withRouter } from "react-router-dom"
import * as actions from "../store/actions/index"

import Header from "./Header/Header"
import Authentication from "./Authentication/Authentication"
import Orders from "./Orders/Orders"
import Order from "./Order/Order"
import Content from "./Content/Content"

class App extends Component {
  componentWillMount() {
    if (!this.props.authorization) {
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
  render() {
    return (
      <div>
        {this.props.history.location.pathname !== "/signin" ? <Header /> : null}
        <Switch>
          <Route path="/" exact component={Orders} />
          <Route path="/signin" component={Authentication} />
          <Route path="/orders" exact component={Orders} />
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
