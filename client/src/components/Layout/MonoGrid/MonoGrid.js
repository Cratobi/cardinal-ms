import React from "react"
import { CSSTransition } from "react-transition-group"
import "./MonoGrid.css"

const MonoGrid = props => {
  return (
    <div onScroll={props.handleScroll} className="container mono-grid">
      {!props.emptyTxt ? (
        <CSSTransition
          in={true}
          timeout={500}
          appear={true}
          classNames="slide-up"
        >
          <div
            className={
              "anim card card-container " +
              (props.CustomCSS
                ? "custom-card-container-" + props.CustomCSS
                : "")
            }
          >
            {props.header ? (
              <div className="card-header">{props.header}</div>
            ) : null}
            <div className="card-body">{props.children}</div>
            {props.footer ? (
              <div className="card-footer">{props.footer}</div>
            ) : null}
          </div>
        </CSSTransition>
      ) : (
        <h5 className="loading txt-lighter">{props.emptyTxt}</h5>
      )}
    </div>
  )
}

export default MonoGrid
