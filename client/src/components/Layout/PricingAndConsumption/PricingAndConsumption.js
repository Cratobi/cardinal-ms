import React, { Fragment } from 'react'
// eslint-disable-next-line
import { get, size } from 'immutable'
import './PricingAndConsumption.css'

import DataTable from '../DataTable/DataTable'

const pricingAndConsumption = props => {
	return props.schema && props.data ? (
		props.schema.size && props.data.size ? (
			<Fragment>
				<DataTable
					editability={false}
					schema={props.schema.get('table_measurments')}
					data={props.data.get('table_measurments')}
				/>
				<DataTable
					editability={false}
					schema={props.schema.get('table_colourandcompotision')}
					data={props.data.get('table_colourandcompotision')}
				/>
				<div className="inline-datatable-conatiner">
					<DataTable
						editability={false}
						schema={props.schema.get('table_fabricfinishprocess')}
						data={props.data.get('table_fabricfinishprocess')}
					/>
					<DataTable
						editability={false}
						schema={props.schema.get('table_extrafabric')}
						data={props.data.get('table_extrafabric')}
					/>
				</div>
				<div className="inline-datatable-conatiner">
					<div>
						<DataTable
							editability={false}
							schema={props.schema.get('table_garmentapplication')}
							data={props.data.get('table_garmentapplication')}
						/>
						<DataTable
							editability={false}
							schema={props.schema.get('table_accessoriesname')}
							data={props.data.get('table_accessoriesname')}
						/>
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
				</div>
			</Fragment>
		) : null
	) : null
}

export default pricingAndConsumption
