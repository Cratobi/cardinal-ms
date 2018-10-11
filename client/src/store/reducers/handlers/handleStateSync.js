// eslint-disable-next-line
import { getIn, setIn } from 'immutable'

// Add Commas
const addCommas = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const getCellData = (state, tablename, rowindex, colindex) =>
  +state.getIn([
    'tabledata',
    'table_' + tablename,
    'tablebody',
    rowindex,
    colindex,
    'cellData',
  ])
const setCellData = (state, tablename, rowindex, colindex, value) =>
  state.setIn(
    [
      'tabledata',
      'table_' + tablename,
      'tablebody',
      rowindex,
      colindex,
      'cellData',
    ],
    value,
  )
const updateCellData = (state, tablename, rowindex, colindex, updateFunc) =>
  state.updateIn(
    [
      'tabledata',
      'table_' + tablename,
      'tablebody',
      rowindex,
      colindex,
      'cellData',
    ],
    old_val => {
      let new_val = updateFunc(+old_val)
      console.log(new_val)
      if (new_val !== 0) {
        new_val = ''
      }
      return new_val
    },
  )

// Some Presets
const getComposition__Total = state =>
  getCellData(state, 'colourandcompotision', 9, 11)

// Will update "Size" table's header taking value from Measurement Table
const composition__CloneSizeHeader = (state, colindex, value) => {
  state = setCellData(state, 'colourandcompotision', 0, colindex + 1, value)
  return state
}

// Will update "Composition" table's right, bottom and total cells
const composition__SumTotal = (state, rowindex, colindex, value, prev_val) => {
  const updateButtomRow = old_val => old_val + (+value - +prev_val)

  state = updateCellData(
    state,
    'colourandcompotision',
    9,
    colindex - 1,
    updateButtomRow,
  )

  state = state.updateIn(
    [
      'tabledata',
      'table_colourandcompotision',
      'tablebody',
      rowindex,
      12,
      'cellData',
    ],
    old_val => {
      const new_val = +old_val + (+value - +prev_val)
      return new_val !== 0 ? new_val : ''
    },
  )
  state = state.updateIn(
    ['tabledata', 'table_colourandcompotision', 'tablebody', 9, 11, 'cellData'],
    old_val => {
      const new_val = +old_val + (+value - +prev_val)
      return new_val !== 0 ? new_val : ''
    },
  )

  state = currency__All(state, 2)
  state = currency__All(state, 3)
  // state = price_All(state, 'fullUpdate')
  return state
}

// accessories__SumPrice
const accessories__SumPrice = (state, value, prev_val) => {
  state = state.updateIn(
    ['tabledata', 'table_accessoriesname', 'tablebody', 22, 1, 'cellData'],
    old_val => {
      old_val = parseFloat(old_val)
      value = parseFloat(value)
      prev_val = parseFloat(prev_val)

      if (isNaN(old_val)) {
        old_val = 0
      }
      if (isNaN(value)) {
        value = 0
      }
      if (isNaN(prev_val)) {
        prev_val = 0
      }
      const new_val = old_val + (value - prev_val)
      return new_val !== 0 ? new_val.toFixed(2) : ''
    },
  ) // parseFloat

  return state
}

// Will calculate and update "Currency" table's value
const currency__All = (state, rowindex, value) => {
  if (rowindex === 2 || rowindex === 4) {
    let lyca_body =
      Math.round(
        (((getComposition__Total(state) / 12) *
          getCellData(state, 'currency', rowindex, 1) *
          getCellData(state, 'currency', 4, 1)) /
          100) *
          100,
      ) / 100
    if (lyca_body === 0) {
      lyca_body = ''
    }

    state = setCellData(state, 'currency', 4, 2, lyca_body)

    return state
  } else if (rowindex === 3 || rowindex === 5) {
    let lyca_rib =
      Math.round(
        (((getComposition__Total(state) / 12) *
          getCellData(state, rowindex, 1) *
          getCellData(state, 5, 1)) /
          100) *
          100,
      ) / 100

    if (lyca_rib === 0) {
      lyca_rib = ''
    }

    state = setCellData(state, 'currency', 5, 2, lyca_rib)

    return state
  } else {
    state = setCellData(state, 'currency', rowindex, 1, value)
    return state
  }
}

// PRICE
// const price_All = (state, rowindex, colindex, value, prev_val) => {
//   // Confusing values
//   const SF = () => {
//     const sf = state.getIn([
//       'tabledata',
//       'extradata',
//       'self_fabric_matching_body',
//     ])
//     return ((getComposition__Total(state) / 12) * sf) / 1000
//   }
//   const TF = () => {
//     return (getComposition__Total(state) / 12) * 0.98555732
//   }
//   const QT = () => {
//     const q_total = +state.getIn([
//       'tabledata',
//       'table_extrafabric',
//       'tablebody',
//       7,
//       1,
//       'cellData',
//     ])

//     return TF() + q_total
//   }

//   // Calculates Particular PerPcs
//   const particularPerPcs = (state, row, col = 3) => {
//     const particular_value = getCellData(state, 'price', row, col - 1)
//     const old_per_pcs = getCellData(state, 'price', row, col)
//     const getComposition__Total = composition__Total(state)

//     const perPcs = (particular_value, composition__Total) => {
//       let per_pcs = (
//         parseFloat(particular_value) / parseFloat(composition__Total)
//       ).toFixed(2)

//       return per_pcs
//     }

//     let per_pcs = perPcs(particular_value, composition__Total)

//     if (isNaN(per_pcs)) {
//       per_pcs = ''
//     }

//     if (old_per_pcs !== per_pcs) {
//       state = state.setIn(
//         ['tabledata', 'table_price', 'tablebody', row, col, 'cellData'],
//         per_pcs,
//       )

//       return state
//     }

//     return state
//   }
//   // Calculates Particular Values
//   const particularValue = (state, row) => {
//     const exchange_rate = state.getIn([
//       'tabledata',
//       'table_currency',
//       'tablebody',
//       0,
//       1,
//       'cellData',
//     ])

//     switch (row) {
//       case 0:
//         const count_yarn = state.getIn([
//           'tabledata',
//           'table_currency',
//           'tablebody',
//           1,
//           1,
//           'cellData',
//         ])
//         return (parseFloat(count_yarn) * parseFloat(value)).toFixed(0)

//       case 1:
//         return (
//           (QT - SF) *
//           (parseFloat(value) / parseFloat(exchange_rate))
//         ).toFixed(2)
//       case 2:
//         return (SF * (parseFloat(value) / parseFloat(exchange_rate))).toFixed(2)
//       case 3:
//         return (QT * (parseFloat(value) / parseFloat(exchange_rate))).toFixed(2)
//       case 4:
//         const lyca_body = state.getIn([
//           'tabledata',
//           'table_currency',
//           'tablebody',
//           4,
//           2,
//           'cellData',
//         ])
//         const lyca_rib = state.getIn([
//           'tabledata',
//           'table_currency',
//           'tablebody',
//           5,
//           2,
//           'cellData',
//         ])

//         return (
//           (lyca_body + lyca_rib) *
//           (parseFloat(value) / parseFloat(exchange_rate))
//         ).toFixed(2)
//       case 5:
//         return ((QT * parseFloat(value)) / parseFloat(exchange_rate)).toFixed(2)
//       case 6:
//       case 7:
//         return (parseFloat(value) * (QT / parseFloat(exchange_rate))).toFixed(2)
//       case 8:
//         const aop_quantity = state.getIn([
//           'tabledata',
//           'table_currency',
//           'tablebody',
//           6,
//           1,
//           'cellData',
//         ])

//         return (
//           parseFloat(value) *
//           ((TF - SF + parseFloat(aop_quantity)) / parseFloat(exchange_rate))
//         ).toFixed(2)
//       case 9:
//       case 10:
//       case 11:
//       case 12:
//       case 13:
//       case 14:
//         const composition__Total = state.getIn([
//           'tabledata',
//           'table_colourandcompotision',
//           'tablebody',
//           9,
//           11,
//           'cellData',
//         ])

//         return (
//           parseFloat(value) *
//           (parseFloat(composition__Total) / 12)
//         ).toFixed(2)
//       // no default
//     }
//   }
//   // Calculates Price Difference
//   const priceDifference = state => {
//     let per_pcs_total = parseFloat(
//       state.getIn(['tabledata', 'table_price', 'tablebody', 21, 2, 'cellData']),
//     )
//     per_pcs_total = isNaN(per_pcs_total) ? 0 : per_pcs_total

//     for (let row = 22; row <= 24; row++) {
//       let color_price = parseFloat(
//         state.getIn(
//           ['tabledata', 'table_price', 'tablebody', row, 1, 'cellData'],
//           per_pcs_total,
//         ),
//       )
//       const color_price_difference = isNaN(color_price)
//         ? `(${per_pcs_total})`
//         : (color_price - per_pcs_total).toFixed(2)

//       state = state.setIn(
//         ['tabledata', 'table_price', 'tablebody', row, 3, 'cellData'],
//         color_price_difference,
//       )
//     }

//     return state
//   }

//   // Calculates Value Total
//   const particularValueTotal = state => {
//     let sum_particular_value = 0
//     for (let row = 0; row <= 19; row++) {
//       let particular_value = parseFloat(
//         state.getIn([
//           'tabledata',
//           'table_price',
//           'tablebody',
//           row,
//           2,
//           'cellData',
//         ]),
//       )
//       particular_value = isNaN(particular_value) ? 0 : particular_value

//       sum_particular_value += particular_value
//     }

//     const buying_commotion = +state.getIn([
//       'tabledata',
//       'table_price',
//       'tablebody',
//       20,
//       1,
//       'cellData',
//     ])
//     let sum_particular_value_commotion =
//       sum_particular_value - sum_particular_value * (1 - buying_commotion / 100)
//     let sum_particular_value_total =
//       sum_particular_value + sum_particular_value_commotion

//     sum_particular_value_commotion =
//       sum_particular_value_commotion !== 0
//         ? sum_particular_value_commotion.toFixed(2)
//         : ''

//     sum_particular_value_total =
//       sum_particular_value_total !== 0
//         ? sum_particular_value_total.toFixed(2)
//         : ''

//     state = state.setIn(
//       ['tabledata', 'table_price', 'tablebody', 20, 2, 'cellData'],
//       sum_particular_value_commotion,
//     )
//     state = state.setIn(
//       ['tabledata', 'table_price', 'tablebody', 21, 1, 'cellData'],
//       sum_particular_value_total,
//     )
//     state = particularPerPcs(state, 21, 2)

//     return state
//   }

//   if (rowindex === 'fullUpdate') {
//     let row
//     for (row = 0; row <= 21; row++) {
//       state = particularPerPcs(state, row)
//       return state
//     }
//   } else {
//     const old_particular_value = state.getIn([
//       'tabledata',
//       'table_price',
//       'tablebody',
//       rowindex,
//       2,
//       'cellData',
//     ])

//     let particular_value = particularValue(state, rowindex)
//     if (isNaN(particular_value)) {
//       particular_value = ''
//     }

//     if (
//       prev_val !== particular_value &&
//       [15, 16, 17, 18, 19, 21, 22, 23].filter(row => rowindex === row)
//         .length === 0 &&
//       colindex !== 2
//     ) {
//       state = state.setIn(
//         ['tabledata', 'table_price', 'tablebody', rowindex, 2, 'cellData'],
//         particular_value,
//       )
//     } else if (colindex === 2) {
//       state = state.setIn(
//         ['tabledata', 'table_price', 'tablebody', rowindex, 2, 'cellData'],
//         value,
//       )
//     }

//     state = particularValueTotal(state, particular_value, old_particular_value)
//     state = particularPerPcs(state, rowindex)
//     state = priceDifference(state)
//     return state
//   }

//   return state
// }

export {
  getCellData,
  setCellData,
  composition__CloneSizeHeader,
  composition__SumTotal,
  accessories__SumPrice,
  currency__All,
  // price_All,
}
