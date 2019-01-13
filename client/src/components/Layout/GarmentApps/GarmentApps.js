import React, { Fragment } from 'react'
// eslint-disable-next-line
import { get, size } from 'immutable'
import './GarmentApps.css'

import DataTable from '../DataTable/DataTable'

const GarmentApps = (props) => {
	return props.schema && props.data ? props.schema.size && props.data.size ? (
		<Fragment>
			<DataTable editability={false} schema={props.schema.get('table_items')} data={props.data.get('table_items')} />
			<div className='inline-datatable-conatiner'>
				<DataTable
					editability={false}
					schema={props.schema.get('table_fabricfinishprocess')}
					data={props.data.get('table_fabricfinishprocess')}
				/>
				<DataTable
					editability={false}
					schema={props.schema.get('table_quantity')}
					data={props.data.get('table_quantity')}
				/>
				<DataTable
					editability={false}
					schema={props.schema.get('table_extrafabric')}
					data={props.data.get('table_extrafabric')}
				/>
			</div>
			<DataTable
				editability={false}
				schema={props.schema.get('table_rawitems')}
				data={props.data.get('table_rawitems')}
			/>
			<div className='inline-datatable-conatiner'>
				<DataTable
					editability={false}
					schema={props.schema.get('table_fabricsl')}
					data={props.data.get('table_fabricsl')}
				/>
				<DataTable editability={false} schema={props.schema.get('table_date')} data={props.data.get('table_date')} />
			</div>
			{/*</div>
				<div className="inline-datatable-conatiner">
					<div>
						
					</div>
					<div>
						<DataTable
							editability={false}
							schema={props.schema.get('table_currency')}
							data={props.data.get('table_currency')}
						/>
						<DataTable
							editability={false}
							schema={props.schema.get('table_date')}
							data={props.data.get('table_date')}
						/>
					</div>
					<DataTable
						editability={false}
						schema={props.schema.get('table_price')}
						data={props.data.get('table_price')}
					/>
				</div> */}
		</Fragment>
	) : null : null
}

export default GarmentApps
