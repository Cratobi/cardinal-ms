import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
// eslint-disable-next-line
import { getIn, size } from 'immutable'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'
import * as actions from '../../store/actions/index'
import { CSSTransition } from 'react-transition-group'
import './Home.css'

import ModalLayout from '../../components/Layout/Modal/Modal'
import OrderCards from '../Orders/OrderCards'
import CardLoadingLayout from '../../components/Layout/Loading/CardLoading'
// import LoadingLayout from '../../components/Layout/Loading/Loading'

const SelectOption = props => <option value={props.value}>{props.name}</option>

class Home extends Component {
  state = {
    draftModal: false,
    clicked: false,
    new_buyer: '',
    searchQuery: '',
    searchFocus: false,
    formFilled: false,
    draft_metadata: {
      buyer: '',
      order_no: '',
      shipment_date: new Date(),
      style_no: '',
      item: '',
      quantity: '',
    },
  }
  componentWillMount() {
    this.props.fetchOrders(null, true)
    this.props.fetchBuyers()
  }
  handleSearchChange = e => {
    this.setState({ searchQuery: e.target.value })
    this.props.searchOrder(e.target.value)
  }
  handleSearchFocus = action => {
    this.setState({ clicked: true, searchFocus: action })
  }
  handleFormChange = e => {
    const state = { ...this.state }
    state.draft_metadata[e.target.name] = e.target.value
    this.setState(state)
    if (Object.values(this.state.draft_metadata).every(val => val !== '')) {
      this.setState({ formFilled: true })
    } else {
      this.setState({ formFilled: false })
    }
  }
  handleDateChange = date => {
    const state = { ...this.state }
    state.draft_metadata.shipment_date = date
    this.setState(state)
  }

  sendDraftMetadata = e => {
    e.preventDefault()

    if (this.state.formFilled) {
      const draft = { ...this.state.draft_metadata }
      draft.tabledata = this.props.tabledata.toJS()
      this.props.sendDraftMetadata(draft, this.props.history)
    }
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
          <div className="home-mm-content">
            <h4>FLAXEN GROUP</h4>
            <input
              type="text"
              className="search-input-home"
              placeholder="SEARCH"
              onChange={this.handleSearchChange}
              onFocus={() => this.handleSearchFocus(true)}
              // onBlur={
              //   !this.state.clicked ? () => this.handleSearchFocus(false) : null
              // }
              value={this.searchQuery}
            />
            {this.state.searchFocus ? (
              <span
                className="backdrop backdrop-transparent backdrop-search"
                onClick={() => this.handleSearchFocus(false)}
              />
            ) : null}
            <CSSTransition
              in={this.state.searchFocus}
              timeout={250}
              classNames="fade"
              unmountOnExit
            >
              <div className="menu-search-home">
                <div className="scrollable">
                  {this.props.search_result && this.state.searchQuery !== '' ? (
                    <div>
                      {this.props.search_result.map((order, index) => (
                        <Link
                          key={index}
                          to={`order/${order.get('id')}/overview`}
                          onClick={() => this.handleSearchFocus(false)}
                          className="search-result"
                        >
                          {order.get('order_no')}
                          <span className="txt-small">
                            {order.get('style_no')}
                          </span>
                        </Link>
                      ))}
                      {this.props.search_result.size === 0 ? (
                        <div className="help-txt">No result :(</div>
                      ) : null}
                    </div>
                  ) : this.state.searchQuery === '' ? (
                    <div className="help-txt">
                      Search order or add @ to search style
                    </div>
                  ) : (
                    <div className="help-txt">Searching...</div>
                  )}
                </div>
              </div>
            </CSSTransition>
            {/* <span className="txt-light"> - beta 2.0 - </span> */}
          </div>
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
          timeout={250}
          classNames="anim-modal"
          unmountOnExit
        >
          <ModalLayout
            key="1"
            tittle="ADD ORDER"
            modalState={this.state.draftModal}
            footer={
              <div
                onClick={this.sendDraftMetadata}
                className={`btn btn-success${
                  !this.state.formFilled ? ' btn-success-disabled' : ''
                }`}
              >
                Create Order
              </div>
            }
            handleModal={() => this.handleOrderModal(false)}
          >
            <form onSubmit={this.sendDraftMetadata}>
              <div className="form-inline-input">
                <label className="form-label">Buyer:</label>

                <select
                  name="buyer"
                  className="form-select"
                  onChange={this.handleFormChange}
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
                  placeholder={`e.g. ${dateFnsFormat(new Date(), 'D/M/YYYY')}`}
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
              <input
                type="submit"
                className="hidden"
                disabled={this.state.formFilled ? false : true}
                value="Create Order"
              />
            </form>
          </ModalLayout>
        </CSSTransition>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.getIn(['order', 'orders']),
    orders_count: state.getIn(['order', 'orders_count']),
    buyers: state.getIn(['buyer', 'buyers']),
    tabledata: state.getIn(['draft', 'tabledata']),
    search_result: state.getIn(['order', 'search_result']),
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: (page, recent) => dispatch(actions.fetchOrders(page, recent)),
    resetOrders: () => dispatch(actions.resetOrders()),
    fetchBuyers: () => dispatch(actions.fetchBuyers()),
    resetBuyers: () => dispatch(actions.resetBuyers()),
    searchOrder: query => dispatch(actions.searchOrder(query)),
    sendDraftMetadata: (payload, router) =>
      dispatch(actions.sendDraftMetadta(payload, router)),
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home),
)
