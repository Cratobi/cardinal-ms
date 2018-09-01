import React, { Component } from "react";

class Authentication extends Component {
  state = {
    alert: "",
    credential: {
      username: "",
      password: ""
    }
  };
  handleUsernameChange = event => {
    const state = this.state;
    state.credential.username = event.target.value;
    this.setState(state);
  };
  handlePasswordChange = event => {
    const state = this.state;
    state.credential.password = event.target.value;
    this.setState(state);
  };
  handleSubmitForm = event => {
    event.preventDefault();
    alert("form sent");
  };
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
              <div className="authentication-btn">
                <button disabled="true">HELP?</button>
                <button
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
    );
  }
}

export default Authentication;
