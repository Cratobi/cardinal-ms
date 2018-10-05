import React from "react"
import "./Modal.css"

const OrderCard = props => {
  return (
    <div className="modal-container">
      <div className="backdrop" onClick={() => props.handleModal(false)} />
      <div className="card modal anim">
        <div className="modal-header">
          <b className="txt txt-small">{props.tittle}</b>
          <div
            className="btn btn-round btn-transparent "
            onClick={() => props.handleModal(false)}
          >
            <i className="fas fa-times" />
          </div>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">{props.footer}</div>
      </div>
    </div>
  )
}

export default OrderCard
