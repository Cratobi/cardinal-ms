import React, { Component } from "react"
import { connect } from "react-redux"
import Axios from "axios"
import Cookie from "js-cookie"
import { get } from "immutable"
import { Route, Switch, withRouter } from "react-router-dom"
import * as actions from "../../store/actions/index"

class Authentication extends Component {
  state = {
    render: false,
    alert: "",
    credential: {
      username: "",
      password: ""
    }
  }
  componentWillMount() {
    if (this.props.authorization) {
      this.props.history.replace({ pathname: "/" })
    } else {
      const token = Cookie.get("token")

      if (token) {
        Axios({
          method: "get",
          url: "http://localhost:3001/auth",
          headers: {
            token
          }
        })
          .then(() => this.props.authenticate())
          .then(() => this.props.history.replace({ pathname: "/" }))
      } else {
        const state = [...this.state]
        this.state.render = true
        this.setState(state)
      }
    }
  }

  handleUsernameChange = e => {
    const state = [...this.state]
    state.credential.username = e.target.value
    this.setState(state)
  }
  handlePasswordChange = e => {
    const state = [...this.state]
    state.credential.password = e.target.value
    this.setState(state)
  }
  handleSubmitForm = e => {
    e.preventDefault()

    Axios.post("http://localhost:3001/auth/signin", {
      username: this.state.credential.username,
      password: this.state.credential.password
    })
      .then(res => {
        Cookie.set("token", res.data["token"]).then(
          this.props
            .authenticate()
            .then(this.props.history.replace({ pathname: "/" }))
        )
      })
      .catch(() => {
        const state = this.state
        state.alert = "Your username or password is wrong!"
        this.setState(state)
      })
  }

  render() {
    return (
      <div>
        {this.state.render ? (
          <div className="authentication-container">
            <div className="card authentication-card">
              <div className="authentication-header">
                <div className="font-small">Cardinal Management System</div>
                <div className="title">FLAXEN GROUP</div>
              </div>
              {this.state.alert ? (
                <div className="alert">{this.state.alert}</div>
              ) : null}
              <form
                className="authentication-form"
                method="post"
                onSubmit={this.handleSubmitForm}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="USERNAME"
                  onChange={this.handleUsernameChange}
                  value={this.state.credential.username}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  autoComplete="true"
                  onChange={this.handlePasswordChange}
                  value={this.state.credential.password}
                />
                <input
                  className="hidden"
                  onClick={this.handleSubmitForm}
                  type="submit"
                />
                <div className="authentication-btn">
                  <button disabled="true">HELP?</button>
                  <button
                    onClick={this.handleSubmitForm}
                    disabled={
                      this.state.credential.username &&
                      this.state.credential.password
                        ? false
                        : true
                    }
                  >
                    SIGN IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  state = state.get("init")
  return {
    authorization: state.get("authorization")
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => dispatch(actions.authenticate())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authentication)
)
