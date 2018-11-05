import React, { Component, Fragment } from 'react'
import { ToastContainer, ToastStore } from 'react-toasts'
import ReactPasswordStrength from 'react-password-strength'

const SelectOption = props => <option value={props.value}>{props.name}</option>

class Registration extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer store={ToastStore} lightBackground />
        <div className="dashboard-card-container">
          <div className="body-header d-flex flex-j-between flex-a-baseline">
            <h5>Register</h5>
            <div className="btn btn-chip btn-lighter p-r-1 p-l-1">
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
              <label className="form-label">Full Name:</label>
              <input
                type="text"
                className="form-input"
                name="newuser_name"
                placeholder="e.g. Abdul Karim"
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
          </form>
        </div>
      </Fragment>
    )
  }
}

export default Registration
