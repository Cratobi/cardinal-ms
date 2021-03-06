import React from "react"

const Signin = props => {
  return (
    <div>
      <div className="auth-header">
        <div className="txt-small">Cardinal Management System</div>
        <div className="txt-title">FLAXEN GROUP</div>
      </div>
      {props.alert ? <div className="alert">{props.alert}</div> : null}
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
          className="hidden"
          onClick={props.handleSubmitForm}
          type="submit"
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
    </div>
  )
}

export default Signin
