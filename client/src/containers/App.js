import React, { Component } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
import { get } from "immutable"
import { Route, Switch, withRouter } from "react-router-dom"
import "./App.css"
import Axios from "axios"
import Cookie from "js-cookie"

import Authentication from "./Authentication/Authentication"
import Header from "./Header/Header"
import Home from "./Home/Home"
import Order from "./Order/Order"
import Orders from "./Orders/Orders"
import Draft from "./Draft/Draft"
import Drafts from "./Drafts/Drafts"

class App extends Component {
  //   componentWillMount() {
  //     if (!this.props.authorization) {
  //       if (
  //         this.props.location.pathname !== "/signup" &&
  //         this.props.location.pathname !== "/signup/"
  //       ) {
  //         const token = Cookie.get("x-auth")

  //         token
  //           ? Axios({
  //               method: "get",
  //               url: "http://localhost:3001/auth",
  //               headers: {
  //                 "x-auth": token
  //               }
  //             })
  //               .then(() => this.props.authenticate())
  //               .catch(() => this.props.history.replace({ pathname: "/signin" }))
  //           : this.props.history.replace({ pathname: "/signin" })
  //       }
  //     }
  //   }

  render() {
    return (
      <div>
        {this.props.history.location.pathname !== "/signin" ? <Header /> : null}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Authentication} />
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
    // authentication: () => dispatch(actions.authentication())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)