import React from "react"

const Loading = props => {
  return (
    <h5 className={"loading txt-center" + props.center ? "loading-center" : ""}>
      {props.txt ? (
        <div>
          Loading <br />
        </div>
      ) : null}
      <span className="anim">
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </h5>
  )
}

export default Loading
