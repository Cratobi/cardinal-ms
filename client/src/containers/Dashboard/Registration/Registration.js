import React, { Component, Fragment } from 'react'
import { ToastContainer, ToastStore } from 'react-toasts'
import ReactPasswordStrength from 'react-password-strength'
import { CSSTransition } from 'react-transition-group'

import ModalLayout from '../../../components/Layout/Modal/Modal'

const SelectOption = props => <option value={props.value}>{props.name}</option>
const ListItem = props => (
  <li>
    <div className="txt">
      {props.name} &nbsp; <i className="txt-light">({props.username})</i>
    </div>
    <button
      className="btn btn-round btn-caution"
      onClick={e => {
        e.preventDefault()

        props.handleUserDelete({
          id: props.id,
          name: props.name,
          username: props.username,
          company: props.company,
        })
      }}
    >
      <i className="fas fa-trash" />
    </button>
  </li>
)

class Registration extends Component {
  state = {
    modalUser: false,
  }
  handleModalUser = action => {
    this.setState({
      modalUser: action,
    })
  }
  handleUserDelete = payload => {
    this.props.deleteUser(payload)
  }

  render() {
    return (
      <Fragment>
        <ToastContainer store={ToastStore} lightBackground />
        <div className="dashboard-card-container">
          <div className="body-header d-flex flex-j-between flex-a-baseline">
            <h5>Register</h5>
            <div
              className="btn btn-chip btn-lighter p-r-1 p-l-1"
              onClick={() => this.handleModalUser(true)}
            >
              <b className="p-r">Manage users</b>
              <i className="fas fa-sliders-h" />
            </div>
          </div>
          <hr />
          <form
            className="body-content"
            onSubmit={e =>
              this.props.handleNewUser(e, this.ReactPasswordStrength)
            }
          >
            <div className="form-inline-input">
              <label className="form-label">Company:</label>
              <select
                name="newuser_company"
                className="form-select"
                onChange={this.props.handleFormChange}
                placeholder="e.g. JBC"
                value={this.props.state.newuser_company}
              >
                <option value="">Choose Company</option>
                {this.props.companies ? (
                  this.props.companies.map((data, index) => (
                    <SelectOption
                      key={index}
                      value={data.get('name')}
                      name={data.get('name')}
                    />
                  ))
                ) : (
                  <option value="" disabled>
                    Loading...
                  </option>
                )}
              </select>
            </div>
            <div className="form-inline-input">
              <label className="form-label">Full Name:</label>
              <input
                type="text"
                className="form-input"
                name="newuser_name"
                placeholder="e.g. SM Riyadh Hussain Rabbi"
                autoComplete="off"
                onChange={this.props.handleFormChange}
                value={this.props.state.newuser_name}
              />
            </div>
            <div className="form-inline-input">
              <label className="form-label">Username:</label>
              <input
                type="text"
                className="form-input"
                name="newuser_username"
                placeholder="e.g. abdul.karim"
                autoComplete="off"
                onChange={this.props.handleFormChange}
                value={this.props.state.newuser_username}
              />
            </div>
            <div className="form-inline-input">
              <label className="form-label">Password:</label>
              <ReactPasswordStrength
                className="custom-ReactPasswordStrength"
                ref={ref => (this.ReactPasswordStrength = ref)}
                minLength={8}
                minScore={1}
                scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
                changeCallback={this.props.handleFormPasswordChange}
                defaultValue={this.props.state.newuser_password}
                inputProps={{
                  name: 'newuser_password',
                  className:
                    'form-input custom-ReactPasswordStrength-form-input',
                  autoComplete: 'off',
                  value: this.props.state.newuser_password,
                  placeholder: 'Must have 8 characters',
                }}
              />
            </div>
            <div className="form-inline-input">
              <label className="form-label">Power:</label>
              <select
                name="newuser_power"
                className="form-select"
                onChange={this.props.handleFormChange}
                placeholder="e.g. JBC"
                value={this.props.state.newuser_power}
              >
                <option value="user">User</option>
                <option value="moderator">Moderator</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="body-content-footer dashboard-content-footer">
              <input
                type="submit"
                className={`btn btn-dark${
                  this.props.state.newuser_company !== '' &&
                  this.props.state.newuser_name !== '' &&
                  this.props.state.newuser_username !== '' &&
                  this.props.state.newuser_password !== '' &&
                  this.props.state.newuser_password_isValid !== false
                    ? ''
                    : ' btn-dark-disabled'
                }`}
                disabled={
                  this.props.state.newuser_company !== '' &&
                  this.props.state.newuser_name !== '' &&
                  this.props.state.newuser_username !== '' &&
                  this.props.state.newuser_password !== '' &&
                  this.props.state.newuser_password_isValid !== false
                    ? false
                    : true
                }
                value="Register user"
              />
            </div>
            <CSSTransition
              in={this.state.modalUser}
              timeout={250}
              classNames="anim-modal"
              unmountOnExit
            >
              <ModalLayout tittle="USERS" handleModal={this.handleModalUser}>
                {this.props.users ? (
                  this.props.users.map((userInCompany, index) => (
                    <div className="p-b-1" key={index}>
                      <label className="item_list_label">
                        {userInCompany.get('company')}
                      </label>
                      <ul className="item_list">
                        {userInCompany.get('users').map((user, index) => (
                          <ListItem
                            key={index}
                            handleUserDelete={this.handleUserDelete}
                            id={user.get('_id')}
                            company={user.get('company')}
                            username={user.get('username')}
                            name={user.get('name')}
                          />
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <option value="" disabled>
                    Loading...
                  </option>
                )}
              </ModalLayout>
            </CSSTransition>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default Registration
