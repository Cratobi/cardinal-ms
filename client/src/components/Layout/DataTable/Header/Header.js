import React from 'react'
// eslint-disable-next-line
import { get } from 'immutable'

const tableHeader = (props) =>
	props.headerData
		? props.headerData.map((schema, index) => {
				let [ colspan, rowspan ] = [ null ]

				// Handle colspan or rowspan
				if (schema.get('colspan')) {
					colspan = schema.get('colspan')
				}
				if (schema.get('rowspan')) {
					rowspan = schema.get('rowspan')
				}

				return (
					<th key={index} colSpan={colspan} rowSpan={rowspan}>
						{schema.get('cellData')}
					</th>
				)
			})
		: null

export default tableHeader
