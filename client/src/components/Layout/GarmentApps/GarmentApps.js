import React, { Fragment } from 'react'
// eslint-disable-next-line
import { get, size, toJS } from 'immutable'
import './GarmentApps.css'

import DataTable from '../DataTable/DataTable'
let o = (x) => x.toJS()

const GarmentApps = (props) => {
	return props.schema && props.data ? props.schema.size && props.data.size ? (
		<Fragment>
			<DataTable
				editability={false}
				schema={props.schema.get('table_items')}
				data={props.data.get(0).get('table_items')}
			/>
		</Fragment>
	) : null : null
}

export default GarmentApps
