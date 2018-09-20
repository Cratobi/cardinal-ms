import React from "react"
import "./OrderCard.css"
import { Link } from "react-router-dom"

import Aux from "../../../hoc/_Aux/_Aux"

const OrderCard = props => {
  return (
    <Aux>
      <Link className="order-card" to={props.path + props.id}>
        <div className="date">10/03/201</div>
        {props.handleDeleteDraftBtn ? (
          <button
            className="btn btn-caution btn-round"
            onClick={event => props.handleDeleteDraftBtn(event, props.id)}
          >
            <div className="btn btn-caution btn-chip pk">DEL</div>
            <i className="fas fa-trash p-r" />
          </button>
        ) : null}
        <div className="mid">
          <div className="order-no">{props.orderNo}</div>
          <div className="style-no" title={props.styleNo}>
            #{props.styleNo}
          </div>
        </div>
        <div className="buyer-name">{props.buyer}</div>
      </Link>
    </Aux>
  )
}

export default OrderCard
