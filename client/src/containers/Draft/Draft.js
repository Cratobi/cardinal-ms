import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
// eslint-disable-next-line
import { get, getIn, toJS } from "immutable"
import * as actions from "../../store/actions/index"

import SingleGridLayout from "../../components/Layout/SingleGrid/SingleGrid"
import EditableTable from "../EditableTable/EditableTable"
import LoadingLayout from "../../components/Layout/Loading/Loading"
import Aux from "../../hoc/_Aux/_Aux"

class Draft extends Component {
  componentWillMount() {
    !this.props.metadata && !this.props.match.params.id
      ? this.props.history.replace({ pathname: "/" })
      : this.props.fetchDraft(this.props.match.params.id)
  }
  componentWillUnmount() {
    this.props.resetDraft()
    const payload = {
      id: this.props.metadata.get("id"),
      tabledata: this.props.tabledata.toJS()
    }

    this.props.sendDraftTabledata(payload)
  }
  handleSendDraftTabledata = () => {
    this.props.history.replace({ pathname: "/" })
  }
  handlePublishOrder = () => {
    this.props.publishOrder(this.props.metadata.get("id"), this.props.history)
  }

  render() {
    return this.props.metadata ? (
      <SingleGridLayout
        containerCSS=""
        header={
          <Aux>
            <div className="draft-header-btns">
              <button
                className="btn btn-caution"
                onClick={() =>
                  this.props.deleteDraft(
                    this.props.metadata.get("id"),
                    this.props.history
                  )
                }
              >
                <i className="fas fa-trash p-r" />
                Delete Draft
              </button>
              <button
                className="btn btn-dark"
                onClick={this.handleSendDraftTabledata}
              >
                <i className="fas fa-inbox p-r" />
                Save to Draft
              </button>
            </div>
            <div className="draft-header-metadata">
              <p>
                <span className="txt-prop">Shipment Date: </span>
                {this.props.metadata.get("shipment_date")}
              </p>
              <p>
                <span className="txt-prop">Order no: </span>
                {this.props.metadata.get("order_no")}
              </p>
              <p>
                <span className="txt-prop">Style no: </span>
                {this.props.metadata.get("style_no")}
              </p>
              <p>
                <span className="txt-prop">Item: </span>
                {this.props.metadata.get("item")}
              </p>
              <p>
                <span className="txt-prop">Quantity: </span>
                {this.props.metadata.get("quantity")}
              </p>
              <p>
                <span className="txt-prop">Order no: </span>
                {this.props.metadata.get("order_no")}
              </p>
            </div>
          </Aux>
        }
        headerCSS=" draft-header"
        footer={
          <Aux>
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
          </Aux>
        }
        footerCSS=" draft-footer"
      >
        <EditableTable tabledata={this.props.tabledata} />
      </SingleGridLayout>
    ) : (
      <LoadingLayout txt center />
    )
  }
}

const mapStateToProps = state => {
  return {
    metadata: state.getIn(["draft", "metadata"]),
    tabledata: state.getIn(["draft", "tabledata"])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDraft: id => dispatch(actions.fetchDraft(id)),
    sendDraftTabledata: payload =>
      dispatch(actions.sendDraftTabledata(payload)),
    publishOrder: (id, router) => dispatch(actions.publishOrder(id, router)),
    deleteDraft: (id, router) => dispatch(actions.deleteDraft(id, router)),
    resetDraft: () => dispatch(actions.resetDraft())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Draft)
)
