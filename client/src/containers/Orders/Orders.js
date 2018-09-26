import React, { Component } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
import { get, getIn, size } from "immutable"
import * as actions from "../../store/actions/index"

import MonoGridLayout from "./../../components/Layout/MonoGrid/MonoGrid"
import OrderCardLayout from "./../../components/Layout/OrderCard/OrderCard"
import LoadingLayout from "../../components/Layout/Loading/Loading"

class Order extends Component {
  state = {
    page: 1
  }
  componentWillMount() {
    this.props.fetchOrdersCount()
    this.props.fetchOrders()
  }
  componentWillUnmount() {
    this.props.resetOrders()
  }
  handleMoreBtn = () => {
    const state = { ...this.state }
    state.page = state.page + 1
    this.setState(state)
    this.props.fetchOrders(this.state.page)
  }
  // FLEX START
  // containerCSS={
  //   Math.ceil(this.props.orders_count / 30) === this.state.page &&
  //   this.props.orders_count % 10 !== 0
  //     ? " flex-j-start"
  //     : ""
  // }

  render() {
    return this.props.orders ? (
      this.props.orders.size !== 0 ? (
        <MonoGridLayout
          CustomCSS="orders"
          header={
            <h5 className="header-title">
              ORDERS <i className="fas fa-circle p-r" />
              <span className="p-l">{this.props.orders_count}</span>
            </h5>
          }
          footer={
            this.props.orders_count - 30 * this.state.page > 0 ? (
              <button
                className="btn btn-dark btn-more-custom"
                onClick={this.handleMoreBtn}
              >
                See more
              </button>
            ) : null
          }
        >
          {this.props.orders.map((order, index) => (
            <OrderCardLayout
            key={order.get("id")}
              id={order.get("id")}
              buyer={order.get("buyer")}
              orderNo={order.get("order_no")}
              styleNo={order.get("style_no")}
              path="/order/"
            />
          ))}
        </MonoGridLayout>
      ) : (
        <MonoGridLayout emptyTxt="There're no orders :(" />
      )
    ) : (
      <LoadingLayout txt center />
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
    fetchOrders: page => dispatch(actions.fetchOrders(page)),
    resetOrders: () => dispatch(actions.resetOrders())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
