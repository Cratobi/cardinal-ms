import React, { Component } from "react";

import Header from "./Header/Header";
import Authentication from "./Authentication/Authentication";
import Content from "./Content/Content";

class App extends Component {
  state = {
    init: {
      as: 12
    }
  };
  render() {
    return (
      <div>
        {/* <Header /> */}
        {/* <Content /> */}
        <Authentication />
      </div>
    );
  }
}

export default App;
