// eslint-disable-next-line
import { fromJS, set } from 'immutable'

import CnP_data from './handlers/CnP_data'
import CnP_dataSchema from './handlers/CnP_dataSchema'
import * as syncHandlers from './handlers/handleStateSync'

const initialState = fromJS({
	drafts: null,
	metadata: null,
	CnP_dataSchema,
	CnP_data,
})

const draftReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SAVE_DRAFTS':
			return state.set('drafts', fromJS(action.payload))
		case 'SAVE_DRAFT_METADATA':
			return state.set('metadata', fromJS(action.payload))
		case 'SAVE_DRAFT_TABLEDATA':
			return state.set('CnP_data', fromJS(action.payload))
		case 'RESET_DRAFT':
			state = state.set('metadata', initialState.get('metadata'))
			return state.set('tabledata', initialState.get('tabledata'))
		case 'RESET_DRAFT_TABLE':
			return state.set('tabledata', initialState.get('tabledata'))
		case 'RESET_DRAFTS':
			return state.set('drafts', initialState.get('drafts'))
		case 'SYNCTABLES':
			const rowindex = +action.payload.rowindex
			const colindex = +action.payload.colindex
			const tablename = action.payload.tablename
			let value = action.payload.value

			if (tablename === 'extradata') {
				state = syncHandlers.setCellData(state, tablename, rowindex, colindex, value)
				// if (name === 'self_fabric_matching_body') {
				// 	state = syncHandlers.setR22(state, value)
				// }
				// if (
				// 	name === 'fabric_weight' ||
				// 	name === 's_allowance_chest' ||
				// 	name === 's_allowance_length' ||
				// 	name === 'wastage'
				// )
				// syncHandlers.loop(1, 10, colindex => (state = syncHandlers.setBasic(state, colindex)))

				return state
			}
			if (tablename === 'measurments') {
				state = syncHandlers.setCellData(state, tablename, rowindex, colindex, value)
				if (rowindex === 0 && colindex !== 0)
					state = syncHandlers.composition__CloneSizeHeader(state, colindex, value)

				if (colindex !== 0 && rowindex !== 0) state = syncHandlers.setBasic(state, colindex)

				return state
			}
			// // if (tablename === 'fabricfinishprocess' && colindex === 1) {
			// //   if (value === 'No') {
			// //     value = 'Yes'
			// //   } else if (value === 'Yes') {
			// //     value = 'No'
			// //   }

			// //   state = syncHandlers.setCellData(
			// //     state,
			// //     tablename,
			// //     rowindex,
			// //     colindex,
			// //     value,
			// //   )
			// // }
			if (tablename === 'colourandcompotision' && 1 <= rowindex <= 8 && 2 <= colindex <= 11) {
				const prev_val = syncHandlers.getCellData(state, tablename, rowindex, colindex)
				state = syncHandlers.setCellData(state, tablename, rowindex, colindex, value)
				state = syncHandlers.composition__SumTotal(state, rowindex, colindex, value, prev_val)
				if (colindex > 1 && rowindex > 0) state = syncHandlers.setS22(state)

				return state
			}
			if (tablename === 'extrafabric' && 0 <= rowindex <= 6 && colindex === 4) {
				const prev_val = syncHandlers.getCellData(state, tablename, rowindex, colindex)
				state = syncHandlers.setCellData(state, tablename, rowindex, colindex, value)
				state = syncHandlers.extrafabric__GTotal(state, value, prev_val)

				return state
			}
			// if (
			//   tablename === 'accessoriesname' &&
			//   0 <= rowindex <= 21 &&
			//   colindex === 2
			// ) {
			//   const prev_val = syncHandlers.getCellData(
			//     state,
			//     tablename,
			//     rowindex,
			//     colindex,
			//   )
			//   state = syncHandlers.setCellData(
			//     state,
			//     tablename,
			//     rowindex,
			//     colindex,
			//     value,
			//   )
			//   state = syncHandlers.accessories__SumPriceTotal(state, value, prev_val)

			//   return state
			// }
			// if (tablename === 'currency') {
			//   state = syncHandlers.setCellData(
			//     state,
			//     tablename,
			//     rowindex,
			//     colindex,
			//     value,
			//   )

			//   if (rowindex === 4 || rowindex === 5) {
			//     state = syncHandlers.currency__BodyConsumptionAndLycra(state)
			//     state = syncHandlers.currency__RibConsumptionAndLycra(state)
			//   }
			//   if (rowindex === 0)
			//     syncHandlers.loopFor(
			//       [1, 2, 3, 5, 7, 8],
			//       rowindex => (state = syncHandlers.price__Value(state, rowindex)),
			//     )

			//   return state
			// }
			// if (tablename === 'price') {
			//   state = syncHandlers.setCellData(
			//     state,
			//     tablename,
			//     rowindex,
			//     colindex,
			//     value,
			//   )
			//   if (rowindex !== 22 && rowindex !== 23 && rowindex !== 24) {
			//     state = syncHandlers.price__Value(state, rowindex)
			//   }
			//   state = syncHandlers.price__PerPcs(state, rowindex)

			//   return state
			// }
			state = syncHandlers.setCellData(state, tablename, rowindex, colindex, value)
			return state
		default:
			return state
	}
}

export default draftReducer
