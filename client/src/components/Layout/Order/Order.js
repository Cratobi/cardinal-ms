import React from "react"
import { Link } from "react-router-dom"

const header = props => {
  return (
    <span>
      <Link className="order-card" to={props.path + props.id}>
        <div className="date">10/03/201</div>
        <div className="mid">
          <div className="order-no">{props.orderNo}</div>
          <div className="style-no" title={props.styleNo}>
            {props.styleNo}
          </div>
        </div>
        <div className="buyer-name">{props.buyer}</div>
      </Link>
      {props.deletable ? (
        <button
          className="caution card-inner-btn"
          onClick={() => props.handleDeleteDraftBtn(props.id)}
        >
          <i className="fas fa-trash p-r" />
        </button>
      ) : null}
    </span>
  )
}

export default header
