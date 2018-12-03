import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { get, getIn, toJS } from 'immutable'
import { CSSTransition } from 'react-transition-group'
import * as actions from '../../store/actions/index'

import MonoGridLayout from '../../components/Layout/MonoGrid/MonoGrid'
import EditableTable from '../EditableTable/EditableTable'
import ExtraTable from '../EditableTable/ExtraTable'
import LoadingLayout from '../../components/Layout/Loading/Loading'
import Modal from '../../components/Layout/Modal/Modal'

class Draft extends Component {
  state = {
    confirmationModalPublish: false,
    confirmationModalDelete: false,
  }
  componentWillMount() {
    !this.props.metadata && !this.props.match.params.id
      ? this.props.history.replace({ pathname: '/' })
      : this.props.fetchDraft(this.props.match.params.id)
  }
  componentWillUnmount() {
    if (this.props.metadata) {
      const payload = {
        id: this.props.metadata.get('id'),
        tabledata: this.props.CnP_data.toJS(),
      }

      this.props.sendDraftTabledata(payload)
    }
    this.props.resetDraft()
  }
  handleSendDraftTabledata = () => {
    this.props.history.replace({ pathname: '/' })
  }
  handlePublishOrder = () => {
    const tabledata = this.props.CnP_data.toJS()
    
    for (let rowindex = 0; rowindex < tabledata.table_date.length; rowindex++) {
      tabledata.table_date[rowindex][1] = new Date(
        tabledata.table_date[rowindex][1],
        ).getTime()
      }
      
      console.log(tabledata)
    this.props.publishOrder(
      this.props.metadata.get('id'),
      tabledata,
      this.props.history,
    )
  }
  handleConfirmationModalPublish = action => {
    const state = this.state
    state.confirmationModalPublish = action
    this.setState(state)
  }
  handleConfirmationModalDelete = action => {
    const state = this.state
    state.confirmationModalDelete = action
    this.setState(state)
  }

  render() {
    return this.props.metadata ? (
      <MonoGridLayout
        CustomCSS="draft"
        header={
          <Fragment>
            <div className="draft-header-btns p-r-1">
              <button
                onClick={() => this.handleConfirmationModalDelete(true)}
                className="btn btn-caution p-l-1 p-r-1"
              >
                <i className="fas fa-trash p-r" />
                Delete Draft &nbsp;
              </button>
              <CSSTransition
                in={this.state.confirmationModalDelete}
                timeout={250}
                classNames="anim-modal"
                unmountOnExit
              >
                <Modal
                  tittle="DELETE DRAFT"
                  modalState={this.state.confirmationModalDelete}
                  handleModal={() => this.handleConfirmationModalDelete(false)}
                  footer={
                    <Fragment>
                      <div
                        onClick={() =>
                          this.handleConfirmationModalDelete(false)
                        }
                        className="btn btn-light"
                      >
                        Cancel
                      </div>
                      <div
                        onClick={() => {
                          this.props.deleteDraft(
                            this.props.metadata.get('id'),
                            this.props.history,
                          )
                          return this.handleConfirmationModalDelete(false)
                        }}
                        className="btn btn-caution"
                      >
                        Confirm Delete
                      </div>
                    </Fragment>
                  }
                >
                  Are you sure you want to delete this draft?
                </Modal>
              </CSSTransition>
              <button
                className="btn btn-dark p-l-1 p-r-1"
                onClick={this.handleSendDraftTabledata}
              >
                <i className="fas fa-inbox p-r" />
                Save to Draft
              </button>
            </div>

            <div className="draft-header-metadata m-t-1">
              <div className="draft-header">
                <table className="overview">
                  <tbody>
                    <tr>
                      <td>Shipment Date:</td>
                      <td>
                        {new Date(
                          this.props.metadata.get('shipment_date'),
                        ).toDateString()}
                      </td>
                    </tr>
                    <tr>
                      <td>Buyer:</td>
                      <td>{this.props.metadata.get('buyer')}</td>
                    </tr>
                    <tr>
                      <td>Order no:</td>
                      <td>{this.props.metadata.get('order_no')}</td>
                    </tr>
                    <tr>
                      <td>Style no:</td>
                      <td>{this.props.metadata.get('style_no')}</td>
                    </tr>
                    <tr>
                      <td>Item:</td>
                      <td>{this.props.metadata.get('item')}</td>
                    </tr>
                    <tr>
                      <td>Quantity:</td>
                      <td>{this.props.metadata.get('quantity')}</td>
                    </tr>
                  </tbody>
                </table>
                <ExtraTable editability={true} data={this.props.CnP_data} />
              </div>
            </div>
          </Fragment>
        }
        footer={
          <Fragment>
            <button
              className="btn btn-success f-r"
              onClick={() => this.handleConfirmationModalPublish(true)}
            >
              <i className="fas fa-check p-r" />
              Publish Order
            </button>

            <CSSTransition
              in={this.state.confirmationModalPublish}
              timeout={250}
              classNames="anim-modal"
              unmountOnExit
            >
              <Modal
                tittle="PUBLISH ORDER"
                modalState={this.state.confirmationModalPublish}
                handleModal={() => this.handleConfirmationModalPublish(false)}
                footer={
                  <Fragment>
                    <div
                      onClick={() => this.handleConfirmationModalPublish(false)}
                      className="btn btn-light"
                    >
                      Cancel
                    </div>
                    <div
                      onClick={this.handlePublishOrder}
                      className="btn btn-success"
                    >
                      Confirm Publish
                    </div>
                  </Fragment>
                }
              >
                Are you sure you want to delete this draft?
              </Modal>
            </CSSTransition>
            <button
              className="btn btn-lighter f-r"
              onClick={this.handleSendDraftTabledata}
            >
              <i className="fas fa-inbox p-r" />
              Save to Draft
            </button>
          </Fragment>
        }
      >
        <CSSTransition
          in={this.props.CnP_data ? true : false}
          timeout={250}
          classNames="slide-up"
          unmountOnExit
        >
          <EditableTable
            editability={true}
            schema={this.props.CnP_dataSchema}
            data={this.props.CnP_data}
          />
        </CSSTransition>
      </MonoGridLayout>
    ) : (
      <LoadingLayout txt center />
    )
  }
}

const mapStateToProps = state => {
  return {
    metadata: state.getIn(['draft', 'metadata']),
    CnP_dataSchema: state.getIn(['draft', 'CnP_dataSchema']),
    CnP_data: state.getIn(['draft', 'CnP_data']),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDraft: id => dispatch(actions.fetchDraft(id)),
    sendDraftTabledata: payload =>
      dispatch(actions.sendDraftTabledata(payload)),
    onChange: payload => dispatch(actions.onChange(payload)),
    publishOrder: (id, tabledata, router) =>
      dispatch(actions.publishOrder(id, tabledata, router)),
    deleteDraft: (id, router) => dispatch(actions.deleteDraft(id, router)),
    resetDraft: () => dispatch(actions.resetDraft()),
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Draft),
)
