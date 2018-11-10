import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { get, getIn } from 'immutable'
import { NavLink, Route, Redirect, withRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import * as actions from '../../store/actions'
import './Dashboard.css'

import Company from './Company/Company'
import Registration from './Registration/Registration'

class Dashboard extends Component {
  state = {
    new_company: '',
    company: '',
    new_buyer: '',
    newuser_company: '',
    newuser_name: '',
    newuser_username: '',
    newuser_password: '',
    newuser_password_isValid: false,
    newuser_power: 'user',
  }
  componentWillMount() {
    this.props.fetchUser()
    this.props.fetchCompanies()
  }
  componentWillUnmount() {
    this.props.resetUser()
    this.props.resetCompanies()
  }

  handleFormChange = e => {
    const newObj = {}
    newObj[e.target.name] = e.target.value
    this.setState(newObj)
  }
  handleFormPasswordChange = payload => {
    const newObj = {}
    // console.log(ReactPasswordStrength)
    newObj.newuser_password = payload.password
    newObj.newuser_password_isValid = payload.isValid
    this.setState(newObj)
  }
  handleNewUser = (e, clearFunc) => {
    e.preventDefault()

    this.props.addUser({
      company: this.state.newuser_company,
      name: this.state.newuser_name,
      username: this.state.newuser_username,
      password: this.state.newuser_password,
      power: this.state.newuser_power,
    })
    clearFunc.clear()
    this.setState({
      newuser_company: '',
      newuser_name: '',
      newuser_username: '',
      newuser_password: '',
      newuser_password_isValid: false,
      newuser_power: 'user',
    })
    console.log('exe')
  }

  handleNewCompany = e => {
    e.preventDefault()

    this.props.addCompany({
      name: this.state.new_company,
    })
    this.setState({ new_company: '' })

    this.props.resetCompanies()
    this.props.fetchCompanies()
  }
  handleNewBuyer = e => {
    e.preventDefault()

    this.props.addBuyer({
      company: this.state.company,
      name: this.state.new_buyer,
    })
    this.setState({
      company: '',
      new_buyer: '',
    })
  }

  render() {
    return this.props.userInfo ? (
      <Fragment>
        {this.props.userInfo.get('power') !== 'admin'
          ? this.props.history.push('/unauthorized')
          : null}
        <main className="container duo-grid">
          <aside className="side-tab">
            <CSSTransition
              in={true}
              timeout={250}
              classNames="slide-right"
              unmountOnExit
            >
              <ul>
                <NavLink activeClassName="active" to={`/dashboard/company`}>
                  <li>
                    <i className="fas fa-building" />
                    <span className="text">Company</span>
                  </li>
                </NavLink>
                <NavLink to={`/dashboard/newuser`}>
                  <li>
                    <i className="fas fa-users" />
                    <span className="text">Account</span>
                  </li>
                </NavLink>
              </ul>
            </CSSTransition>
          </aside>
          <CSSTransition
            in={true}
            timeout={250}
            classNames="fade"
            unmountOnExit
          >
            <article className="card card-body">
              <Route
                path="/dashboard"
                exact
                render={() => <Redirect exact to={`/dashboard/company`} />}
              />
              <Route
                path="/dashboard/company"
                render={() => (
                  <Company
                    handleFormChange={this.handleFormChange}
                    handleNewBuyer={this.handleNewBuyer}
                    deleteBuyer={this.props.deleteBuyer}
                    handleNewCompany={this.handleNewCompany}
                    deleteCompany={this.props.deleteCompany}
                    companies={this.props.companies}
                    state={this.state}
                  />
                )}
              />
              <Route
                path="/dashboard/newuser"
                render={() => (
                  <Registration
                    handleFormChange={this.handleFormChange}
                    handleFormPasswordChange={this.handleFormPasswordChange}
                    handleNewUser={this.handleNewUser}
                    deleteUser={this.props.deleteUser}
                    companies={this.props.companies}
                    users={this.props.users}
                    state={this.state}
                  />
                )}
              />
            </article>
          </CSSTransition>
        </main>
      </Fragment>
    ) : null
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.getIn(['auth', 'userInfo']),
    companies: state.getIn(['buyer', 'companies']),
    users: state.getIn(['auth', 'users']),
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchCompanies: () => dispatch(actions.fetchCompanies()),
    resetCompanies: () => dispatch(actions.resetCompanies()),
    addCompany: payload => dispatch(actions.addCompany(payload)),
    deleteCompany: id => dispatch(actions.deleteCompany(id)),
    addBuyer: payload => dispatch(actions.addBuyer(payload)),
    deleteBuyer: payload => dispatch(actions.deleteBuyer(payload)),
    fetchUser: () => dispatch(actions.fetchUser()),
    resetUser: () => dispatch(actions.fetchUser()),
    addUser: payload => dispatch(actions.addUser(payload)),
    deleteUser: payload => dispatch(actions.deleteUser(payload)),
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Dashboard),
)
