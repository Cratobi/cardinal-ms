// eslint-disable-next-line
import { fromJS, getIn, set, setIn } from 'immutable'

import tabledata from './handlers/tabledataSchema'
import * as syncHandlers from './handlers/handleStateSync'

const initialState = fromJS({
  drafts: null,
  metadata: null,
  tabledata,
})

const draftReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_DRAFTS':
      return state.set('drafts', fromJS(action.payload))
    case 'SAVE_DRAFT_METADATA':
      return state.set('metadata', fromJS(action.payload))
    case 'SAVE_DRAFT_TABLEDATA':
      return state.set('tabledata', fromJS(action.payload))
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

      if (tablename === 'measurments' && rowindex === 0 && colindex !== 0) {
        state = syncHandlers.setCellData(
          state,
          tablename,
          rowindex,
          colindex,
          value,
        )
        state = syncHandlers.composition__CloneSizeHeader(
          state,
          colindex,
          value,
        )
        return state
      }
      if (
        tablename === 'colourandcompotision' &&
        1 <= rowindex <= 8 &&
        2 <= colindex <= 11
      ) {
        const prev_val = syncHandlers.getCellData(
          state,
          tablename,
          rowindex,
          colindex,
        )
        state = syncHandlers.setCellData(
          state,
          tablename,
          rowindex,
          colindex,
          value,
        )
        return syncHandlers.composition__SumTotal(
          state,
          rowindex,
          colindex,
          value,
          prev_val,
        )
      }
      if (
        tablename === 'accessoriesname' &&
        0 <= rowindex <= 21 &&
        colindex === 2
      ) {
        const prev_val = syncHandlers.getCellData(
          state,
          tablename,
          rowindex,
          colindex,
        )
        state = syncHandlers.setCellData(
          state,
          tablename,
          rowindex,
          colindex,
          value,
        )
        state = syncHandlers.accessories__SumPriceTotal(state, value, prev_val)

        return state
      }
      if (tablename === 'currency') {
        state = syncHandlers.setCellData(
          state,
          tablename,
          rowindex,
          colindex,
          value,
        )

        if (rowindex === 4 || rowindex === 5) {
          state = syncHandlers.currency__BodyConsumptionAndLycra(state)
          state = syncHandlers.currency__RibConsumptionAndLycra(state)
        }
        if (rowindex === 0)
          syncHandlers.loopFor(
            [1, 2, 3, 5, 7, 8],
            rowindex => (state = syncHandlers.price__Value(state, rowindex)),
          )

        return state
      }
      if (tablename === 'price') {
        state = syncHandlers.setCellData(
          state,
          tablename,
          rowindex,
          colindex,
          value,
        )
        if (rowindex !== 22 && rowindex !== 23 && rowindex !== 24) {
          state = syncHandlers.price__Value(state, rowindex)
        }
        state = syncHandlers.price__PerPcs(state, rowindex)

        return state
      }
      state = syncHandlers.setCellData(
        state,
        tablename,
        rowindex,
        colindex,
        value,
      )
      return state
    default:
      return state
  }
}

export default draftReducer
