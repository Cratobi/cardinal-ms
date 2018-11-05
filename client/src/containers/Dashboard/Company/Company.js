import React, { Component, Fragment } from 'react'
import { ToastContainer, ToastStore } from 'react-toasts'
import { CSSTransition } from 'react-transition-group'

const SelectOption = props => <option value={props.value}>{props.name}</option>

class Company extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer store={ToastStore} lightBackground />

        <div className="dashboard-card-container">
          <div className="body-header d-flex flex-j-between flex-a-baseline">
            <h5>Buyer</h5>
            <div className="btn btn-chip btn-lighter p-r-1 p-l-1">
              <b className="p-r">Manage buyers</b>
              <i className="fas fa-sliders-h" />
            </div>
          </div>
          <hr />
          <form className="body-content" onSubmit={this.props.handleNewBuyer}>
            {/* <form className="body-content" onSubmit={this.props.handleNewBuyer}> */}
            <div className="form-inline-input">
              <label className="form-label">Buyer Name:</label>
              <input
                type="text"
                className="form-input"
                name="new_buyer"
                placeholder="e.g. JBC"
                onChange={this.props.handleFormChange}
                value={this.props.state.new_buyer}
              />
            </div>
            <div className="form-inline-input">
              <label className="form-label">Buyer Company:</label>
              <select
                name="company"
                className="form-select"
                onChange={this.props.handleFormChange}
                placeholder="e.g. JBC"
                value={this.props.state.company}
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
            <div className="body-content-footer dashboard-content-footer">
              <input
                type="submit"
                className={`btn btn-dark${
                  this.props.state.new_buyer !== '' &&
                  this.props.state.company !== ''
                    ? ''
                    : ' btn-dark-disabled'
                }`}
                disabled={
                  this.props.state.new_buyer !== '' &&
                  this.props.state.company !== ''
                    ? false
                    : true
                }
                value="Add Buyer"
              />
            </div>
          </form>
          <div style={{ marginTop: '1rem' }} />
          <div className="body-header d-flex flex-j-between flex-a-baseline">
            <h5>Company</h5>
            <div className="btn btn-chip btn-lighter p-r-1 p-l-1">
              <b className="p-r">Manage companies</b>
              <i className="fas fa-sliders-h" />
            </div>
          </div>
          <hr />
          <form className="body-content" onSubmit={this.props.handleNewCompany}>
            <div className="form-inline-input">
              <label className="form-label">Company Name:</label>
              <input
                type="text"
                className="form-input"
                name="new_company"
                placeholder="e.g. H1Z1"
                onChange={this.props.handleFormChange}
                value={this.props.state.new_company}
              />
            </div>
            <div className="body-content-footer dashboard-content-footer">
              <input
                type="submit"
                className={`btn btn-dark${
                  this.props.state.new_company !== ''
                    ? ''
                    : ' btn-dark-disabled'
                }`}
                disabled={this.props.state.new_company !== '' ? false : true}
                value=" Add Company"
              />
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default Company
