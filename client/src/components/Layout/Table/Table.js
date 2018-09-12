import React from "react"
import TableHeader from "./TableHeader/TableHeader"
// eslint-disable-next-line
import { get } from "immutable"
import TableBody from "./TableBody/TableBody"

const tableLayout = props => {
  return (
    <table className="table table-data">
      <thead>
        <tr>
          <TableHeader headerData={props.tableData.get("tableheader")} />
        </tr>
      </thead>
      <tbody>
        <TableBody
          changeHandler={props.editability ? props.changeHandler : null}
          editability={props.editability}
          tableName={props.tableData.get("tablename")}
          tableData={props.tableData.get("tablebody")}
        />
      </tbody>
    </table>
  )
}

export default tableLayout
