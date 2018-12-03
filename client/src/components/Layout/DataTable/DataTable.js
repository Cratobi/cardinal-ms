import React from 'react'
// eslint-disable-next-line
import { get } from 'immutable'

import Body from './Body/Body'
import Header from './Header/Header'
import './DataTable.css'

const dataTable = props => {
  return (
    <div className="table-container">
      <table
        className={`datatable${!props.editability ? ' static-datatable' : ''}${
          props.className ? ' ' + props.className : ''
        }`}
      >
        <thead>
          <tr>
            <Header headerData={props.schema.get('tableheader')} />
          </tr>
        </thead>
        <tbody>
          <Body
            changeHandler={props.changeHandler}
            editability={props.editability}
            tableName={props.schema.get('tablename')}
            schema={props.schema.get('tablebody')}
            data={props.data}
          />
        </tbody>
      </table>
    </div>
  )
}

export default dataTable
