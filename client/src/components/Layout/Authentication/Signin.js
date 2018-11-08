import React, { Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'

const Signin = props => {
  return (
    <Fragment>
      <div className="auth-header">
        <div className="txt-small">Cardinal Management System</div>
        <div className="txt-title">FLAXEN GROUP</div>
      </div>
      <CSSTransition
        in={props.alert !== '' ? true : false}
        timeout={250}
        classNames="outside"
        unmountOnExit
      >
        <div className="alert">{props.alert}</div>
      </CSSTransition>

      {/* {props.alert ? <div className="alert">{props.alert}</div> : null} */}
      <form className="auth-form" method="post" onSubmit={props.handleSubmit}>
        <input
          className="autofill-color"
          type="text"
          name="username"
          placeholder=" USERNAME"
          onChange={props.handleChange}
          value={props.form.username}
        />
        <input
          className="autofill-color"
          type="password"
          name="password"
          placeholder=" PASSWORD"
          autoComplete="true"
          onChange={props.handleChange}
          value={props.form.password}
        />
        <input
          type="submit"
          className="hidden"
          onClick={props.handleSubmitForm}
          disabled={props.form.username && props.form.password ? false : true}
        />
        <div className="btn-container">
          <button
            disabled={props.form.username ? false : true}
            onClick={props.handleSubmitEmail}
          >
            HELP?
          </button>
          <button
            onClick={props.handleSubmitForm}
            disabled={props.form.username && props.form.password ? false : true}
          >
            SIGN IN
          </button>
        </div>
      </form>
    </Fragment>
  )
}

export default Signin
