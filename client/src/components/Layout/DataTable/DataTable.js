import React from "react"
// eslint-disable-next-line
import { get } from "immutable"

import Body from "./Body/Body"
import Header from "./Header/Header"
import "./DataTable.css"

const dataTable = props => {
  return (
    <table className="datatable">
      <thead>
        <tr>
          <Header headerData={props.tableData.get("tableheader")} />
        </tr>
      </thead>
      <tbody>
        <Body
          changeHandler={props.editability ? props.changeHandler : null}
          editability={props.editability}
          tableName={props.tableData.get("tablename")}
          tableData={props.tableData.get("tablebody")}
        />
      </tbody>
    </table>
  )
}

export default dataTable
