import React, { Component } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
import { getIn } from "immutable"
import { withRouter } from "react-router-dom"
import Cookie from "js-cookie"
import Axios from "axios"
import * as actions from "../../store/actions/index"
import "./Header.css"

import HeaderLayout from "../../components/Layout/Header/Header"

class Header extends Component {
  state = {
    searchFocus: false,
    accountClick: false,
    notificationClick: false,
    notificationUnread: 5,
    searchQuery: ""
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
  handleUnauthenticate = () => {
    const token = Cookie.get("x-auth")
    if (token) {
      Axios({
        method: "delete",
        url: "http://localhost:3001/auth/signout",
        headers: {
          "x-auth": token
        }
      })
        .then(() => {
          Cookie.remove("x-auth")
          this.props.unauthenticate()
          this.props.history.push({ pathname: "/signin" })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  render() {
    return (
      <div>
        <HeaderLayout
          searchResult={this.props.search_result}
          searchQuery={this.state.searchQuery}
          searchEmpty={this.state.searchQuery ? true : false}
          searchFocus={this.state.searchFocus}
          handleSearchChange={this.handleSearchChange}
          handleSearchFocus={this.handleSearchFocus}
          handleAccountClick={this.handleAccountClick}
          accountClick={this.state.accountClick}
          handleNotificationClick={this.handleNotificationClick}
          notificationClick={this.state.notificationClick}
          notificationUnread={this.state.notificationUnread}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authorization: state.getIn(["init", "authorization"]),
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
