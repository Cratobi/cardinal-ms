import React, { Component } from "react"
import axios from "axios"
import cookie from "js-cookie"

import Header from "./Header/Header"
import Authentication from "./Authentication/Authentication"
import Content from "./Content/Content"

class App extends Component {
  state = {
    init: {
      as: 12
    }
  }
  componentDidMount() {
    // console.log(cookie.get("token"))
    axios({
      method: "get",
      url: "http://localhost:3001/auth/",
      headers: {
        "token": cookie.get("token")
      }
    })
      .then(res => {
        console.log("AUTO SIGN IN")
      })
      .catch(err => {
        console.log("No Cookie")
      })
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        {/* <Content /> */}
        <Authentication />
      </div>
    )
  }
}

export default App
