import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
// eslint-disable-next-line
import { get, getIn, toJS } from "immutable"
import * as actions from "../../store/actions/index"

import EditableTable from "../EditableTable/EditableTable"

class Draft extends Component {
  componentWillMount() {
    !this.props.metadata && !this.props.match.params.id
      ? this.props.history.replace({ pathname: "/" })
      : this.props.fetchDraft(this.props.match.params.id)
  }
  componentWillUnmount() {
    this.props.resetDraftTabledata()
    const payload = {
      id: this.props.metadata.get("id"),
      tabledata: this.props.tabledata.toJS()
      // router: this.props.history
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
      <div className="container single-card">
        <div>
          <div className="card-header">
            <div className="txt-title">
              {this.props.metadata.get("order_no")}
            </div>
            <div className="card-header-btn">
              <button
                className="caution"
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
              <button className="dark" onClick={this.handleSendDraftTabledata}>
                <i className="fas fa-inbox p-r" />
                Save to Draft
              </button>
            </div>
          </div>
          <div className="card card-holder">
            <div className="card-table-header">
              <div className="txt ">
                Buyer: {this.props.metadata.get("buyer")}
              </div>
              <div className="txt ">
                Style No: {this.props.metadata.get("style_no")}
              </div>
            </div>
            <EditableTable tabledata={this.props.tabledata} />
            <div className="card-footer">
              <button className="success f-r" onClick={this.handlePublishOrder}>
                <i className="fas fa-check p-r" />
                Publish Order
              </button>
              <button
                className="lighter f-r"
                onClick={this.handleSendDraftTabledata}
              >
                <i className="fas fa-inbox p-r" />
                Save to Draft
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : null
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
    resetDraftTabledata: () => dispatch(actions.resetDraftTabledata())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Draft)
)
