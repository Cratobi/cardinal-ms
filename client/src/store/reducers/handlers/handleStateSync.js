// Will update "Size" table's header taking value from Measurement Table
const handleSizeHeader = (state, colindex, value) => {
  state = state.setIn(
    [
      "tabledata",
      "table_colourandcompotision",
      "tablebody",
      0,
      colindex + 1,
      "cellData"
    ],
    value
  )
  return state
}

// Will update "Composition" table's right, bottom and total cells
const handleComposition = (state, rowindex, colindex, value, prev_val) => {
  state = state.updateIn(
    [
      "tabledata",
      "table_colourandcompotision",
      "tablebody",
      9,
      colindex - 1,
      "cellData"
    ],
    old_val => +old_val + (+value - +prev_val)
  )
  state = state.updateIn(
    [
      "tabledata",
      "table_colourandcompotision",
      "tablebody",
      rowindex,
      12,
      "cellData"
    ],
    old_val => +old_val + (+value - +prev_val)
  )
  state = state.updateIn(
    ["tabledata", "table_colourandcompotision", "tablebody", 9, 11, "cellData"],
    old_val => +old_val + (+value - +prev_val)
  )
  state = handleCurrency(state, 2)
  state = handleCurrency(state, 3)
  return state
}

// handleAccessories
const handleAccessories = (state, value, prev_val) => {
  state = state.updateIn(
    ["tabledata", "table_accessoriesname", "tablebody", 22, 1, "cellData"],
    old_val =>
      "$ " + (Number(old_val.substr(1)) + (Number(value) - Number(prev_val)))
  )

  return state
}

// Will calculate and update "Currency" table's value
const handleCurrency = (state, rowindex) => {
  const consumption_total = state.getIn([
    "tabledata",
    "table_colourandcompotision",
    "tablebody",
    9,
    11,
    "cellData"
  ])

  if (rowindex === 2 || rowindex === 4) {
    const currency_bodyconsumption = state.getIn([
      "tabledata",
      "table_currency",
      "tablebody",
      2,
      1,
      "cellData"
    ])
    const lycra_body_percent =
      state.getIn([
        "tabledata",
        "table_currency",
        "tablebody",
        4,
        1,
        "cellData"
      ]) / 100

    const lycra_body =
      Math.round(
        (+consumption_total / 12) *
          +currency_bodyconsumption *
          +lycra_body_percent *
          100
      ) / 100

    state = state.setIn(
      ["tabledata", "table_currency", "tablebody", 4, 2, "cellData"],
      lycra_body
    )

    return state
  } else if (rowindex === 3 || rowindex === 5) {
    const currency_ribconsumption = state.getIn([
      "tabledata",
      "table_currency",
      "tablebody",
      3,
      1,
      "cellData"
    ])
    const lycra_rib_percent =
      state.getIn([
        "tabledata",
        "table_currency",
        "tablebody",
        5,
        1,
        "cellData"
      ]) / 100

    const lycra_body =
      Math.round(
        (+consumption_total / 12) *
          +currency_ribconsumption *
          +lycra_rib_percent *
          100
      ) / 100

    state = state.setIn(
      ["tabledata", "table_currency", "tablebody", 5, 2, "cellData"],
      lycra_body
    )

    return state
  }
}

export {
  handleSizeHeader,
  handleComposition,
  handleAccessories,
  handleCurrency
}
