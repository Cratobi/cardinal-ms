import React from "react"
import { CSSTransition } from "react-transition-group"
import "./OrderCard.css"
import { Link } from "react-router-dom"

const OrderCard = props => {
  return (
    <CSSTransition in={true} timeout={250} appear={true} classNames="slide-up">
      <Link className="order-card anim" to={props.path + props.id}>
        <div className="date">10/03/201</div>
        <div className="mid">
          <div className="order-no">{props.orderNo}</div>
          <div className="style-no" title={props.styleNo}>
            @{props.styleNo}
          </div>
        </div>
        <div className="buyer-name">{props.buyer}</div>
      </Link>
    </CSSTransition>
  )
}

export default OrderCard
