import React, { Component } from "react"
import { get, getIn } from "immutable"

class PriceAndConsumtion extends Component {
  state = {
    show_more: false,
    buyer: "OKA",
    order_no: "ASD234SDW-SDW",
    style_no: "DEaudWSDW23243UHDa"
  }
  handleToggleMore = () => {
    const state = { ...this.state }
    state.show_more = !state.show_more
    this.setState(state)
  }

  render() {
    return (
      <div>
        <div className="order-no">{this.state.order_no}</div>
        <div className="style-no">
          <i class="fas fa-at" />
          {this.state.style_no}
        </div>
        <table className="overview">
          <tr>
            <td>Shipment Date:</td>
            <td>12/02/2012</td>
          </tr>
          <tr>
            <td>Buyer:</td>
            <td>{this.state.buyer}</td>
          </tr>
          <tr>
            <td>Order no:</td>
            <td>{this.state.order_no}</td>
          </tr>
        </table>
        <button className="more-btn" onClick={this.handleToggleMore}>
          Show more
          <i
            className={
              this.state.show_more ? "fas fa-caret-up" : "fas fa-caret-down"
            }
          />
        </button>
        {this.state.show_more ? (
          <table className="overview">
            <tr>
              <td>Shipment Date:</td>
              <td>12/02/2012</td>
            </tr>
            <tr>
              <td>Buyer:</td>
              <td>{this.state.buyer}</td>
            </tr>
            <tr>
              <td>Order no:</td>
              <td>{this.state.order_no}</td>
            </tr>
          </table>
        ) : null}
      </div>
    )
  }
}

export default PriceAndConsumtion
