// eslsint-disable-next-line
import { fromJS, set, update, get } from 'immutable'

import knit_schema from './helpers/schemas/Knit_schema'
import garment_schema from './helpers/schemas/Garment_schema'

import knitData from './helpers/dataMaps/KnitData'
import garmentData from './helpers/dataMaps/GarmentData'

const initialState = fromJS({
	search_result  : null,
	order          : null,
	orders_count   : null,
	orders         : null,
	knit_schema,
	knit_data      : null,
	garment_schema,
	garment_data   : null
})

const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SAVE_ORDERS':
			return state.set('orders', fromJS(action.payload))
		case 'SAVE_ORDERS_COUNT':
			return state.set('orders_count', action.payload.count)
		case 'RESET_ORDERS':
			state = state.set('orders_count', initialState.get('orders_count'))
			return state.set('orders', initialState.get('orders'))
		case 'ADD_ORDERS':
			return state.update('orders', (orders) => orders.concat(fromJS(action.payload)))
		case 'SAVE_ORDER':
			const knit_data = knitData(action.payload)
			let garment_apps = []
			action.payload.tabledata.table_garmentapplication.map((app, i) => (garment_apps = [ ...garment_apps, app[0] ]))
			const garment_data = garmentData(action.payload, garment_apps)
			state = state.set('knit_data', fromJS(knit_data))
			state = state.set('garment_data', fromJS(garment_data))

			return state.set('order', fromJS(action.payload))
		case 'RESET_ORDER':
			return state.set('order', initialState.get('order'))
		case 'SAVE_SEARCHED_RESULT':
			return state.set('search_result', fromJS(action.payload))
		case 'RESET_SEARCHED_RESULT':
			return state.set('search_result', initialState.get('search_result'))
		default:
			return state
	}
}

export default orderReducer
