import React, { Component } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
import { get, getIn, size } from "immutable"
import * as actions from "../../store/actions"

import SingleGridLayout from "../../components/Layout/SingleGrid/SingleGrid"
import OrderCardLayout from "./../../components/Layout/OrderCard/OrderCard"
import LoadingLayout from "../../components/Layout/Loading/Loading"

class Order extends Component {
  componentWillMount() {
    this.props.fetchDrafts()
  }
  componentWillUnmount() {
    this.props.resetDrafts()
  }
  handleDeleteDraftBtn = id => {
    this.props.deleteDraft(id)
    this.props.fetchDrafts()
  }

  render() {
    return this.props.drafts ? (
      this.props.drafts.size !== 0 ? (
        <SingleGridLayout
          containerCSS=" flex-j-start"
          headerCSS=" drafts-header"
          footerCSS=""
          header={<h5 className="header-title"> DRAFT </h5>}
        >
          {this.props.drafts.map(draft => (
            <OrderCardLayout
              key={draft.get("id")}
              id={draft.get("id")}
              buyer={draft.get("buyer")}
              orderNo={draft.get("order_no")}
              styleNo={draft.get("style_no")}
              handleDeleteDraftBtn={this.handleDeleteDraftBtn}
              path="/draft/"
            />
          ))}
        </SingleGridLayout>
      ) : (
        <SingleGridLayout emptyTxt="There're no orders :(" />
      )
    ) : (
      <LoadingLayout txt center />
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
    resetDrafts: () => dispatch(actions.resetDrafts()),
    deleteDraft: id => dispatch(actions.deleteDraft(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
