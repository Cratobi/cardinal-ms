import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
// eslint-disable-next-line
import { getIn, toJS } from "immutable"
import DayPickerInput from "react-day-picker/DayPickerInput"
import { DateUtils } from "react-day-picker"
import "react-day-picker/lib/style.css"
import * as actions from "../../store/actions/index"
import dateFnsFormat from "date-fns/format"
import dateFnsParse from "date-fns/parse"
import { CSSTransition } from "react-transition-group"
import "./Home.css"

import ModalLayout from "../../components/Layout/Modal/Modal"
import OrderCards from "../Orders/OrderCards"
import CardLoadingLayout from "../../components/Layout/Loading/CardLoading"

const SelectOption = props => <option value={props.value}>{props.name}</option>

class Home extends Component {
  state = {
    draftModal: false,
    new_buyer: "",
    draft_metadata: {
      buyer: "H1Z1",
      order_no: "",
      shipment_date: new Date(),
      style_no: "",
      item: "",
      quantity: ""
    }
  }
  componentWillMount() {
    this.props.fetchOrders(null, true)
    this.props.fetchBuyers()
  }
  handleChange = e => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }
  handleFormChange = e => {
    const state = { ...this.state }
    state.draft_metadata[e.target.name] = e.target.value
    this.setState(state)
  }
  handleDateChange = date => {
    const state = { ...this.state }
    state.draft_metadata.shipment_date = date
    this.setState(state)
  }

  sendDraftMetadata = e => {
    e.preventDefault()
    const draft = { ...this.state.draft_metadata }
    draft.tabledata = this.props.tabledata.toJS()
    this.props.sendDraftMetadata(draft, this.props.history)
  }
  handleOrderModal = action => {
    if (action === true) {
      this.props.fetchBuyers()
    } else {
      this.props.resetBuyers()
    }
    const state = this.state
    state.draftModal = action
    this.setState(state)
  }
  parseDate = (str, format, locale) => {
    const parsed = dateFnsParse(str, format, { locale })
    if (DateUtils.isDate(parsed)) {
      return parsed
    }
    return undefined
  }
  formatDate = (date, format, locale) => {
    return dateFnsFormat(date, format, { locale })
  }

  render() {
    return (
      <div className="container home-container">
        <div className="home-mm">
          <h4>FLAXEN GROUP</h4>
          <span className="txt-light"> - beta 2.0 - </span>
        </div>
        <div className="home-cards-header">
          <span className="recent-txt">
            <span className="txt">Recent Orders</span>
            <i className="fas fa-circle small-icon hide-s p-r" />
            <Link className="txt txt-link" to="/order">
              see all orders
            </Link>
          </span>
          <Link className="btn btn-dark btn-chip btn hide-l" to="/order">
            <span className="p-r">All orders</span>
            <i className="  fas fa-file-contract" />
          </Link>
          <span className="d-flex">
            <Link className="btn btn-dark btn-chip" to="/draft">
              <span className="p-r">Draft</span>
              <i className="fas fa-inbox" />
            </Link>
            <button
              className="btn btn-chip btn-success"
              onClick={() => this.handleOrderModal(true)}
            >
              <span className="p-r">Add order</span>
              <i className="fas fa-plus" />
            </button>
          </span>
        </div>
        <div className="home-cards-container order-cards-small">
          {this.props.orders ? (
            <OrderCards orders={this.props.orders} />
          ) : (
            <CardLoadingLayout orders={20} />
          )}
        </div>

        {/* MODAL */}

        <CSSTransition
          in={this.state.draftModal}
          timeout={500}
          classNames="anim-modal"
          unmountOnExit
        >
          <ModalLayout
            key="1"
            tittle="ADD ORDER"
            modalState={this.state.draftModal}
            footer={
              <div onClick={this.sendDraftMetadata} className="btn btn-success">
                Create Order
              </div>
            }
            handleModalClose={() => this.handleOrderModal(false)}
          >
            <form className="modal-menu" onSubmit={this.sendDraftMetadata}>
              <div className="form-inline-input">
                <label className="form-label">Add a Buyer:</label>
                <input
                  type="text"
                  name="new_buyer"
                  className="form-input"
                  placeholder="e.g. JBC"
                  autoComplete="off"
                  onChange={this.handleChange}
                  value={this.state.new_buyer}
                />
                <input type="submit" className="btn btn-dark" value="Add" />
              </div>
            </form>
            <form className="modal-menu" onSubmit={this.sendDraftMetadata}>
              <div className="form-inline-input">
                <label className="form-label">Buyer:</label>

                <select
                  name="company"
                  className="form-select"
                  onChange={this.handleChange}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose Buyer
                  </option>
                  {this.props.buyers ? (
                    this.props.buyers.map((data, index) => (
                      <SelectOption key={index} value={data} name={data} />
                    ))
                  ) : (
                    <option value="" disabled>
                      Loading...
                    </option>
                  )}
                </select>
              </div>
              <div className="form-inline-input">
                <label className="form-label">Shipment Date:</label>
                <DayPickerInput
                  onDayChange={day => this.handleDateChange(day)}
                  keepFocus={false}
                  formatDate={this.formatDate}
                  format="D/M/YYYY"
                  parseDate={this.parseDate}
                  value={this.state.draft_metadata.shipment_date}
                  placeholder={`e.g. ${dateFnsFormat(new Date(), "D/M/YYYY")}`}
                />
              </div>
              <div className="form-inline-input">
                <label className="form-label">Order no:</label>
                <input
                  type="text"
                  name="order_no"
                  className="form-input"
                  placeholder="e.g. 12345"
                  autoComplete="off"
                  onChange={this.handleFormChange}
                  value={this.state.draft_metadata.order_no}
                />
              </div>
              <div className="form-inline-input">
                <label className="form-label">Style no: </label>
                <input
                  type="text"
                  name="style_no"
                  className="form-input"
                  placeholder="e.g. ABC X123456"
                  autoComplete="off"
                  onChange={this.handleFormChange}
                  value={this.state.draft_metadata.style_no}
                />
              </div>
              <div className="form-inline-input">
                <label className="form-label">Item: </label>
                <input
                  type="text"
                  name="item"
                  className="form-input"
                  placeholder="e.g. T-Shirt"
                  autoComplete="off"
                  onChange={this.handleFormChange}
                  value={this.state.draft_metadata.item}
                />
              </div>
              <div className="form-inline-input">
                <label className="form-label">Quantity: </label>
                <input
                  type="number"
                  name="quantity"
                  className="form-input"
                  placeholder="e.g. 1000"
                  autoComplete="off"
                  onChange={this.handleFormChange}
                  value={this.state.draft_metadata.quantity}
                />
              </div>
              <input type="submit" className="hidden" value="Create Order" />
            </form>
          </ModalLayout>
        </CSSTransition>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.getIn(["order", "orders"]),
    orders_count: state.getIn(["order", "orders_count"]),
    buyers: state.getIn(["buyer", "buyers"]),
    tabledata: state.getIn(["draft", "tabledata"])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: (page, recent) => dispatch(actions.fetchOrders(page, recent)),
    resetOrders: () => dispatch(actions.resetOrders()),
    fetchBuyers: () => dispatch(actions.fetchBuyers()),
    resetBuyers: () => dispatch(actions.resetBuyers()),
    sendDraftMetadata: (payload, router) =>
      dispatch(actions.sendDraftMetadta(payload, router))
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
)
