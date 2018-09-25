import React, { Fragment } from "react"
import "./OrderCard.css"
import { Link } from "react-router-dom"

const OrderCard = props => {
  return (
    <Fragment>
      <Link className="order-card" to={props.path + props.id}>
        <div className="date">10/03/201</div>
        <div className="mid">
          <div className="order-no">{props.orderNo}</div>
          <div className="style-no" title={props.styleNo}>
            @{props.styleNo}
          </div>
        </div>
        <div className="buyer-name">{props.buyer}</div>
      </Link>
    </Fragment>
  )
}

export default OrderCard
