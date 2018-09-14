import React from "react"
import { Link } from "react-router-dom"
// eslint-disable-next-line
import { get, size } from "immutable"

import LoadingLayout from "../Loading/Loading"

const header = props => {
  return (
    <header>
      <Link to="/" className="logo">
        <i className="fas fa-kiwi-bird" />
        Cardinal MS
      </Link>
      <span className="search">
        {/* <i className="fas fa-search search-icon" /> */}
        <input
          type="search"
          className="search-input"
          placeholder="SEARCH"
          onChange={props.handleSearchChange}
          onFocus={props.handleSearchFocus}
          value={props.searchQuery}
        />
        {props.searchEmpty && props.searchFocus ? (
          <div className="menu">
            <span
              className="transparent-backdrop"
              onClick={props.handleSearchFocus}
            />
            <div className="scrollable">
              {props.searchResult ? (
                props.searchResult.map((order, index) => (
                  <Link
                    to={`order/${order.get("id")}/overview`}
                    onClick={props.handleSearchFocus}
                    className="result"
                    key={index}
                  >
                    {order.get("order_no")}
                    <span className="small"> - {order.get("style_no")}</span>
                  </Link>
                ))
              ) : (
                <LoadingLayout />
              )}
            </div>
          </div>
        ) : null}
      </span>
      <span className="nav-btn">
        <span className="account">
          <span onClick={props.handleAccountClick} className="account-btn">
            xalcier
          </span>
          {props.accountClick ? (
            <div className="menu">
              <span
                className="transparent-backdrop"
                onClick={props.handleAccountClick}
              />
              <div className="font-small">Welcome</div>
              <div className="name-tag">Xalcier Alkamuro</div>
              <br />
              <div className="btn">
                <button>SETTINGS</button>
                <button onClick={props.handleUnauthenticate}>SIGN OUT</button>
              </div>
            </div>
          ) : null}
        </span>

        <span className="notification">
          <span
            onClick={props.handleNotificationClick}
            className="notification-btn"
          >
            {props.notificationUnread !== 0 ? (
              <span className="notification-badge">
                {props.notificationBadge >= 10
                  ? "9+"
                  : props.notificationUnread}
              </span>
            ) : null}

            <i className="fas fa-bell notification-icon" />
          </span>
          {props.notificationClick ? (
            <div className="menu">
              <span
                className="transparent-backdrop"
                onClick={props.handleNotificationClick}
              />
              <div className="txt">Notification</div>
              <div className="scrollable">
                <div className="card">Someone added an Order</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
                <div className="card">asdsa</div>
              </div>
            </div>
          ) : null}
        </span>
      </span>
    </header>
  )
}

export default header
