import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
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
  }
  handleSendDraftTabledata = () => {
    const payload = {
      id: this.props.metadata.get("id"),
      tabledata: this.props.tabledata.toJS(),
      router: this.props.history
    }

    this.props.sendDraftTabledata(payload)
  }
  handlePublishOrder = () => {
    this.props.publishOrder(this.props.metadata.get("id"), this.props.history)
  }

  render() {
    return (
      <div>
        {this.props.metadata ? (
          <div className="container single-card">
            <div className="title">{this.props.metadata.get("order_no")}</div>
            <button onClick={this.handleSendDraftTabledata}>
              Save to Draft
            </button>
            <button onClick={this.handlePublishOrder}>Publish Order</button>
            <div className="card card-holder">
              Style No: {this.props.metadata.get("style_no")}
              <br />
              Buyer: {this.props.metadata.get("buyer")}
              <EditableTable tabledata={this.props.tabledata} />
            </div>
          </div>
        ) : null}
      </div>
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
    resetDraftTabledata: () => dispatch(actions.resetDraftTabledata())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Draft)
)
