import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { getIn } from 'immutable'
import { Route, Switch, withRouter } from 'react-router-dom'
import Cookie from 'js-cookie'
import * as actions from '../store/actions'

// Styles
import './App.css'
import '../components/style/Animation.css'

import Authentication from './Authentication/Authentication'
import Signout from './SignOut/SignOut'
import Reload from '../components/reload/reload'
import Header from './Header/Header'
import Home from './Home/Home'
import Order from './Order/Order'
import Orders from './Orders/Orders'
import Draft from './Draft/Draft'
import Drafts from './Drafts/Drafts'
import Dashboard from './Dashboard/Dashboard'
import Unauthorized from '../components/Layout/Unauthorized/Unauthorized'

const RouteWithHeader = ({ component: Component, ...rest }) => (
  <Fragment>
    <Header />
    <Route {...rest} render={props => <Component {...props} />} />
  </Fragment>
)

class App extends Component {
  state = {
    maximized: window.maximized,
  }
  componentWillMount() {
    Cookie.get('x-auth')
      ? this.props.auth(this.props.history)
      : this.props.history.replace({ pathname: '/signin' })
  }

  render() {
    return (
      <Fragment>
        {/* For Electron */}
        {/* <div id="titlebar">
          <button id="full-btn" className="btn btn-windows">
            <i className="ti-layout-slider" />
          </button>
          <button id="min-btn" className="btn btn-windows">
            <span class="ti-angle-down" />
          </button>
          <button id="max-btn" className="btn btn-windows">
            <i className="ti-layout-media-center-alt" />
          </button>
          <button id="close-btn" className="btn btn-windows">
            <span class="ti-close" />
          </button>
        </div> */}
        <Switch>
          <Route path="/signin" exact component={Authentication} />
          <Route path="/signout" exact component={Signout} />
          <Route path="/reload" exact component={Reload} />
          <RouteWithHeader path="/" exact component={Home} />
          <RouteWithHeader
            path="/unauthorized"
            exact
            component={Unauthorized}
          />
          <RouteWithHeader path="/orders" exact component={Orders} />
          <RouteWithHeader path="/Dashboard" component={Dashboard} />
          <RouteWithHeader path="/draft" exact component={Drafts} />
          <RouteWithHeader path="/draft/:id" exact component={Draft} />
          <RouteWithHeader path="/order" exact component={Orders} />
          <RouteWithHeader path="/order/:id" component={Order} />
          <Route>
            {<h4> 404 Error : The page you are looking for doesn't exist</h4>}
          </Route>
        </Switch>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    auth: router => dispatch(actions.auth(router)),
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(App),
)
