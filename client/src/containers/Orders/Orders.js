import React, { Component } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
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
        {this.props.orders ? (
          !this.props.orders ? (
            <h1 className="loading txt-lighter">Order's empty</h1>
          ) : (
            <div>
              <div className="card-header">
                <div className="txt-title">ORDERS</div>
              </div>
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
