import React from "react"
import { Link } from "react-router-dom"

const header = props => {
  return (
    <Link className="order-card" to={"/order/" + props.id} key={props.id}>
      <div className="date">10/03/201</div>
      <div className="mid">
        <div className="order-no">{props.orderNo}</div>
        <div className="style-no" title={props.styleNo}>
          {props.styleNo}
        </div>
      </div>
      <div className="buyer-name">{props.buyer}</div>
    </Link>
  )
}

export default header
