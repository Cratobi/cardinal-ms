import React, { Component } from "react"
import { connect } from "react-redux"
import { get, getIn } from "immutable"
import * as actions from "../../store/actions/index"

import OrderLayout from "./../../components/Layout/Order/Order"

class Order extends Component {
  componentWillMount() {
    this.props.fetchOrders()
  }

  render() {
    return (
      <div className="container single-card">
        <div className="title">ORDERS</div>
        {this.props.orders ? (
          <div className="card card-holder">
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
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.getIn(["order", "orders"])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(actions.fetchOrders())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
