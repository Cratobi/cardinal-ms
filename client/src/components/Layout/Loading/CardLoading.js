import React, { Fragment } from "react"
import "./CardLoading.css"
import { CSSTransition } from "react-transition-group"

const Cards = orders => {
  let ok = []
  for (let i = 1; i <= orders; i++) {
    ok.push(<div key={i} className="order-card loading-order-card anim" />)
  }
  return ok
}

const Loading = props => {
  return (
    <CSSTransition in={true} timeout={250} appear={true} classNames="fade">
      <Fragment>{Cards(props.orders)}</Fragment>
    </CSSTransition>
  )
}

export default Loading
