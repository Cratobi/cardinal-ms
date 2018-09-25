import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
import { get, getIn } from "immutable"
import { withRouter } from "react-router-dom"
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
    state.accountFocus = false
    state.notificationClick = false
    state.accountClick = !state.accountClick
    this.setState(state)
  }
  handleNotificationClick = () => {
    const state = this.state
    state.notificationUnread = 0
    state.searchFocus = false
    state.accountFocus = false
    state.accountClick = false
    state.notificationClick = !state.notificationClick
    this.setState(state)
  }
  handleSettingsModal = () => {
    const state = this.state
    state.searchFocus = false
    state.accountFocus = false
    state.accountClick = false
    state.notificationClick = false
    state.settingsModal = !state.settingsModal
    this.setState(state)
  }

  render() {
    return this.props.userInfo ? (
      <Fragment>
        {this.state.settingsModal ? (
          <ModalLayout
            tittle="SETTINGS"
            footer={
              <div
                onClick={this.handleSettingsModal}
                className="btn btn-success"
              >
                Save Change
              </div>
            }
            handleSettingsModal={this.handleSettingsModal}
          >
            <div className="setting-title m-l-1">Account setting</div>
            <form className="setting-menu">
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
        ) : null}
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
          // handleSignout={this.props.handleSignout}
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
