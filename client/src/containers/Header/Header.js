import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
import { get, getIn } from "immutable"
import { withRouter } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import * as actions from "../../store/actions/index"

import HeaderLayout from "../../components/Layout/Header/Header"
import ModalLayout from "../../components/Layout/Modal/Modal"

class Header extends Component {
  state = {
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
  handleSettingsModal = () => {
    const state = this.state
    state.searchFocus = false
    state.accountClick = false
    state.notificationClick = false
    state.settingsModal = !state.settingsModal
    this.setState(state)
  }
  handleControlModal = () => {
    const state = this.state
    state.searchFocus = false
    state.accountClick = false
    state.notificationClick = false
    state.controlModal = !state.controlModal
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
                  placeholder="Password"
                />
                <div
                  onClick={this.handleSettingsModal}
                  className="btn btn-success m-l-1"
                >
                  Save Change
                </div>
              </div>
            }
            handleModalClose={this.handleSettingsModal}
          >
            <div className="setting-title m-l-1">Account setting</div>
            <form className="modal-menu">
              <div className="form-inline-input">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
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
        <CSSTransition
          in={this.state.controlModal}
          timeout={500}
          classNames="anim-modal"
          unmountOnExit
        >
          {/* CONTROL PANNEL MODAL */}
          <ModalLayout
            tittle="CONTROL PANNEL"
            // footer={
            // <div onClick={this.handleControlModal} className="btn btn-success">
            //   Save Change
            // </div>
            // }
            handleModalClose={this.handleControlModal}
          >
            <div className="setting-title d-flex flex-a-baseline m-l-1">
              Buyer
              <div
                onClick={this.handleSettingsModal}
                className="btn btn-round btn-transparent"
              >
                <i className="fas fa-sliders-h" />
              </div>
            </div>
            <form className="modal-menu">
              <div className="form-inline-input">
                <label className="form-label">Buyer Name:</label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  placeholder="e.g. JBC"
                />
              </div>
              <div className="form-inline-input">
                <label className="form-label">Buyer Company:</label>
                <select
                  name="buyer-company"
                  className="form-select"
                  // onChange={this.handleFormChange}
                  placeholder="e.g. JBC"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose Company
                  </option>
                  <option value="" disabled>
                    H1Z1
                  </option>
                  {/* {this.props.buyers
                    ? this.props.buyers.map((data, index) => (
                        <BuyerOptions value={data} key={index} />
                      ))
                    : null} */}
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
              <div
                onClick={this.handleSettingsModal}
                className="btn btn-round btn-transparent"
              >
                <i className="fas fa-sliders-h" />
              </div>
            </div>
            <form className="modal-menu">
              <div className="form-inline-input">
                <label className="form-label">Company Name:</label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  placeholder="e.g. H1Z1"
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
          handleSettingsModal={this.handleSettingsModal}
          handleControlModal={this.handleControlModal}
        />
      </Fragment>
    ) : null
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.getIn(["auth", "userInfo"]),
    search_result: state.getIn(["order", "search_result"])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchOrder: query => dispatch(actions.searchOrder(query))
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
)
