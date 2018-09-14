import React, { Component } from "react"
import Axios from "axios"
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
    const token = Cookie.get("token")
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

    const os = [
      { name: "Windows Phone", value: "Windows Phone", version: "OS" },
      { name: "Windows", value: "Win", version: "NT" },
      { name: "iPhone", value: "iPhone", version: "OS" },
      { name: "iPad", value: "iPad", version: "OS" },
      { name: "Kindle", value: "Silk", version: "Silk" },
      { name: "Android", value: "Android", version: "Android" },
      { name: "PlayBook", value: "PlayBook", version: "OS" },
      { name: "BlackBerry", value: "BlackBerry", version: "/" },
      { name: "Macintosh", value: "Mac", version: "OS X" },
      { name: "Linux", value: "Linux", version: "rv" },
      { name: "Palm", value: "Palm", version: "PalmOS" }
    ]
    const browser = [
      { name: "Chrome", value: "Chrome", version: "Chrome" },
      { name: "Firefox", value: "Firefox", version: "Firefox" },
      { name: "Safari", value: "Safari", version: "Version" },
      { name: "Internet Explorer", value: "MSIE", version: "MSIE" },
      { name: "Edge", value: "Edge", version: "Edge" },
      { name: "Opera", value: "Opera", version: "Opera" },
      { name: "BlackBerry", value: "CLDC", version: "CLDC" },
      { name: "Mozilla", value: "Mozilla", version: "Mozilla" }
    ]
    const header = [
      navigator.platform,
      navigator.userAgent,
      navigator.appVersion,
      navigator.vendor,
      window.opera
    ]

    const matchItem = (string, data) => {
      var i = 0,
        j = 0,
        regex,
        regexv,
        match,
        matches,
        version

      for (i = 0; i < data.length; i += 1) {
        regex = new RegExp(data[i].value, "i")
        match = regex.test(string)
        if (match) {
          regexv = new RegExp(data[i].version + "[- /:;]([d._]+)", "i")
          matches = string.match(regexv)
          version = ""
          if (matches) {
            if (matches[1]) {
              matches = matches[1]
            }
          }
          if (matches) {
            matches = matches.split(/[._]+/)
            for (j = 0; j < matches.length; j += 1) {
              if (j === 0) {
                version += matches[j] + "."
              } else {
                version += matches[j]
              }
            }
          } else {
            version = "0"
          }
          return {
            name: data[i].name,
            version: parseFloat(version)
          }
        }
      }
      return { name: "unknown", version: 0 }
    }
    const agent = header.join(" ")

    // console.log(matchItem(agent, os), matchItem(agent, browser))
    console.log(matchItem(agent, browser).name)

    Axios.post("http://localhost:3001/auth/signin", {
      username: this.state.form.username,
      password: this.state.form.password
    })
      .then(res => {
        Cookie.set("token", res.data.token).then(
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
