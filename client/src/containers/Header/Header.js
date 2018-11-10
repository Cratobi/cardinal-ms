import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { get, getIn } from 'immutable'
import { withRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import * as actions from '../../store/actions/index'

import HeaderLayout from '../../components/Layout/Header/Header'
import ModalLayout from '../../components/Layout/Modal/Modal'

class Header extends Component {
  state = {
    form: {
      new_company: '',
      company: '',
      new_buyer: '',
    },
    accountMenu: false,
    notificationMenu: false,
    searchFocus: false,
    notificationUnread: 5,
    searchQuery: '',
    settingsModal: false,
  }
  // Menu
  handleSearchChange = e => {
    const state = this.state
    state.searchQuery = e.target.value
    this.setState(state)
    this.props.searchOrder(this.state.searchQuery)
  }
  handleSearchFocus = () => {
    const state = this.state
    state.accountMenu = false
    state.notificationMenu = false
    state.searchFocus = !state.searchFocus
    this.setState(state)
  }
  handleMenuAccount = action => {
    this.setState({
      searchFocus: false,
      notificationMenu: false,
      accountMenu: action,
    })
  }
  handleMenuNotification = actions => {
    this.setState({
      notificationUnread: 0,
      searchFocus: false,
      accountMenu: false,
      notificationMenu: actions,
    })
  }
  // Modals
  handleModalSettings = action => {
    this.setState({
      searchFocus: false,
      accountMenu: false,
      notificationMenu: false,
      settingsModal: action,
    })
  }
  handleDashboardLink = () => {
    this.setState({
      searchFocus: false,
      accountMenu: false,
      notificationMenu: false,
    })
    this.props.history.push('/dashboard')
  }
  // Forms
  handleFormChange = e => {
    const state = { ...this.state }
    state.form[e.target.name] = e.target.value
    this.setState(state)
  }
  handleNewCompany = e => {
    e.preventDefault()

    this.handleModalDashboard(false)
    this.handleMenuAccount(false)
    this.setState({
      form: {
        new_company: '',
        company: '',
        new_buyer: '',
      },
    })
    this.props.addCompany({
      name: this.state.form.new_company,
    })
    this.props.fetchCompanies()
  }
  handleNewBuyer = e => {
    e.preventDefault()

    this.props.addBuyer({
      company: this.state.form.company,
      name: this.state.form.new_buyer,
    })

    this.handleModalDashboard(false)
    this.handleMenuAccount(false)
    this.setState({
      form: {
        new_company: '',
        company: '',
        new_buyer: '',
      },
    })
  }

  render() {
    return this.props.userInfo ? (
      <Fragment>
        {/* Header Bar */}
        <HeaderLayout
          userInfo={this.props.userInfo}
          searchResult={this.props.search_result}
          searchQuery={this.state.searchQuery}
          searchEmpty={this.state.searchQuery ? true : false}
          searchFocus={this.state.searchFocus}
          accountMenu={this.state.accountMenu}
          notificationMenu={this.state.notificationMenu}
          notificationUnread={this.state.notificationUnread}
          backBtn={this.props.history.location.pathname !== '/'}
          // Handlers
          handleSearchChange={this.handleSearchChange}
          handleSearchFocus={this.handleSearchFocus}
          handleMenuAccount={this.handleMenuAccount}
          handleMenuNotification={this.handleMenuNotification}
          handleModalSettings={this.handleModalSettings}
          handleDashboardLink={this.handleDashboardLink}
        />
        {/* Modals */}
        <CSSTransition
          in={this.state.settingsModal}
          timeout={250}
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
                  onClick={() => this.handleModalSettings(false)}
                  className="btn btn-success m-l-1"
                >
                  Save Change
                </div>
              </div>
            }
            handleModal={this.handleModalSettings}
          >
            <div className="body-header">
              <span className="txt-ligher" />
            </div>
            <div className="body-header d-flex flex-j-between flex-a-baseline">
              <span className="txt txt-ligher">Account setting</span>
            </div>
            <form className="body-content">
              <div className="form-inline-input">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  disabled
                  placeholder="Name"
                  defaultValue={this.props.userInfo.get('name')}
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
                  defaultValue={this.props.userInfo.get('username')}
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
            </form>
          </ModalLayout>
        </CSSTransition>
      </Fragment>
    ) : null
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.getIn(['auth', 'userInfo']),
    search_result: state.getIn(['order', 'search_result']),
    companies: state.getIn(['buyer', 'companies']),
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchOrder: query => dispatch(actions.searchOrder(query)),
    fetchCompanies: () => dispatch(actions.fetchCompanies()),
    resetCompanies: () => dispatch(actions.resetCompanies()),
    addCompany: payload => dispatch(actions.addCompany(payload)),
    addBuyer: payload => dispatch(actions.addBuyer(payload)),
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Header),
)
