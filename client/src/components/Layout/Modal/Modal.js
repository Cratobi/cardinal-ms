import React, { Fragment } from "react"
import "./Modal.css"

const OrderCard = props => {
  return (
    <Fragment>
      <div className="modal-container">
        <div className="backdrop" onClick={props.handleModalClose} />
        <div className="card modal">
          <div className="modal-header">
            <b className="txt-bolder">{props.tittle}</b>
            <div
              className="btn btn-chip btn-dark btn-chip-small"
              onClick={props.handleModalClose}
            >
              <span>Close</span>
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">{props.footer}</div>
        </div>
      </div>
    </Fragment>
  )
}

export default OrderCard
