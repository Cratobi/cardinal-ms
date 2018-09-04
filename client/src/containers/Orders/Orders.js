import React, { Component } from "react"
import { connect } from "react-redux"
import { get, getIn } from "immutable"
import * as actions from "../../store/actions/index"

import OrderLayout from "./../../components/Layout/Order/Order"

class Order extends Component {
  componentWillMount() {
    this.props.fetchOrder()
  }

  render() {
    return (
      <div className="container single-card">
        <div className="title">ORDERS</div>
        <div className="card card-holder">
          {this.props.orders_list ? (
            this.props.orders_list.map((data, index) => (
              <OrderLayout
                id={data.get("id")}
                buyer={data.get("buyer")}
                orderNo={data.get("order_no")}
                styleNo={data.get("style_no")}
              />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
