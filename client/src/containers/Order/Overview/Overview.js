import React, { Component } from 'react'
// eslint-disable-next-line
import { get } from 'immutable'
import { CSSTransition } from 'react-transition-group'
import './Overview.css'

class Overview extends Component {
  handlePrint = () => {
    window.print()
  }

  render() {
    return (
      <div className="overview">
        <div className="card-header">
          <div className="title">{this.props.order.get('order_no')}</div>
          <button
            className="btn btn-chip btn-dark btn-dark-disabled p-l-1 p-r-1"
            disabled
            onClick={this.handlePrint}
          >
            <i className="fas fa-print" />
            <span className="p-l">Print All</span>
          </button>
        </div>
        <div className="order-no">{this.props.order.get('order_no')}</div>
        <div className="style-no">
          <i className="fas fa-at" />
          {this.props.order.get('style_no')}
        </div>
        <table className="overview">
          <tbody>
            <tr>
              <td>Shipment Date:</td>
              <td>
                {new Date(this.props.order.get('shipment_date')).toDateString()}
              </td>
            </tr>
            <tr>
              <td>Buyer:</td>
              <td>{this.props.order.get('buyer')}</td>
            </tr>
            <tr>
              <td>Item:</td>
              <td>{this.props.order.get('item')}</td>
            </tr>
            <tr>
              <td>Quantity:</td>
              <td>{this.props.order.get('quantity')}</td>
            </tr>
          </tbody>
        </table>
        <button className="more-btn" onClick={this.props.handleToggleMore}>
          Show more
          <CSSTransition
            in={this.props.showMore}
            timeout={250}
            classNames="rotate-180"
          >
            <i
              className={`fas fa-caret-down${
                this.props.showMore ? ' rotate-180' : ''
              }`}
            />
          </CSSTransition>
        </button>

        <CSSTransition
          in={this.props.showMore}
          timeout={250}
          classNames="slide-down"
          unmountOnExit
        >
          <table className="overview">
            <tr>
              <td>Order Id:</td>
              <td>{this.props.order.get('id')}</td>
            </tr>
            <tr>
              <td>Created By:</td>
              <td>{this.props.order.get('createdBy')}</td>
            </tr>
            <tr>
              <td>Entry Date:</td>
              <td>
                {new Date(this.props.order.get('createdAt')).toDateString()}
              </td>
            </tr>
          </table>
        </CSSTransition>
      </div>
    )
  }
}

export default Overview
