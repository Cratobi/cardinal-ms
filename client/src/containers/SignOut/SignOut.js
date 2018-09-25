import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import Axios from "../../axios-instance"
import Cookie from "js-cookie"
// import * as actions from "../../store/actions/index"

class SignOut extends Component {
  componentWillMount() {
    if (Cookie.get("x-auth")) {
      Axios({
        method: "delete",
        url: "/auth/signout"
      })
        .then(() => {
          Cookie.remove("x-auth")
          this.props.history.replace({ pathname: "/signin" })
        })
        .catch(() => console.log("Somethings wrong"))
    } else {
      this.props.history.replace({ pathname: "/signin" })
    }
  }

  render() {
    return <span>redirecting...</span>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // reset: () => dispatch(actions.reset())
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignOut)
)
