// eslsint-disable-next-line
import { fromJS, set, update, get } from 'immutable'
import knit_schema from './handlers/Knit_schema'

import knitData from './handlers/KnitData'

const initialState = fromJS({
	search_result: null,
	order: null,
	orders_count: null,
	orders: null,
	knit_schema,
	knit_data: null,
	knit_data2: {
		table_items: [
			['Item/Description ', 'Colour', 'Fabrics Composition', 'Size', '', '', '', 'Total Fabrics'],
			['', '', '', '', '', '', '', '', '', ''],

			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['TOTAL', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
		],
		table_fabricfinishprocess: [['', ''], ['', ''], ['', ''], ['', ''], ['', '']],
		table_quantity: [[''], ['']],

		table_extrafabric: [
			['', '', '', '', ''],
			['', '', '', '', ''],
			['', '', '', '', ''],
			['', '', '', '', ''],
			['', '', '', '', ''],
			['', '', '', '', ''],
			['', '', '', '', ''],
			[''],
		],
		table_rawitems: [
			['Item/Description ', 'Colour', 'Fabrics Composition', 'Size', 'Total Fabrics'],
			['', '', '', '', '', '', '', '', '', ''],

			['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
			['TOTAL', '', '', '', '', '', '', '', '', '', '', ''],
		],
		table_fabricsl: [
			['', '', '', '', '', '', ''],
			['', '', '', '', '', '', ''],
			['', '', '', '', '', '', ''],
			['', '', '', '', '', '', ''],
			['', '', '', '', '', '', ''],
			['', '', '', '', '', '', ''],
		],

		table_date: [
			['Yarn Required Date', ''],
			['Knitting Start Date', ''],
			['Knitting Close Date', ''],
			['Batch Received Date', ''],
			['Batch Delivery Date', ''],
			['Dyeing Start Date', ''],
			['Dyeing Close Date', ''],
			['Finished Fabrics Check Close', ''],
			['Finished Fabrics Inhouse', ''],
		],
	},
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
			return state.update('orders', orders => orders.concat(fromJS(action.payload)))
		case 'SAVE_ORDER':
			const knit_data = knitData(action.payload)
			state = state.set('knit_data', fromJS(knit_data))
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
