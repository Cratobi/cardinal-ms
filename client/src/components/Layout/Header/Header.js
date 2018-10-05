import React, { Fragment } from "react"
import { Link } from "react-router-dom"
// eslint-disable-next-line
import { get, size } from "immutable"
import { CSSTransition } from "react-transition-group"
import "./Header.css"

// import LoadingLayout from "../Loading/Loading"
const header = props => {
  let power = props.userInfo.get("power")
  power = power === "mod" ? "Moderator" : power === "admin" ? "Admin" : "User"

  return (
    <Fragment>
      <header>
        <Fragment>
          {/* Logo */}
          <span className="logo">
            <CSSTransition
              in={props.backBtn}
              timeout={500}
              classNames="slide-right"
              unmountOnExit
            >
              <Link to="/" className="btn back-btn">
                <i className="fas fa-home m-r" />
                Home
              </Link>
            </CSSTransition>
            <span className="logo-txt">
              <span className="hide-l">CMS</span>
              <span className="hide-s">CARDINAL</span>
            </span>
          </span>
          {/* Search Input */}
          {/* <span className="search">
            <input
              type="search"
              className="search-input"
              placeholder="SEARCH (Coming soon)"
              disabled
              onChange={props.handleSearchChange}
              onFocus={props.handleSearchFocus}
              value={props.searchQuery}
            />
          </span> */}

          {/* Right Buttons */}
          <span className="nav-btn">
            <span
              onClick={() => props.handleMenuNotification(true)}
              className={`btn btn-custom-notification ${
                props.notificationUnread !== 0 ? "btn-caution" : ""
              } ${
                props.notificationMenu ? "btn-custom-notification-active" : ""
              }`}
            >
              <i className="fas fa-bell" />
              <b>{props.notificationUnread}</b>
            </span>
            <span className="p-r-1" />
            <span
              onClick={() => props.handleMenuAccount(!props.accountMenu)}
              className={`btn btn-custom-account m-r ${
                props.accountMenu ? "btn-custom-account-active" : ""
              }`}
            >
              <span>
                <i className="fas fa-user" />
                <span className="hide-s p-l p-r">
                  {props.userInfo.get("username")}
                </span>
              </span>
              <CSSTransition
                in={props.accountMenu}
                timeout={500}
                classNames="rotate-180"
              >
                <i className="fas fa-angle-down" />
              </CSSTransition>
            </span>
          </span>
        </Fragment>
      </header>

      {/* Menus */}

      {/* <CSSTransition
        in={props.searchEmpty && props.searchFocus ? true : false}
        timeout={500}
        classNames="menu-down"
        unmountOnExit
      >
        <div className="menu-search">
          <span
            className="backdrop backdrop-transparent backdrop-menu"
            onClick={props.handleSearchFocus}
          /> */}
      {/* <div className="scrollable">
            {props.searchResult ? (
              props.searchResult.map((order, index) => (
                <Link
                  key={index}
                  to={`order/${order.get("id")}/overview`}
                  onClick={props.handleSearchFocus}
                  className="search-result"
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
          </div> */}
      {/* </div>
      </CSSTransition> */}
      {props.accountMenu || props.notificationMenu ? (
        <div
          className="backdrop backdrop-transparent backdrop-menu"
          onClick={() => props.handleMenuAccount(false)}
        />
      ) : null}
      <CSSTransition
        in={props.accountMenu}
        timeout={140}
        classNames="anim-menu"
        unmountOnExit
      >
        <div className="menu menu-account">
          <div className="user-info-container">
            <div>
              <div className="txt name">{props.userInfo.get("name")}</div>
              <div className="txt-light p-l">- {power}</div>
            </div>
          </div>
          <div className="footer">
            {props.userInfo.get("power") === "admin" ? (
              <button
                className="btn btn-transparent"
                onClick={() => props.handleModalDashboard(true)}
              >
                <i className="fas fa-tachometer-alt" />
                DASHBOARD
              </button>
            ) : null}
            <button
              className="btn btn-transparent"
              onClick={() => props.handleModalSettings(true)}
            >
              <i className="fas fa-cog" />
              SETTINGS
            </button>
            <Link to="/signout" className="btn btn-transparent backdrop-menu">
              <i className="fas fa-sign-out-alt" />
              SIGN OUT
            </Link>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={props.notificationMenu}
        timeout={140}
        classNames="anim-menu"
        unmountOnExit
      >
        <div className="menu menu-notification">
          <h6 className="p-l-1">Notification</h6>
          <div className="scrollable">
            <div className="card">Coming soon</div>
            <div className="card">Coming soon</div>
            <div className="card">Coming soon</div>
            <div className="card">Coming soon</div>
            <div className="card">Coming soon</div>
            <div className="card">Coming soon</div>
            <div className="card">Coming soon</div>
            <div className="card">Coming soon</div>
            <div className="card">Coming soon</div>
            <div className="card">Coming soon</div>
            <div className="card">Coming soon</div>
            <div className="card">Coming soon</div>
          </div>
        </div>
      </CSSTransition>
    </Fragment>
  )
}

export default header
