import React, { Component } from "react"
import { connect } from "react-redux"
import { get, getIn } from "immutable"
import { NavLink, Route, Redirect, withRouter } from "react-router-dom"
import * as actions from "../../store/actions"

import Overview from "./Overview/Overview"
import PriceAndConsumtion from "./PriceAndConsumtion/PriceAndConsumtion"
import OrderLayout from "../../components/Layout/Order/Order"

class Order extends Component {
  componentWillMount() {
    // this.props.fetchOrder()
  }

  render() {
    return (
      <main className="container duel-card">
        <aside>
          <ul className="side-tab">
            <NavLink
              activeClassName="active"
              to={`/order/${this.props.match.params.id}/overview`}
            >
              <li>
                <i class="fas fa-chart-area" />
                <span class="text">Overview</span>
              </li>
            </NavLink>
            <NavLink
              to={`/order/${this.props.match.params.id}/PriceAndConsumtion`}
            >
              <li>
                <i class="fas fa-hand-holding-usd" />
                <span class="text">Price & Consumtion</span>
              </li>
            </NavLink>
          </ul>
        </aside>

        <article className="card overview-card">
          <Route
            path="/order/:id"
            exact
            render={() => (
              <Redirect
                exact
                to={`/order/${this.props.match.params.id}/overview`}
              />
            )}
          />
          <Route path="/order/:id/overview" component={Overview} />
          <Route
            path="/order/:id/PriceAndConsumtion"
            exact
            component={PriceAndConsumtion}
          />
        </article>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders_list: state.getIn(["orders", "orders_list"])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrder: () => dispatch(actions.fetchOrder())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Order)
)
