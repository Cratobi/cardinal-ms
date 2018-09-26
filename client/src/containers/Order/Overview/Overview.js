import React, { Component, Fragment } from "react"
// eslint-disable-next-line
import { get } from "immutable"
import { CSSTransition } from "react-transition-group"

class Overview extends Component {
  render() {
    return (
      <Fragment>
        <div className="order-no">{this.props.order.get("order_no")}</div>
        <div className="style-no">
          <i className="fas fa-at" />
          {this.props.order.get("style_no")}
        </div>
        <table className="overview">
          <tbody>
            <tr>
              <td>Buyer:</td>
              <td>{this.props.order.get("buyer")}</td>
            </tr>
            <tr>
              <td>Shipment Date:</td>
              <td>{this.props.order.get("shipment_date")}</td>
            </tr>
          </tbody>
        </table>
        <button className="more-btn" onClick={this.props.handleToggleMore}>
          Show more
          <i
            className={
              this.props.showMore ? "fas fa-caret-up" : "fas fa-caret-down"
            }
          />
        </button>

        <CSSTransition
          in={this.props.showMore}
          timeout={500}
          classNames="slide-down"
          unmountOnExit
        >
          <table className="overview">
            <tr>
              <td>Created By:</td>
              <td>{this.props.order.get("createdBy")}</td>
            </tr>
            <tr>
              <td>Entry Date:</td>
              <td>
                {new Date(this.props.order.get("createdAt")).toDateString()}
              </td>
            </tr>
          </table>
        </CSSTransition>
      </Fragment>
    )
  }
}

export default Overview
