import React from "react"
// eslint-disable-next-line
import { get } from "immutable"

import TableLayout from "../Table/Table"

const consumptionAndPricing = props => {
  return (
    <div>
      <TableLayout
        editability="false"
        tableData={props.tabledata.get("table_measurments")}
      />
      <br />
      <TableLayout
        editability="false"
        tableData={props.tabledata.get("table_colourandcompotision")}
      />
      <br />
      <TableLayout
        editability="false"
        tableData={props.tabledata.get("table_extrafabric")}
      />
      <br />
      <TableLayout
        editability="false"
        tableData={props.tabledata.get("table_fabricfinishprocess")}
      />
      <br />
      <TableLayout
        editability="false"
        tableData={props.tabledata.get("table_garmentapplication")}
      />
      <br />
      <TableLayout
        editability="false"
        tableData={props.tabledata.get("table_accessoriesname")}
      />
      <br />
      <TableLayout
        editability="false"
        tableData={props.tabledata.get("table_currency")}
      />
      <br />
      <TableLayout
        editability="false"
        tableData={props.tabledata.get("table_price")}
      />
      <br />
    </div>
  )
}

export default consumptionAndPricing
