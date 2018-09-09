import React, { Component } from "react"
import { connect } from "react-redux"
import { get, getIn } from "immutable"
import * as actions from "../../store/actions"

import OrderLayout from "../../components/Layout/Order/Order"

class Order extends Component {
  componentWillMount() {
    this.props.fetchDrafts()
  }

  render() {
    return (
      <div className="container single-card">
        <div className="title">DRAFTS</div>
        {this.props.drafts ? (
          <div className="card card-holder">
            {this.props.drafts.map((data, index) => (
              <OrderLayout
                key={data.get("id")}
                id={data.get("id")}
                buyer={data.get("buyer")}
                orderNo={data.get("order_no")}
                styleNo={data.get("style_no")}
                path="/draft/"
              />
            ))}
          </div>
        ) : (
          <h2>Loading...</h2>
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
    fetchDrafts: () => dispatch(actions.fetchDrafts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
