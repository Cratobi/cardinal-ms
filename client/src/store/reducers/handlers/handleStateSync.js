// eslint-disable-next-line
import { getIn, setIn, toJS } from 'immutable'

// Add Commas
// const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
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
const Round = (num) => {
	// num = Math.round(num * 100) / 100
	if (isNaN(num)) num = 0

	return num
}
const toFloat = (num) => {
	num = parseFloat(num)
	if (isNaN(num)) num = 0

	num = Math.round(num * 100) / 100
	if (isNaN(num)) num = 0

	return num
}
const toFloatRound = (num) => {
	num = parseFloat(num)
	num = Round(num)

	return num
}
const NaNChecker = (num) => {
	if (isNaN(num)) num = 0

	return num
}
const infinityChecker = (num) => {
	if (!isFinite(num)) num = ''

	return num
}
const emptifier = (num) => {
	if (num === 0) num = ''

	return num
}

const getCellData = (state, tablename, rowindex, colindex) => {
	let cellData = toFloat((state = state.getIn([ 'CnP_data', `table_${tablename}`, rowindex, colindex ])))

	return cellData
}
const setCellData = (state, tablename, rowindex, colindex, value) => {
	value = emptifier(value)

	if (!isNaN(colindex)) {
		state = state.setIn([ 'CnP_data', `table_${tablename}`, rowindex, colindex ], value)
	} else {
		state = state.setIn([ 'CnP_data', `table_${tablename}`, rowindex ], value)
	}

	return state
}
const getExtraData = (state, rowindex, colindex) => {
	let cellData = toFloat(
		colindex === undefined
			? state.getIn([ 'CnP_data', 'table_extradata', rowindex ])
			: state.getIn([ 'CnP_data', 'table_extradata', rowindex, colindex ])
	)

	return cellData
}
const getR22 = (state) => state.getIn([ 'CnP_data', 'table_extradata', 6, 0 ])

const setR22 = (state, value) => {
	const SFBM = value || getExtraData(state, 3, 1)
	const compositionTotal = getComposition__Total(state)
	let R22 = compositionTotal / 12 * SFBM / 1000

	state = state.setIn([ 'CnP_data', 'table_extradata', 6, 0 ], R22)
	state = currency__BodyConsumptionAndLycra(state)
	state = currency__RibConsumptionAndLycra(state)
	state = price__Value(state, 2)

	state = setS22(state)
	return state
}
const getS22 = (state) => state.getIn([ 'CnP_data', 'table_extradata', 6, 1 ])

const setS22 = (state) => {
	let S22 = 0
	console.clear()
	loop(0, 9, (colindex) => {
		const basic = getBasic(state, colindex)
		S22 += getCellData(state, 'colourandcompotision', 9, colindex + 1) / 12 * basic
	})
	S22 += getR22(state)
	state = state.setIn([ 'CnP_data', 'table_extradata', 6, 1 ], S22)
	state = extrafabric__GTotal(state)
	state = price__Value(state, 8)

	return state
}
const getBasic = (state, colindex) => state.getIn([ 'CnP_data', 'table_extradata', 7, colindex ])

const setBasic = (state, colindex) => {
	const mes_b = getCellData(state, 'measurments', 1, colindex + 1)
	const mes_c = getCellData(state, 'measurments', 2, colindex + 1)
	const mes_d = getCellData(state, 'measurments', 3, colindex + 1)
	const fabric_weight = getExtraData(state, 2)
	const wastage = getExtraData(state, 4) / 100
	const s_allowance_chest = getExtraData(state, 5, 0)
	const s_allowance_length = getExtraData(state, 5, 1)

	const basic =
		(mes_b + mes_c + s_allowance_length) * (mes_d + s_allowance_chest) * 24 * fabric_weight * (1 + wastage) / 10000000

	state = setCellData(state, 'extradata', 7, colindex, basic)
	state = setS22(state)

	return state
}

const updateCellData = (state, tablename, rowindex, colindex, updateFunc, addition) =>
	state.updateIn([ 'CnP_data', `table_${tablename}`, rowindex, colindex ], (old_val) => {
		old_val = toFloat(old_val)
		if (addition) old_val -= addition
		let new_val = updateFunc(old_val)
		if (addition) new_val += addition

		if (new_val === 0) {
			new_val = ''
		}

		return new_val
	})

const addToOldValue = (old_val, value, prev_val) => {
	prev_val = toFloat(prev_val)
	value = toFloat(value)

	let new_val = old_val + (value - prev_val)
	// new_val = Round(new_val)
	return new_val
}

// Some Presets
const getComposition__Total = (state) => getCellData(state, 'colourandcompotision', 9, 11)

const getPrice__Value = (state, rowindex, colindex = 2) => getCellData(state, 'price', rowindex, colindex)

const getPrice__Price = (state, rowindex) => getCellData(state, 'price', rowindex, 1)

const getGTotal = (state) => getCellData(state, 'extrafabric', 7, 1)

// Will update "Size" table's header taking value from Measurement Table
const composition__CloneSizeHeader = (state, colindex, value) =>
	setCellData(state, 'colourandcompotision', 0, colindex + 1, value)

// Will update "Composition" table's right, bottom and total cells
const composition__SumTotal = (state, rowindex, colindex, value, prev_val) => {
	const bottomRowFunc = (old_val) => addToOldValue(old_val, value, prev_val)
	const sideRowFunc = (old_val) => addToOldValue(old_val, value, prev_val)
	const totalFunc = (old_val) => addToOldValue(old_val, value, prev_val)

	state = updateCellData(state, 'colourandcompotision', 9, colindex - 1, bottomRowFunc)
	state = updateCellData(state, 'colourandcompotision', rowindex, 12, sideRowFunc)
	state = updateCellData(state, 'colourandcompotision', 9, 11, totalFunc)

	state = setR22(state)
	state = currency__BodyConsumptionAndLycra(state)
	state = currency__RibConsumptionAndLycra(state)
	loopFor([ 9, 10, 11, 12, 13, 14 ], (rowindex) => (state = price__Value(state, rowindex)))
	state = setS22(state)
	state = price__PerPcs__All(state)

	return state
}

// accessories__SumPriceTotal
const accessories__SumPriceTotal = (state, value, prev_val) => {
	const totalFunc = (old_val) => addToOldValue(old_val, value, prev_val)
	state = updateCellData(state, 'accessoriesname', 22, 1, totalFunc)

	return state
}

// G Total
const extrafabric__GTotal = (state) => {
	let gTotal = 0
	loop(0, 6, (rowindex) => (gTotal += getCellData(state, 'extrafabric', rowindex, 4)))

	gTotal += getS22(state)
	gTotal = Round(gTotal)

	state = setCellData(state, 'extrafabric', 7, 1, gTotal)
	state = currency__TotalYarn(state)
	state = currency__BodyConsumptionAndLycra(state)
	loopFor([ 1, 3, 5, 6, 7 ], (rowindex) => (state = price__Value(state, rowindex)))

	return state
}

// Will calculate and update "Currency" table's value
const currency__TotalYarn = (state) => {
	const currencyLycraBody = getCellData(state, 'currency', 4, 2)
	const currencyLycraRib = getCellData(state, 'currency', 5, 2)

	const totalYarn = getGTotal(state) - currencyLycraBody - currencyLycraRib

	state = setCellData(state, 'currency', 1, 1, infinityChecker(Round(totalYarn)))
	state = price__Value(state, 0)

	return state
}
const currency__BodyConsumptionAndLycra = (state) => {
	const compositionTotal = getComposition__Total(state)
	const bodyLycraPercent = getCellData(state, 'currency', 4, 1) / 100

	const bodyConsumption = (getGTotal(state) - getR22(state)) / compositionTotal * 12
	const bodyLycra = compositionTotal / 12 * bodyConsumption * bodyLycraPercent

	state = setCellData(state, 'currency', 2, 1, infinityChecker(Round(bodyConsumption)))
	state = setCellData(state, 'currency', 4, 2, Round(bodyLycra))
	state = currency__TotalYarn(state)
	state = price__Value(state, 4)
	state = price__PerPcs(state, 4)

	return state
}
const currency__RibConsumptionAndLycra = (state) => {
	const compositionTotal = getComposition__Total(state)
	const ribLycraPercent = getCellData(state, 'currency', 5, 1) / 100
	const ribConsumption = getR22(state) / compositionTotal * 12
	const ribLycra = compositionTotal / 12 * ribConsumption * ribLycraPercent

	state = setCellData(state, 'currency', 3, 1, infinityChecker(Round(ribConsumption)))
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
		loop(22, 24, (rowindex) => (state = price__PerPcs(state, rowindex)))
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

const price__PerPcs__All = (state) => {
	const compositionTotal = getComposition__Total(state)
	const pricePerPcsTotal = getCellData(state, 'price', 21, 2)

	loop(0, 20, (rowindex) => {
		const priceValue = getPrice__Value(state, rowindex)

		let perPcs = priceValue / compositionTotal
		perPcs = toFloatRound(perPcs)
		state = setCellData(state, 'price', rowindex, 3, perPcs)
	})

	loop(22, 24, (rowindex) => {
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
		case 0: {
			const totalYarn = getCellData(state, 'currency', 1, 1)
			priceValue = totalYarn * pricePrice
			break
		}
		case 1:
			// console.log(getGTotal(state), getR22(state), pricePrice, exchangeRate)
			priceValue = (getGTotal(state) - getR22(state)) * (pricePrice / exchangeRate)
			break
		case 2:
			priceValue = getR22(state) * (pricePrice / exchangeRate)
			break
		case 3:
		case 5:
			priceValue = getGTotal(state) * (pricePrice / exchangeRate)
			break
		case 4: {
			const lycraBody = getCellData(state, 'currency', 4, 2)
			const lycraRib = getCellData(state, 'currency', 5, 2)
			priceValue = lycraBody + lycraRib * (pricePrice / exchangeRate)
			break
		}
		case 6:
		case 7:
			priceValue = pricePrice * (getGTotal(state) / exchangeRate)
			break
		case 8: {
			const raqQuantity = getCellData(state, 'currency', 6, 1)
			priceValue = pricePrice * ((getS22(state) - getR22(state) + raqQuantity) / exchangeRate)
			break
		}
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
		case 19: {
			const compositionTotal = getComposition__Total(state)
			priceValue = pricePrice * (compositionTotal / 12)
			break
		}

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

const price_Commotion = (state) => {
	const buyingCommotionPercent = getCellData(state, 'price', 20, 1) / 100

	let priceValueCommotion = 0
	loop(0, 19, (rowindex) => {
		priceValueCommotion += NaNChecker(getCellData(state, 'price', rowindex, 2))
	})

	priceValueCommotion -= priceValueCommotion * (1 - buyingCommotionPercent)
	priceValueCommotion = Round(priceValueCommotion)

	state = setCellData(state, 'price', 20, 2, priceValueCommotion)
	return state
}

const price_Total = (state) => {
	let priceValueTotal = 0

	loop(0, 20, (rowindex) => {
		priceValueTotal += NaNChecker(getCellData(state, 'price', rowindex, 2))
	})

	priceValueTotal = Round(priceValueTotal)
	state = setCellData(state, 'price', 21, 1, priceValueTotal)
	state = price__PerPcs(state, 21, 2)

	return state
	// let per_pcs_total = toFloat(
	//   state.getIn(['CnP_data', 'table_price', 'tablebody', 21, 2, 'cellData']),
	// )

	// for (let row = 22; row <= 24; row++) {
	//   let color_price = toFloat(
	//     state.getIn(
	//       ['CnP_data', 'table_price', 'tablebody', row, 1, 'cellData'],
	//       per_pcs_total,
	//     ),
	//   )
	//   const color_price_difference = isNaN(color_price)
	//     ? `(${per_pcs_total})`
	//     : (color_price - per_pcs_total).toFixed(2)

	//   state = state.setIn(
	//     ['CnP_data', 'table_price', 'tablebody', row, 3, 'cellData'],
	//     color_price_difference,
	//   )

	// priceValue = Round(priceValue)
	// priceValue = infinityChecker(priceValue)
	// priceValue = emptifier(priceValue)

	// state = setCellData(state, 'price', rowindex, 2, priceValue)
	// return state
}

export {
	// additional Fuctions
	loop,
	loopFor,
	// Primary Functions
	getCellData,
	setCellData,
	getExtraData,
	setR22,
	setS22,
	setBasic,
	composition__CloneSizeHeader,
	composition__SumTotal,
	extrafabric__GTotal,
	accessories__SumPriceTotal,
	currency__BodyConsumptionAndLycra,
	currency__RibConsumptionAndLycra,
	price__PerPcs,
	price__Value
}
