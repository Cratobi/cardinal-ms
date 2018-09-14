import React from "react"

const Loading = props => {
  return (
    <h2 className="loading txt-center">
      Loading
      <br />
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
