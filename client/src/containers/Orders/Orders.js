import React, { Component } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
import { get, getIn } from "immutable"
import * as actions from "../../store/actions/index"

import OrderLayout from "./../../components/Layout/Order/Order"

class Order extends Component {
  state = {
    page: 1
  }
  componentWillMount() {
    this.props.fetchOrdersCount()
    this.props.fetchOrders()
  }
  handleMoreBtn = () => {
    const state = { ...this.state }
    state.page = state.page + 1
    this.setState(state)
    this.props.fetchOrders(this.state.page)
  }
  render() {
    return (
      <div onScroll={this.handleScroll} className="container single-card">
        {this.props.orders ? (
          !this.props.orders ? (
            <h1 className="loading txt-lighter">Order's empty</h1>
          ) : (
            <div onScroll={this.handleScroll}>
              <div className="card card-holder">
                <div className="card-table-header">
                  <div className="txt-title order-title-centered">
                    ORDERS
                    <i className="fas fa-circle p-r" />
                    <span className="p-l">{this.props.orders_count}</span>
                  </div>
                </div>
                {this.props.orders.map((data, index) => (
                  <OrderLayout
                    key={data.get("id")}
                    id={data.get("id")}
                    buyer={data.get("buyer")}
                    orderNo={data.get("order_no")}
                    styleNo={data.get("style_no")}
                    path="/order/"
                  />
                ))}
                {this.props.orders_count - 30 * this.state.page > 0 ? (
                  <div className="card-footer txt-c">
                    <button
                      className="card-more-btn"
                      onClick={this.handleMoreBtn}
                    >
                      See more
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          )
        ) : (
          <h2 className="loading txt-center">
            Loading
            <br />
            <span className="anim">
              <span>.</span>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </h2>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders_count: state.getIn(["order", "orders_count"]),
    orders: state.getIn(["order", "orders"])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrdersCount: () => dispatch(actions.fetchOrdersCount()),
    fetchOrders: page => dispatch(actions.fetchOrders(page))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
