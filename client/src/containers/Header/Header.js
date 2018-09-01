import React, { Component } from "react";

import _Header from "../../components/Layout/_Header/_Header";

class Header extends Component {
  state = {
    searchFocus: false,
    accountClick: false,
    notificationClick: false,
    notificationUnread: 4,
    searchQuery: ""
  };
  handleSearchChange = event => {
    const state = this.state;
    state.searchQuery = event.target.value;
    this.setState(state);
  };
  handleSearchFocus = () => {
    const state = this.state;
    state.accountClick = false;
    state.notificationClick = false;
    state.searchFocus = !state.searchFocus;
    this.setState(state);
  };
  handleAccountClick = () => {
    const state = this.state;
    state.accountFocus = false;
    state.notificationClick = false;
    state.accountClick = !state.accountClick;
    this.setState(state);
  };
  handleNotificationClick = () => {
    const state = this.state;
    state.accountFocus = false;
    state.accountClick = false;
    state.notificationClick = !state.notificationClick;
    this.setState(state);
  };
  render() {
    return (
      <div>
        <_Header
          searchQuery={this.state.searchQuery}
          searchEmpty={this.state.searchQuery ? true : false}
          searchFocus={this.state.searchFocus}
          handleSearchChange={this.handleSearchChange}
          handleSearchFocus={this.handleSearchFocus}
          handleAccountClick={this.handleAccountClick}
          accountClick={this.state.accountClick}
          handleNotificationClick={this.handleNotificationClick}
          notificationClick={this.state.notificationClick}
          notificationUnread={this.state.notificationUnread}
        />
      </div>
    );
  }
}

export default Header;
