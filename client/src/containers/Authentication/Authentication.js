import React, { Component } from "react"
import axios from "axios"
import cookie from "js-cookie"

class Authentication extends Component {
  state = {
    alert: "",
    credential: {
      username: "",
      password: ""
    }
  }

  handleUsernameChange = e => {
    const state = this.state
    state.credential.username = e.target.value
    this.setState(state)
  }
  handlePasswordChange = e => {
    const state = this.state
    state.credential.password = e.target.value
    this.setState(state)
  }
  handleSubmitForm = e => {
    e.preventDefault()

    axios
      .post("http://localhost:3001/auth/signin", {
        username: this.state.credential.username,
        password: this.state.credential.password
      })
      .then(res => {
        cookie.set("token", res.data["token"])
      })
      .catch(err => {
        const state = this.state
        state.alert = "Your username or password is wrong!"
        this.setState(state)
      })
  }

  render() {
    return (
      <div>
        <div className="authentication-container">
          <div className="card authentication-card">
            <div className="authentication-header">
              <div className="font-small">Cardinal Management System</div>
              <div className="title">FLAXEN GROUP</div>
            </div>
            {this.state.alert ? (
              <div class="alert">{this.state.alert}</div>
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
                onChange={this.handlePasswordChange}
                value={this.state.credential.password}
              />
              <input
                class="hidden"
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
      </div>
    )
  }
}

export default Authentication
