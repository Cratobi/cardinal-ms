import React from "react"
import { Link } from "react-router-dom"
// eslint-disable-next-line
import { get, size } from "immutable"
import "./Header.css"

import LoadingLayout from "../Loading/Loading"

const header = props => {
  return (
    <header>
      <Link to="/" className="logo">
        <span className="hide-l">CMS</span>
        <span className="hide-s">Cardinal</span>
      </Link>
      <span className="search">
        <input
          type="search"
          className="search-input"
          placeholder="SEARCH"
          onChange={props.handleSearchChange}
          onFocus={props.handleSearchFocus}
          value={props.searchQuery}
        />
        {props.searchEmpty && props.searchFocus ? (
          <div className="menu-search">
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
                    className="search-result"
                    key={index}
                  >
                    {order.get("order_no")}
                    <span className="txt-emp txt-small">
                      {order.get("style_no")}
                    </span>
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
        <span onClick={props.handleAccountClick} className="btn btn-chip m-r">
          <span className="p-l hide-s" />
          <i className="fas fa-user-tie" />
          <b className="hide-s p-l p-r">Xalcier</b>
        </span>
        {props.accountClick ? (
          <div className="menu-account">
            <span
              className="transparent-backdrop"
              onClick={props.handleAccountClick}
            />
            <div className="txt-small m-b">Welcome</div>
            <span className="txt-large">Xalcier Alkamuro</span>
            {/* <div className="txt-emp m-l m-r f-r">MODERATOR</div> */}
            <div className="txt-emp txt-emp-dark m-l m-r f-r">ADMIN</div>
            <div className="footer p-t-1">
              <button className="btn btn-transparent">SETTINGS</button>
              <button
                className="btn btn-transparent"
                onClick={props.handleUnauthenticate}
              >
                SIGN OUT
              </button>
            </div>
          </div>
        ) : null}
        <span className="p-r hide-s" />
        <span
          onClick={props.handleNotificationClick}
          className={`btn btn-round ${
            props.notificationUnread !== 0 ? "btn-caution" : null
          }`}
        >
          {props.notificationUnread !== 0 ? (
            props.notificationUnread >= 10 ? (
              <b>!</b>
            ) : (
              <b>{props.notificationUnread}</b>
            )
          ) : (
            <i className="fas fa-bell" />
          )}
        </span>
        {props.notificationClick ? (
          <div className="menu-notification">
            <span
              className="transparent-backdrop"
              onClick={props.handleNotificationClick}
            />
            <h6 className="p-l-1">Notification</h6>
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
    </header>
  )
}

export default header
