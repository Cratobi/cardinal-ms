import React from "react"
// eslint-disable-next-line
import { get } from "immutable"

const tableHeader = props =>
  props.headerData
    ? props.headerData.map((data, index) => (
        <th key={index}>{data.get("cellData")}</th>
      ))
    : null

export default tableHeader
