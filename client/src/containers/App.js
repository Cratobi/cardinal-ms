import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
import { getIn } from "immutable"
import { Route, Switch, withRouter } from "react-router-dom"
import Cookie from "js-cookie"
import "./App.css"
import * as actions from "../store/actions"

import Authentication from "./Authentication/Authentication"
import Signout from "./SignOut/SignOut"
import Reload from "../components/reload/reload"
import Header from "./Header/Header"
import Home from "./Home/Home"
import Order from "./Order/Order"
import Orders from "./Orders/Orders"
import Draft from "./Draft/Draft"
import Drafts from "./Drafts/Drafts"

const RouteWithHeader = ({ component: Component, ...rest }) => (
  <div>
    <Header />
    <Route {...rest} render={props => <Component {...props} />} />
  </div>
)

class App extends Component {
  componentWillMount() {
    Cookie.get("x-auth")
      ? this.props.auth(this.props.history)
      : this.props.history.replace({ pathname: "/signin" })
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/signin" exact component={Authentication} />
          <Route path="/signup" exact component={Authentication} />
          <Route path="/signout" exact component={Signout} />
          <Route path="/reload" exact component={Reload} />
          <RouteWithHeader path="/" exact component={Home} />
          <RouteWithHeader path="/orders" exact component={Orders} />
          <RouteWithHeader path="/draft" exact component={Drafts} />
          <RouteWithHeader path="/draft/:id" exact component={Draft} />
          <RouteWithHeader path="/order" exact component={Orders} />
          <RouteWithHeader path="/order/:id" component={Order} />
          <Route>{<div>ops</div>}</Route>
        </Switch>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    auth: router => dispatch(actions.auth(router))
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
)
