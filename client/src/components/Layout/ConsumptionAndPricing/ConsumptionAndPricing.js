import React from "react"
// eslint-disable-next-line
import { get } from "immutable"
import "./ConsumptionAndPricing.css"

import DataTable from "../DataTable/DataTable"
import Aux from "../../../hoc/_Aux/_Aux"

const consumptionAndPricing = props => {
  return (
    <Aux>
      <DataTable
        editability={false}
        tableData={props.tabledata.get("table_measurments")}
      />
      <br />
      <DataTable
        editability={false}
        tableData={props.tabledata.get("table_colourandcompotision")}
      />
      <br />
      <DataTable
        editability={false}
        tableData={props.tabledata.get("table_extrafabric")}
      />
      <br />
      <DataTable
        editability={false}
        tableData={props.tabledata.get("table_fabricfinishprocess")}
      />
      <br />
      <DataTable
        editability={false}
        tableData={props.tabledata.get("table_garmentapplication")}
      />
      <br />
      <DataTable
        editability={false}
        tableData={props.tabledata.get("table_accessoriesname")}
      />
      <br />
      <DataTable
        editability={false}
        tableData={props.tabledata.get("table_currency")}
      />
      <br />
      <DataTable
        editability={false}
        tableData={props.tabledata.get("table_price")}
      />
    </Aux>
  )
}

export default consumptionAndPricing
