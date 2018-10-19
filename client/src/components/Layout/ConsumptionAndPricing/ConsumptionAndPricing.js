import React, { Fragment } from 'react'
// eslint-disable-next-line
import { get } from 'immutable'
import './ConsumptionAndPricing.css'

import DataTable from '../DataTable/DataTable'

const consumptionAndPricing = props => {
  return (
    <Fragment>
      <DataTable
        editability={false}
        tableData={props.tabledata.get('table_measurments')}
      />
      <DataTable
        editability={false}
        tableData={props.tabledata.get('table_colourandcompotision')}
      />
      <div className="inline-datatable-conatiner">
        <DataTable
          editability={false}
          tableData={props.tabledata.get('table_fabricfinishprocess')}
        />
        <DataTable
          editability={false}
          tableData={props.tabledata.get('table_extrafabric')}
        />
      </div>
      <div className="inline-datatable-conatiner">
        <div>
          <DataTable
            editability={false}
            tableData={props.tabledata.get('table_garmentapplication')}
          />
          <DataTable
            editability={false}
            tableData={props.tabledata.get('table_accessoriesname')}
          />
        </div>
        <div>
          <DataTable
            editability={false}
            tableData={props.tabledata.get('table_currency')}
          />
          <DataTable
            editability={false}
            tableData={props.tabledata.get('table_date')}
          />
        </div>
        <DataTable
          editability={false}
          tableData={props.tabledata.get('table_price')}
        />
      </div>
    </Fragment>
  )
}

export default consumptionAndPricing
