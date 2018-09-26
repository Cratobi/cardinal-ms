import React, { Component, Fragment } from "react"
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

import ModalLayout from "../../components/Layout/Modal/Modal"

const BuyerOptions = props => <option value={props.value}>{props.value}</option>

class Home extends Component {
  state = {
    draftModal: false,
    new_buyer: "",
    draft_metadata: {
      // buyer: "",
      buyer: "H1Z1",
      order_no: "",
      shipment_date: new Date(),
      style_no: "",
      item: "",
      quantity: ""
    }
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
  handleDraftModal = () => {
    const state = this.state
    state.draftModal = !state.draftModal
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
      <Fragment>
        <br />
        <br />
        <br />
        <br />
        <Link to="/order">
          <button className="btn btn-dark">Orders</button>
        </Link>
        <Link to="/draft">
          <button className="btn btn-dark">Drafts</button>
        </Link>
        <br />
        <br />
        <button className="btn btn-success" onClick={this.handleDraftModal}>
          Add Order
        </button>
        {/*  */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/order">
          <button className="btn btn-dark">Orders</button>
        </Link>
        {/*  */}
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
            handleModalClose={this.handleDraftModal}
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
                  name="buyer"
                  className="form-select"
                  onChange={this.handleFormChange}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose buyer
                  </option>
                  {this.props.buyers
                    ? this.props.buyers.map((data, index) => (
                        <BuyerOptions value={data} key={index} />
                      ))
                    : null}
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
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    buyers: state.getIn(["order", "buyers"]),
    tabledata: state.getIn(["draft", "tabledata"])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchBuyers: () => dispatch(actions.fetchBuyers()),
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
