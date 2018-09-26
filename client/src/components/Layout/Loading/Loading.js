import React from "react"
import { CSSTransition } from "react-transition-group"

const Loading = props => {
  return (
    <CSSTransition in={true} timeout={500} appear={true} classNames="fade">
      <h5
        className={"loading txt-center" + props.center ? "loading-center" : ""}
      >
        {props.txt ? (
          <div>
            Loading <br />
          </div>
        ) : null}
        <span className="loading-anim">
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </h5>
    </CSSTransition>
  )
}

export default Loading
