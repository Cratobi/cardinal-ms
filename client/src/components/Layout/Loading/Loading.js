import React from "react"

const Loading = props => {
  return (
    <h2 className="loading txt-center">
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
    </h2>
  )
}

export default Loading
