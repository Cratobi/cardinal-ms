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

class Draft extends Component {
  componentWillMount() {
    !this.props.metadata && !this.props.match.params.id
      ? this.props.history.replace({ pathname: '/' })
      : this.props.fetchDraft(this.props.match.params.id)
  }
  componentWillUnmount() {
    if (this.props.metadata) {
      const payload = {
        id: this.props.metadata.get('id'),
        tabledata: this.props.tabledata.toJS(),
      }

      this.props.sendDraftTabledata(payload)
    }
    this.props.resetDraft()
  }
  handleSendDraftTabledata = () => {
    this.props.history.replace({ pathname: '/' })
  }
  handlePublishOrder = () => {
    const tabledata = this.props.tabledata.toJS()

    for (
      let rowindex = 0;
      rowindex < tabledata.table_date.tablebody.length;
      rowindex++
    ) {
      tabledata.table_date.tablebody[rowindex][1].cellData = new Date(
        tabledata.table_date.tablebody[rowindex][1].cellData,
      ).getTime()
    }

    this.props.publishOrder(
      this.props.metadata.get('id'),
      tabledata,
      this.props.history,
    )
  }

  render() {
    return this.props.metadata ? (
      <MonoGridLayout
        CustomCSS="draft"
        header={
          <Fragment>
            <div className="draft-header-btns p-r-1">
              <button
                className="btn btn-caution p-l-1 p-r-1"
                onClick={() =>
                  this.props.deleteDraft(
                    this.props.metadata.get('id'),
                    this.props.history,
                  )
                }
              >
                <i className="fas fa-trash p-r" />
                Delete Draft &nbsp;
              </button>
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
                <ExtraTable editable="true" tabledata={this.props.tabledata} />
              </div>
            </div>
          </Fragment>
        }
        footer={
          <Fragment>
            <button
              className="btn btn-success f-r"
              onClick={this.handlePublishOrder}
            >
              <i className="fas fa-check p-r" />
              Publish Order
            </button>
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
          in={this.props.tabledata ? true : false}
          timeout={500}
          classNames="slide-up"
          unmountOnExit
        >
          <EditableTable editable="true" tabledata={this.props.tabledata} />
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
    tabledata: state.getIn(['draft', 'tabledata']),
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
