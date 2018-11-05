import React from 'react'
// import { Link } from 'react-router-dom'

import MonoGridLayout from '../MonoGrid/MonoGrid'

const Unauthorized = props => {
  return (
    <MonoGridLayout CustomCSS="orders">
      <div>
        <h4> You are not authorized X_ X </h4>
        {/* <Link to="/">Go back to home</Link> */}
      </div>
    </MonoGridLayout>
  )
}

export default Unauthorized
