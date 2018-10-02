import React, { Fragment } from "react"
import { Link } from "react-router-dom"
// eslint-disable-next-line
import { get, size } from "immutable"
import { CSSTransition } from "react-transition-group"
import "./Header.css"

// import LoadingLayout from "../Loading/Loading"

const header = props => {
  return (
    <Fragment>
      <header>
        <Fragment>
          <Link to="/" className="logo">
            <span className="hide-l">CMS</span>
            <span className="hide-s">Cardinal</span>
          </Link>
          <span className="search">
            <input
              type="search"
              className="search-input"
              placeholder="SEARCH (Coming soon)"
              disabled
              onChange={props.handleSearchChange}
              onFocus={props.handleSearchFocus}
              value={props.searchQuery}
            />
          </span>
          <span className="nav-btn">
            <span
              onClick={props.handleAccountClick}
              className="btn btn-chip m-r"
            >
              <span className="hide-s p-l p-r">
                {props.userInfo.get("username")}
              </span>
              <i className="fas fa-user-tie" />
            </span>
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
          </span>
        </Fragment>
      </header>
      {/* <CSSTransition
        in={props.searchEmpty && props.searchFocus ? true : false}
        timeout={140}
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
      <CSSTransition
        in={props.accountClick}
        timeout={140}
        classNames="anim-menu-down"
        unmountOnExit
      >
        <div>
          <div
            className="backdrop backdrop-transparent backdrop-menu"
            onClick={props.handleAccountClick}
          />
          <div className="anim menu-account">
            <div className="txt-small m-b">Welcome</div>
            <div className="name-container">
              <div>
                <span className="txt-large">{props.userInfo.get("name")}</span>
                <span className="hide-l txt-light p-l">
                  ({props.userInfo.get("username")})
                </span>
              </div>
              {/* <div className="txt-emp m-l m-r f-r">MODERATOR</div> */}
              <div className="txt-emp txt-emp-dark m-l m-r">
                {props.userInfo.get("power").toUpperCase()}
              </div>
            </div>
            {props.userInfo.power === "admin" ? (
              <button
                className="btn btn-offset m-t-1"
                onClick={props.handleControlModalOpen}
              >
                <i className="fas fa-user-cog p-r" />
                Control Pannel
              </button>
            ) : null}
            <div className="footer p-t-1">
              <button
                className="btn btn-transparent"
                onClick={props.handleSettingsModalOpen}
              >
                SETTINGS
              </button>
              <Link to="/signout" className="btn btn-transparent backdrop-menu">
                SIGN OUT
              </Link>
            </div>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={props.notificationClick}
        timeout={140}
        classNames="anim-menu-right"
        unmountOnExit
      >
        <div>
          <div
            className="backdrop backdrop-transparent backdrop-menu"
            onClick={props.handleNotificationClick}
          />
          <div className="anim menu-notification">
            <h6 className="p-l-1">Notification</h6>
            <div className="scrollable">
              <div className="card">Coming soon</div>
              <div className="card">Coming soon</div>
              <div className="card">Coming soon</div>
              <div className="card">Coming soon</div>
              <div className="card">Coming soon</div>
              <div className="card">Coming soon</div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </Fragment>
  )
}

export default header
