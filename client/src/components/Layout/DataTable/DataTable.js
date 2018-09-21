import React from "react"
// eslint-disable-next-line
import { get } from "immutable"

import Body from "./Body/Body"
import Header from "./Header/Header"
import "./DataTable.css"

const dataTable = props => {
  return (
    <table
      className={`datatable ${!props.editability ? "static-datatable" : ""}`}
    >
      <thead>
        <tr>
          <Header headerData={props.tableData.get("tableheader")} />
        </tr>
      </thead>
      <tbody>
        <Body
          changeHandler={props.changeHandler}
          editability={props.editability}
          tableName={props.tableData.get("tablename")}
          tableData={props.tableData.get("tablebody")}
          wheel={props.wheel}
        />
      </tbody>
    </table>
  )
}

export default dataTable
