import React from "react"
import "./SingleGrid.css"

import Aux from "../../../hoc/_Aux/_Aux"

const SingleGrid = props => {
  return (
    <div onScroll={props.handleScroll} className="container single-grid">
      {!props.emptyTxt ? (
        <Aux>
          <div className={"card order-cards-holder " + props.containerCSS}>
            {props.header ? (
              <div className={"card-header" + props.headerCSS}>
                {props.header}
              </div>
            ) : null}
            {props.children}
            {props.footer ? (
              <div className={"card-footer" + props.footerCSS}>
                {props.footer}
              </div>
            ) : null}
          </div>
        </Aux>
      ) : (
        <h5 className="loading txt-lighter">{props.emptyTxt}</h5>
      )}
    </div>
  )
}

export default SingleGrid
