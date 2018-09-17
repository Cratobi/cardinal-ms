import React, { Component } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
import { get, getIn, size } from "immutable"
import * as actions from "../../store/actions"

import OrderLayout from "../../components/Layout/Order/Order"
import LoadingLayout from "../../components/Layout/Loading/Loading"

class Order extends Component {
  componentWillMount() {
    this.props.fetchDrafts()
  }
  handleDeleteDraftBtn = id => {
    this.props.deleteDraft(id)
    this.props.fetchDrafts()
  }
  render() {
    return (
      <div className="container single-card">
        {this.props.drafts ? (
          this.props.drafts.size !== 0 ? (
            <div>
              <div className="card-header">
                <div className="txt-title">DRAFTS</div>
              </div>
              <div className="card card-holder">
                {this.props.drafts.map((data, index) => (
                  <OrderLayout
                    key={data.get("id")}
                    id={data.get("id")}
                    buyer={data.get("buyer")}
                    orderNo={data.get("order_no")}
                    styleNo={data.get("style_no")}
                    handleDeleteDraftBtn={this.handleDeleteDraftBtn}
                    deletable="true"
                    path="/draft/"
                  />
                ))}
              </div>
            </div>
          ) : (
            <h1 className="loading txt-lighter">Draft's empty</h1>
          )
        ) : (
          <LoadingLayout txt />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    drafts: state.getIn(["draft", "drafts"])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrafts: () => dispatch(actions.fetchDrafts()),
    deleteDraft: id => dispatch(actions.deleteDraft(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
