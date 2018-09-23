import React, { Component } from "react"
import Axios from "../../axios-auth"
import Cookie from "js-cookie"

import SigninLayout from "../../components/Layout/Auth/Signin"

class Auth extends Component {
  state = {
    alert: "",
    form: {
      username: "",
      name: "",
      password: "",
      signup_password_one: "",
      signup_password_two: ""
    }
  }
  _isMounted = false
  componentWillMount() {
    const token = Cookie.get("x-auth")
    if (token) {
      return this.props.history.replace({ pathname: "/" })
    }
  }
  componentDidMount() {
    this._isMounted = true
  }
  componentWillUnmount() {
    this._isMounted = false
  }
  handleChange = e => {
    const state = { ...this.state }
    state.form[e.target.name] = e.target.value
    this.setState(state)
  }
  handleSubmitSignin = e => {
    e.preventDefault()

    Axios.post("/auth/signin", {
      username: this.state.form.username,
      password: this.state.form.password
    })
      .then(res => {
        Cookie.set("x-auth", res.data.token).then(
          this.props.history.replace({ pathname: "/order" })
        )
      })
      .catch(() => {
        const state = { ...this.state }
        state.alert = "Your username or password is wrong!"
        if (this._isMounted) {
          return this.setState(state)
        }
      })
  }
  handleSubmitEmail = e => {
    e.preventDefault()

    window.open(
      `mailto:ci.riyadh@gmaiol.com?subject=Forgot Password&body=I've forgotten my password. Can you please reset the it. My username is "${
        this.state.form.username
      }". Thank you.`,
      "_blank"
    )
  }

  render() {
    return (
      <div className="auth-container">
        <div className="card auth-card">
          <SigninLayout
            alert={this.state.alert}
            form={this.state.form}
            handleChange={this.handleChange}
            handleSubmitEmail={this.handleSubmitEmail}
            handleSubmitForm={this.handleSubmitSignin}
          />
        </div>
      </div>
    )
  }
}

export default Auth
