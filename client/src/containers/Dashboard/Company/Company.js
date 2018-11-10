import React, { Component, Fragment } from 'react'
import { ToastContainer, ToastStore } from 'react-toasts'
import { CSSTransition } from 'react-transition-group'

import ModalLayout from '../../../components/Layout/Modal/Modal'

const SelectOption = props => <option value={props.value}>{props.name}</option>
const ListItem = props => (
  <li>
    <div className="txt">{props.children}</div>
    <button
      className="btn btn-round btn-caution"
      onClick={() =>
        props.handleDeleteItem(
          props.itemType,
          props.id,
          props.children,
          props.company_name,
        )
      }
    >
      <i className="fas fa-trash" />
    </button>
  </li>
)

class Company extends Component {
  state = {
    modalBuyer: false,
    modalCompany: false,
  }
  handleModalBuyer = action => {
    this.setState({
      modalBuyer: action,
    })
  }
  handleModalCompany = action => {
    this.setState({
      modalCompany: action,
    })
  }
  handleDeleteItem = (itemType, id, name, company_name) => {
    if (itemType === 'buyer') {
      this.props.deleteBuyer({ id, buyer_name: name, company_name })
    } else {
      this.props.deleteCompany({ id, company_name: name })
    }
  }

  render() {
    return (
      <Fragment>
        <ToastContainer store={ToastStore} lightBackground />

        <div className="dashboard-card-container">
          <div className="body-header d-flex flex-j-between flex-a-baseline">
            <h5>Buyer</h5>
            <div
              className="btn btn-chip btn-lighter p-r-1 p-l-1"
              onClick={() => this.handleModalBuyer(true)}
            >
              <b className="p-r">Manage buyers</b>
              <i className="fas fa-sliders-h" />
            </div>
          </div>
          <hr />
          <form className="body-content" onSubmit={this.props.handleNewBuyer}>
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
          <div style={{ marginTop: '4rem' }} />
          <div className="body-header d-flex flex-j-between flex-a-baseline">
            <h5>Company</h5>
            <div
              className="btn btn-chip btn-lighter p-r-1 p-l-1"
              onClick={() => this.handleModalCompany(true)}
            >
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
        <CSSTransition
          in={this.state.modalBuyer}
          timeout={250}
          classNames="anim-modal"
          unmountOnExit
        >
          <ModalLayout tittle="BUYERS" handleModal={this.handleModalBuyer}>
            {this.props.companies ? (
              this.props.companies.map((company, index) => (
                <div className="p-b-1" key={index}>
                  <label className="item_list_label">
                    {company.get('name')}
                  </label>
                  <ul className="item_list">
                    {company.get('buyers').map((buyer, index) => (
                      <ListItem
                        key={index}
                        itemType="buyer"
                        handleDeleteItem={this.handleDeleteItem}
                        id={company.get('_id')}
                        company_name={company.get('name')}
                      >
                        {buyer}
                      </ListItem>
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
        <CSSTransition
          in={this.state.modalCompany}
          timeout={250}
          classNames="anim-modal"
          unmountOnExit
        >
          <ModalLayout tittle="COMPANIES" handleModal={this.handleModalCompany}>
            {this.props.companies ? (
              <ul className="item_list">
                {this.props.companies.map((company, index) => (
                  <ListItem
                    key={index}
                    itemType="company"
                    handleDeleteItem={this.handleDeleteItem}
                    id={company.get('_id')}
                  >
                    {company.get('name')}
                  </ListItem>
                ))}
              </ul>
            ) : (
              <option value="" disabled>
                Loading...
              </option>
            )}
          </ModalLayout>
        </CSSTransition>
      </Fragment>
    )
  }
}

export default Company
