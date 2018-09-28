import React, { Component } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
import { get, size } from "immutable"
import * as actions from "../../store/actions/index"

import MonoGridLayout from "./../../components/Layout/MonoGrid/MonoGrid"
import OrderCardLayout from "./../../components/Layout/OrderCard/OrderCard"
import LoadingLayout from "../../components/Layout/Loading/Loading"

class Order extends Component {
  render() {
    return this.props.orders ? (
      this.props.orders.map((order, index) => (
        <OrderCardLayout
          key={order.get("id")}
          id={order.get("id")}
          buyer={order.get("buyer")}
          orderNo={order.get("order_no")}
          styleNo={order.get("style_no")}
          path="/order/"
        />
      ))
    ) : (
      <LoadingLayout />
    )
  }
}

export default Order
