import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import * as actions from "../../store/actions/index"

const BuyerOptions = props => <option value={props.value}>{props.value}</option>

class Home extends Component {
  state = {
    draft_metadata: {
      buyer: "",
      order_no: "",
      style_no: ""
    }
  }
  handleChange = e => {
    const state = { ...this.state }
    state.draft_metadata[e.target.name] = e.target.value
    this.setState(state)
  }
  sendDraftMetadata = e => {
    e.preventDefault()
    this.props.sendDraftMetadata(this.state.draft_metadata, this.props.history)
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/order">
          <button>Orders</button>
        </Link>
        <Link to="/draft">
          <button>Drafts</button>
        </Link>
        <br />
        <br />
        <form onSubmit={this.sendDraftMetadata}>
          <select name="buyer" onChange={this.handleChange} defaultValue="">
            <option value="" disabled>
              Choose buyer
            </option>
            {this.props.buyers
              ? this.props.buyers.map((data, index) => (
                  <BuyerOptions value={data} key={index} />
                ))
              : null}
          </select>
          <br />
          <br />
          <input
            type="text"
            name="order_no"
            placeholder="Order no"
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.draft_metadata.order_no}
          />
          <br />
          <br />
          <input
            type="text"
            name="style_no"
            placeholder="Style no"
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.draft_metadata.style_no}
          />
          <br />
          <br />
          <input type="submit" value="Create Order" />
          <br />
          <br />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    buyers: state.getIn(["order", "buyers"])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchBuyers: () => dispatch(actions.fetchBuyers()),
    sendDraftMetadata: (payload, router) =>
      dispatch(actions.sendDraftMetadta(payload, router))
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
)
