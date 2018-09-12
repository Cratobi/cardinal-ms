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
    this.props.fetchOrders()
  }
  handleMoreBtn = () => {
    const state = { ...this.state }
    state.page = state.page + 1
    this.setState(state)
    this.props.fetchOrders(this.state.page)
  }
  handleScroll = () => {
    let height = window.innerHeight
    let scroll = document.body.scrollHeight
    console.log(height, scroll)
    // if (heightBound > window.scrollY) {
    //   this.handleMoreBtn()
    // }
  }

  render() {
    return (
      <div onScroll={this.handleScroll} className="container single-card">
        {this.props.orders ? (
          !this.props.orders ? (
            <h1 className="loading txt-lighter">Order's empty</h1>
          ) : (
            <div onScroll={this.handleScroll}>
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
              <button onClick={this.handleMoreBtn}>More</button>
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
    fetchOrders: page => dispatch(actions.fetchOrders(page))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
