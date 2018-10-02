import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
import { get, getIn } from "immutable"
import { withRouter } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import * as actions from "../../store/actions/index"

import HeaderLayout from "../../components/Layout/Header/Header"
import ModalLayout from "../../components/Layout/Modal/Modal"

const SelectOption = props => <option value={props.value}>{props.name}</option>

class Header extends Component {
  state = {
    form: {
      new_company: "",
      company: "",
      new_buyer: ""
    },
    searchFocus: false,
    accountClick: false,
    notificationClick: false,
    notificationUnread: 5,
    searchQuery: "",
    controlModal: false,
    settingsModal: false
  }

  handleSearchChange = e => {
    const state = this.state
    state.searchQuery = e.target.value
    this.setState(state)
    this.props.searchOrder(this.state.searchQuery)
  }
  handleSearchFocus = () => {
    const state = this.state
    state.accountClick = false
    state.notificationClick = false
    state.searchFocus = !state.searchFocus
    this.setState(state)
  }
  handleAccountClick = () => {
    const state = this.state
    state.searchFocus = false
    state.notificationClick = false
    state.accountClick = !state.accountClick
    this.setState(state)
  }
  handleNotificationClick = () => {
    const state = this.state
    state.notificationUnread = 0
    state.searchFocus = false
    state.accountClick = false
    state.notificationClick = !state.notificationClick
    this.setState(state)
  }
  handleSettingsModalOpen = () => {
    const state = this.state
    state.searchFocus = false
    state.accountClick = false
    state.notificationClick = false
    state.settingsModal = true
    this.setState(state)
  }
  handleSettingsModalClose = () => {
    const state = this.state
    state.searchFocus = false
    state.accountClick = false
    state.notificationClick = false
    state.settingsModal = false
    this.setState(state)
  }
  handleControlModalOpen = () => {
    const state = this.state
    state.searchFocus = false
    state.accountClick = false
    state.notificationClick = false
    state.controlModal = true
    this.setState(state)
    this.props.fetchCompanies()
  }
  handleControlModalClose = () => {
    const state = this.state
    state.searchFocus = false
    state.accountClick = false
    state.notificationClick = false
    state.controlModal = false
    this.setState(state)
    this.props.resetCompanies()
  }
  handleFormChange = e => {
    const state = { ...this.state }
    state.form[e.target.name] = e.target.value
    this.setState(state)
  }
  handleNewCompany = e => {
    e.preventDefault()

    const payload = {
      name: this.state.form.new_company
    }
    this.props.addCompany(payload)

    this.handleControlModalClose()
    this.handleAccountClick()
    const state = { ...this.state }
    state.form.new_company = ""
    this.setState(state)
    this.props.fetchCompanies()
  }
  handleNewBuyer = e => {
    e.preventDefault()

    this.props.addBuyer({
      company: this.state.form.company,
      name: this.state.form.new_buyer
    })

    this.handleControlModalClose()
    this.handleAccountClick()
    const state = { ...this.state }
    state.form.company = ""
    state.form.new_buyer = ""
    this.setState(state)
  }

  render() {
    return this.props.userInfo ? (
      <Fragment>
        <CSSTransition
          in={this.state.settingsModal}
          timeout={500}
          classNames="anim-modal"
          unmountOnExit
        >
          <ModalLayout
            tittle="SETTINGS"
            footer={
              <div className="form-inline-input">
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  disabled
                  placeholder="Password"
                />
                <div
                  onClick={this.handleSettingsModalClose}
                  className="btn btn-success m-l-1"
                >
                  Save Change
                </div>
              </div>
            }
            handleModalClose={this.handleSettingsModalClose}
          >
            <div className="setting-title m-l-1">
              Account setting (Coming soon)
            </div>
            <form className="modal-menu">
              <div className="form-inline-input">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  disabled
                  placeholder="Name"
                  defaultValue={this.props.userInfo.get("name")}
                />
              </div>
              <div className="form-inline-input">
                <label className="form-label">Username: </label>
                <input
                  type="text"
                  className="form-input"
                  name="username"
                  disabled
                  placeholder="Username"
                  defaultValue={this.props.userInfo.get("username")}
                />
              </div>
              <div className="m-t-1 m-b-1" />
              <div className="form-inline-input">
                <label className="form-label">New Password: </label>
                <input
                  type="password"
                  name="new-password"
                  className="form-input"
                  placeholder="New Password"
                  disabled
                />
              </div>
              {/* <div className="form-inline-input">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Password"
                />
                <input
                  type="submit"
                  className="btn btn-dark"
                  disabled
                  Value="Change"
                />
              </div> */}
            </form>
          </ModalLayout>
        </CSSTransition>
        {/* <ModalLayout
          tittle="Password"
          footer={
            <div className="btn btn-success">
              Save Change
              <i className="fas fa-check" />
            </div>
          }
        >
          <form>
            <div className="form-inline-input">
              <label className="form-label">Password: </label>
              <input
                type="text"
                className="form-input"
                placeholder="Password"
              />
            </div>
          </form>
        </ModalLayout> */}
        {this.props.userInfo.power === "admin" ? (
          <CSSTransition
            in={this.state.controlModal}
            timeout={500}
            classNames="anim-modal"
            unmountOnExit
          >
            {/* CONTROL PANNEL MODAL */}
            <ModalLayout
              tittle="CONTROL PANNEL"
              handleModalClose={this.handleControlModalClose}
            >
              <div className="setting-title d-flex flex-a-baseline m-l-1">
                Buyer
                <div className="btn btn-round btn-transparent">
                  <i className="fas fa-sliders-h" />
                </div>
              </div>
              <form className="modal-menu" onSubmit={this.handleNewBuyer}>
                <div className="form-inline-input">
                  <label className="form-label">Buyer Name:</label>
                  <input
                    type="text"
                    className="form-input"
                    name="new_buyer"
                    placeholder="e.g. JBC"
                    onChange={this.handleFormChange}
                    value={this.state.form.new_buyer}
                  />
                </div>
                <div className="form-inline-input">
                  <label className="form-label">Buyer Company:</label>
                  <select
                    name="company"
                    className="form-select"
                    onChange={this.handleFormChange}
                    placeholder="e.g. JBC"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose Company
                    </option>
                    {this.props.companies ? (
                      this.props.companies.map((data, index) => (
                        <SelectOption key={index} value={data} name={data} />
                      ))
                    ) : (
                      <option value="" disabled>
                        Loading...
                      </option>
                    )}
                  </select>
                </div>
                <div className="m-t-1 m-b-1" />
                <input
                  type="submit"
                  className="btn btn-dark"
                  value=" Add Buyer"
                />
              </form>
              <div className="setting-title d-flex flex-a-baseline m-l-1">
                Company
                <div className="btn btn-round btn-transparent">
                  <i className="fas fa-sliders-h" />
                </div>
              </div>
              <form className="modal-menu" onSubmit={this.handleNewCompany}>
                <div className="form-inline-input">
                  <label className="form-label">Company Name:</label>
                  <input
                    type="text"
                    className="form-input"
                    name="new_company"
                    placeholder="e.g. H1Z1"
                    onChange={this.handleFormChange}
                    value={this.state.form.new_company}
                  />
                </div>
                <div className="m-t-1 m-b-1" />
                <input
                  type="submit"
                  className="btn btn-dark"
                  value=" Add Company"
                />
              </form>
            </ModalLayout>
          </CSSTransition>
        ) : null}
        <HeaderLayout
          userInfo={this.props.userInfo}
          searchResult={this.props.search_result}
          searchQuery={this.state.searchQuery}
          searchEmpty={this.state.searchQuery ? true : false}
          searchFocus={this.state.searchFocus}
          accountClick={this.state.accountClick}
          notificationClick={this.state.notificationClick}
          notificationUnread={this.state.notificationUnread}
          handleSearchChange={this.handleSearchChange}
          handleSearchFocus={this.handleSearchFocus}
          handleAccountClick={this.handleAccountClick}
          handleNotificationClick={this.handleNotificationClick}
          handleSettingsModalOpen={this.handleSettingsModalOpen}
          handleSettingsModalClose={this.handleSettingsModalClose}
          handleControlModalOpen={this.handleControlModalOpen}
          handleControlModalClose={this.handleControlModalClose}
        />
      </Fragment>
    ) : null
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.getIn(["auth", "userInfo"]),
    search_result: state.getIn(["order", "search_result"]),
    companies: state.getIn(["buyer", "companies"])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchOrder: query => dispatch(actions.searchOrder(query)),
    fetchCompanies: () => dispatch(actions.fetchCompanies()),
    resetCompanies: () => dispatch(actions.resetCompanies()),
    addCompany: payload => dispatch(actions.addCompany(payload)),
    addBuyer: payload => dispatch(actions.addBuyer(payload))
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
)
