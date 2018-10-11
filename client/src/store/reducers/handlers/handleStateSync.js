// eslint-disable-next-line
import { getIn, setIn } from 'immutable'

// Add Commas
const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// 2 Dec

const loop = (start, end, Func) => {
  let i
  for (i = start; i <= end; i++) {
    Func(i)
  }
  return null
}
const loopFor = (array, Func) => {
  let i
  for (i = 0; i <= array.length; i++) {
    Func(array[i])
  }
  return null
}
const Round = num => {
  num = Math.round(num * 100) / 100
  if (isNaN(num)) num = 0

  return num
}
const toFloat = num => {
  num = parseFloat(num)
  if (isNaN(num)) num = 0

  num = Math.round(num * 100) / 100
  if (isNaN(num)) num = 0

  return num
}
const toFloatRound = num => {
  num = parseFloat(num)

  if (isNaN(num)) num = 0
  num = Math.round(num * 100) / 100
  if (isNaN(num)) num = 0

  return num
}
const NaNChecker = num => {
  if (isNaN(num)) num = 0

  return num
}
const infinityChecker = num => {
  if (!isFinite(num)) num = ''

  return num
}
const emptifier = num => {
  if (num === 0) num = ''

  return num
}

const getCellData = (state, tablename, rowindex, colindex) => {
  let cellData = toFloat(
    state.getIn([
      'tabledata',
      'table_' + tablename,
      'tablebody',
      rowindex,
      colindex,
      'cellData',
    ]),
  )

  return cellData
}
const setCellData = (state, tablename, rowindex, colindex, value) => {
  value = emptifier(value)

  state = state.setIn(
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
  return state
}
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
      old_val = toFloat(old_val)
      let new_val = updateFunc(old_val)

      if (new_val === 0) {
        new_val = ''
      }
      new_val = new_val

      return new_val
    },
  )

const addToOldValue = (old_val, value, prev_val) => {
  prev_val = toFloat(prev_val)
  value = toFloat(value)

  let new_val = old_val + (value - prev_val)
  new_val = Round(new_val)
  return new_val
}
// Some Presets
const getComposition__Total = state =>
  getCellData(state, 'colourandcompotision', 9, 11)

const getPrice__Value = (state, rowindex, colindex = 2) =>
  getCellData(state, 'price', rowindex, colindex)

const getPrice__Price = (state, rowindex) =>
  getCellData(state, 'price', rowindex, 1)

// Confusing values
const R22 = state => {
  let SFBM = toFloat(
    state.getIn(['tabledata', 'extradata', 'self_fabric_matching_body']),
  )
  // For Test
  SFBM = 150

  let r22 = ((getComposition__Total(state) / 12) * SFBM) / 1000

  // Test
  r22 = 31

  return r22
}
const S22 = state => {
  let s22 = (getComposition__Total(state) / 12) * 0.98555732
  NaNChecker(s22)

  // Test
  s22 = 292
  return s22
}
const R33 = state => {
  let q_total = toFloat(
    state.getIn([
      'tabledata',
      'table_extrafabric',
      'tablebody',
      7,
      1,
      'cellData',
    ]),
  )
  // For Test
  q_total = 150

  let r33 = (S22(state) + q_total) / 1000
  r33 = 292

  return r33
}

// Will update "Size" table's header taking value from Measurement Table
const composition__CloneSizeHeader = (state, colindex, value) => {
  state = setCellData(state, 'colourandcompotision', 0, colindex + 1, value)
  return state
}

// Will update "Composition" table's right, bottom and total cells
const composition__SumTotal = (state, rowindex, colindex, value, prev_val) => {
  const bottomRowFunc = old_val => addToOldValue(old_val, value, prev_val)
  const sideRowFunc = old_val => addToOldValue(old_val, value, prev_val)
  const totalFunc = old_val => addToOldValue(old_val, value, prev_val)

  state = updateCellData(
    state,
    'colourandcompotision',
    9,
    colindex - 1,
    bottomRowFunc,
  )
  state = updateCellData(
    state,
    'colourandcompotision',
    rowindex,
    12,
    sideRowFunc,
  )
  state = updateCellData(state, 'colourandcompotision', 9, 11, totalFunc)

  state = currency__BodyConsumptionAndLycra(state)
  state = currency__RibConsumptionAndLycra(state)
  loopFor(
    [9, 10, 11, 12, 13, 14],
    rowindex => (state = price__Value(state, rowindex)),
  )
  state = price__PerPcs__All(state)
  return state
}

// accessories__SumPriceTotal
const accessories__SumPriceTotal = (state, value, prev_val) => {
  const totalFunc = old_val => addToOldValue(old_val, value, prev_val)
  state = updateCellData(state, 'accessoriesname', 22, 1, totalFunc)

  return state
}

// Will calculate and update "Currency" table's value
const currency__TotalYarn = state => {
  const currencyLycraBody = getCellData(state, 'currency', 4, 2)
  const currencyLycraRib = getCellData(state, 'currency', 5, 2)

  const totalYarn = R33(state) - currencyLycraBody - currencyLycraRib

  state = setCellData(
    state,
    'currency',
    1,
    1,
    infinityChecker(Round(totalYarn)),
  )
  state = price__Value(state, 0)

  return state
}
const currency__BodyConsumptionAndLycra = state => {
  const compositionTotal = getComposition__Total(state)
  const bodyLycraPercent = getCellData(state, 'currency', 4, 1) / 100

  const bodyConsumption = ((R33(state) - R22(state)) / compositionTotal) * 12
  const bodyLycra = (compositionTotal / 12) * bodyConsumption * bodyLycraPercent

  state = setCellData(
    state,
    'currency',
    2,
    1,
    infinityChecker(Round(bodyConsumption)),
  )
  state = setCellData(state, 'currency', 4, 2, Round(bodyLycra))
  state = currency__TotalYarn(state)
  state = price__Value(state, 4)
  state = price__PerPcs(state, 4)

  return state
}
const currency__RibConsumptionAndLycra = state => {
  const compositionTotal = getComposition__Total(state)
  const ribLycraPercent = getCellData(state, 'currency', 5, 1) / 100

  const ribConsumption = (R22(state) / compositionTotal) * 12
  const ribLycra = (compositionTotal / 12) * ribConsumption * ribLycraPercent

  state = setCellData(
    state,
    'currency',
    3,
    1,
    infinityChecker(Round(ribConsumption)),
  )
  state = setCellData(state, 'currency', 5, 2, Round(ribLycra))
  state = currency__TotalYarn(state)
  state = price__Value(state, 4)
  state = price__PerPcs(state, 4)

  return state
}

// PRICE
const price__PerPcs = (state, rowindex, colindex = 3) => {
  const priceValue = getPrice__Value(state, rowindex, colindex - 1)

  if (rowindex !== 22 && rowindex !== 23 && rowindex !== 24) {
    const compositionTotal = getComposition__Total(state)

    let perPcs = priceValue / compositionTotal
    perPcs = toFloatRound(perPcs)
    perPcs = infinityChecker(perPcs)
    state = setCellData(state, 'price', rowindex, colindex, perPcs)
    loop(22, 24, rowindex => (state = price__PerPcs(state, rowindex)))
  } else {
    const pricePrice = getCellData(state, 'price', rowindex, 1)
    const pricePerPcsTotal = getCellData(state, 'price', 21, 2)

    let differnece = pricePrice - pricePerPcsTotal
    differnece = toFloatRound(differnece)
    state = setCellData(state, 'price', rowindex, 3, differnece)
    return state
  }
  return state
}
const price__PerPcs__All = state => {
  const compositionTotal = getComposition__Total(state)
  const pricePerPcsTotal = getCellData(state, 'price', 21, 2)

  loop(0, 20, rowindex => {
    const priceValue = getPrice__Value(state, rowindex)

    let perPcs = priceValue / compositionTotal
    perPcs = toFloatRound(perPcs)
    state = setCellData(state, 'price', rowindex, 3, perPcs)
  })

  loop(22, 24, rowindex => {
    const pricePrice = getCellData(state, 'price', rowindex, 1)

    let differnece = pricePrice - pricePerPcsTotal
    differnece = toFloatRound(differnece)
    state = setCellData(state, 'price', rowindex, 3, differnece)
    return state
  })

  return state
}

// Calculates Particular Values
const price__Value = (state, rowindex) => {
  const exchangeRate = getCellData(state, 'currency', 0, 1)
  const pricePrice = getPrice__Price(state, rowindex)

  let priceValue = 0

  switch (rowindex) {
    case 0:
      const totalYarn = getCellData(state, 'currency', 1, 1)
      priceValue = totalYarn * pricePrice
      break
    case 1:
      priceValue = (R33(state) - R22(state)) * (pricePrice / exchangeRate)
      break
    case 2:
      priceValue = R22(state) * (pricePrice / exchangeRate)
      break
    case 3:
    case 5:
      priceValue = R33(state) * (pricePrice / exchangeRate)
      break
    case 4:
      const lycraBody = getCellData(state, 'currency', 4, 2)
      const lycraRib = getCellData(state, 'currency', 5, 2)
      priceValue = lycraBody + lycraRib * (pricePrice / exchangeRate)
      break
    case 6:
    case 7:
      priceValue = pricePrice * (R33(state) / exchangeRate)
      break
    case 8:
      const raqQuantity = getCellData(state, 'currency', 6, 1)
      priceValue =
        pricePrice * ((S22(state) - R22(state) + raqQuantity) / exchangeRate)
      break
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      const compositionTotal = getComposition__Total(state)
      priceValue = pricePrice * (compositionTotal / 12)
      break

    // no default
  }
  priceValue = Round(priceValue)
  priceValue = infinityChecker(priceValue)
  priceValue = emptifier(priceValue)

  state = setCellData(state, 'price', rowindex, 2, priceValue)
  state = price_Commotion(state)
  state = price_Total(state)

  return state
}

const price_Commotion = state => {
  const buyingCommotionPercent = getCellData(state, 'price', 20, 1) / 100

  let priceValueCommotion = 0
  loop(0, 19, rowindex => {
    priceValueCommotion += NaNChecker(getCellData(state, 'price', rowindex, 2))
  })

  priceValueCommotion -= priceValueCommotion * (1 - buyingCommotionPercent)
  priceValueCommotion = Round(priceValueCommotion)

  state = setCellData(state, 'price', 20, 2, priceValueCommotion)
  return state
}

const price_Total = (state, rowindex) => {
  let priceValueTotal = 0

  loop(0, 20, rowindex => {
    priceValueTotal += NaNChecker(getCellData(state, 'price', rowindex, 2))
  })

  priceValueTotal = Round(priceValueTotal)
  state = setCellData(state, 'price', 21, 1, priceValueTotal)
  state = price__PerPcs(state, 21, 2)

  return state
  // let per_pcs_total = toFloat(
  //   state.getIn(['tabledata', 'table_price', 'tablebody', 21, 2, 'cellData']),
  // )

  // for (let row = 22; row <= 24; row++) {
  //   let color_price = toFloat(
  //     state.getIn(
  //       ['tabledata', 'table_price', 'tablebody', row, 1, 'cellData'],
  //       per_pcs_total,
  //     ),
  //   )
  //   const color_price_difference = isNaN(color_price)
  //     ? `(${per_pcs_total})`
  //     : (color_price - per_pcs_total).toFixed(2)

  //   state = state.setIn(
  //     ['tabledata', 'table_price', 'tablebody', row, 3, 'cellData'],
  //     color_price_difference,
  //   )

  // priceValue = Round(priceValue)
  // priceValue = infinityChecker(priceValue)
  // priceValue = emptifier(priceValue)

  // state = setCellData(state, 'price', rowindex, 2, priceValue)
  // return state
}

// Calculates Price Difference
// const price_Difference = state => {
//   let per_pcs_total = toFloat(
//     state.getIn(['tabledata', 'table_price', 'tablebody', 21, 2, 'cellData']),
//   )

//   for (let row = 22; row <= 24; row++) {
//     let color_price = toFloat(
//       state.getIn(
//         ['tabledata', 'table_price', 'tablebody', row, 1, 'cellData'],
//         per_pcs_total,
//       ),
//     )
//     const color_price_difference = isNaN(color_price)
//       ? `(${per_pcs_total})`
//       : (color_price - per_pcs_total).toFixed(2)

//     state = state.setIn(
//       ['tabledata', 'table_price', 'tablebody', row, 3, 'cellData'],
//       color_price_difference,
//     )
//   }

//   return state
// }

//   // Calculates Value Total
//   const particularValueTotal = state => {
//     let sum_particular_value = 0
//     for (let row = 0; row <= 19; row++) {
//       let particular_value = toFloat(
//         state.getIn([
//           'tabledata',
//           'table_price',
//           'tablebody',
//           row,
//           2,
//           'cellData',
//         ]),
//       )

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

// const price_All = (state, rowindex, colindex, value, prev_val) => {
//   // Calculates Particular PerPcs
//   const particularPerPcs = (state, row, col = 3) => {
//     const particular_value = getCellData(state, 'price', row, col - 1)
//     const old_per_pcs = getCellData(state, 'price', row, col)
//     const getComposition__Total = composition__Total(state)

//     const perPcs = (particular_value, composition__Total) => {
//       let per_pcs = (
//         toFloat(particular_value) / toFloat(composition__Total)
//       ).toFixed(2)

//       return per_pcs
//     }

//     let per_pcs = perPcs(particular_value, composition__Total)

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
//         return (toFloat(count_yarn) * toFloat(value)).toFixed(0)

//       case 1:
//         return (
//           (R33 - R22) *
//           (toFloat(value) / exchangeRate)
//         ).toFixed(2)
//       case 2:
//         return (R22 * (toFloat(value) / toFloat(exchange_rate))).toFixed(2)
//       case 3:
//         return (R33 * (toFloat(value) / toFloat(exchange_rate))).toFixed(2)
//       case 4:
//         const lycra_body = state.getIn([
//           'tabledata',
//           'table_currency',
//           'tablebody',
//           4,
//           2,
//           'cellData',
//         ])
//         const lycra_rib = state.getIn([
//           'tabledata',
//           'table_currency',
//           'tablebody',
//           5,
//           2,
//           'cellData',
//         ])

//         return (
//           (lycra_body + lycra_rib) *
//           (toFloat(value) / toFloat(exchange_rate))
//         ).toFixed(2)
//       case 5:
//         return ((R33 * toFloat(value)) / toFloat(exchange_rate)).toFixed(2)
//       case 6:
//       case 7:
//         return (toFloat(value) * (R33 / toFloat(exchange_rate))).toFixed(2)
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
//           toFloat(value) *
//           ((S22(state) - R22 + toFloat(aop_quantity)) / toFloat(exchange_rate))
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

//         return (toFloat(value) * (toFloat(composition__Total) / 12)).toFixed(2)
//       // no default
//     }
//   }
//   // Calculates Price Difference
//   const priceDifference = state => {
//     let per_pcs_total = toFloat(
//       state.getIn(['tabledata', 'table_price', 'tablebody', 21, 2, 'cellData']),
//     )

//     for (let row = 22; row <= 24; row++) {
//       let color_price = toFloat(
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
//       let particular_value = toFloat(
//         state.getIn([
//           'tabledata',
//           'table_price',
//           'tablebody',
//           row,
//           2,
//           'cellData',
//         ]),
//       )

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
  // additional Fuctions
  loopFor,
  // Primary Functions
  getCellData,
  setCellData,
  composition__CloneSizeHeader,
  composition__SumTotal,
  accessories__SumPriceTotal,
  currency__BodyConsumptionAndLycra,
  currency__RibConsumptionAndLycra,
  price__PerPcs,
  price__Value,
  // price_All,
}
