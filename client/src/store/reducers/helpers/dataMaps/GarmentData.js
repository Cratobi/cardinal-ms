const GarmentData = (payload, process) => {
	const Round = (num) => {
		num = Math.round(num * 100) / 100
		if (isNaN(num)) num = 0

		return num
	}
	// const Ymaker = (n) => {
	// 	return (
	// 		(+tabledata.table_measurments[0][n] + +tabledata.table_measurments[1][n] + +tabledata.table_extradata[6]) *
	// 		(+tabledata.table_measurments[2][n] + +tabledata.table_extradata[5]) *
	// 		2 *
	// 		12 *
	// 		+tabledata.table_extradata[2] *
	// 		(1 + +tabledata.table_extradata[4] / 100) /
	// 		10000000
	// 	)
	// }
	// const elastaneQty = Round(+tabledata.table_currency[4][2] + +tabledata.table_currency[5][2])
	// const Y = [
	//   Ymaker(1),
	// 	Ymaker(2),
	// 	Ymaker(3),
	// 	Ymaker(4),
	// 	Ymaker(5),
	// 	Ymaker(6),
	// 	Ymaker(7),
	// 	Ymaker(8),
	// 	Ymaker(9),
	// 	Ymaker(10)
	// ]
	const tabledata = payload.tabledata

	const schemaData = (i) => {
		return {
			table_items : [
				[
					tabledata.table_colourandcompotision[0][2],
					tabledata.table_colourandcompotision[0][3],
					tabledata.table_colourandcompotision[0][4],
					tabledata.table_colourandcompotision[0][5],
					tabledata.table_colourandcompotision[0][6],
					tabledata.table_colourandcompotision[0][7],
					tabledata.table_colourandcompotision[0][8],
					tabledata.table_colourandcompotision[0][9],
					tabledata.table_colourandcompotision[0][10],
					tabledata.table_colourandcompotision[0][11]
				],

				[
					tabledata.table_colourandcompotision[1][0],
					tabledata.table_colourandcompotision[1][1],
					Round(
						+tabledata.table_colourandcompotision[1][2] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[1][2]
					),
					Round(
						+tabledata.table_colourandcompotision[1][3] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[1][3]
					),
					Round(
						+tabledata.table_colourandcompotision[1][4] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[1][4]
					),
					Round(
						+tabledata.table_colourandcompotision[1][5] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[1][5]
					),
					Round(
						+tabledata.table_colourandcompotision[1][6] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[1][6]
					),
					Round(
						+tabledata.table_colourandcompotision[1][7] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[1][7]
					),
					Round(
						+tabledata.table_colourandcompotision[1][8] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[1][8]
					),
					Round(
						+tabledata.table_colourandcompotision[1][9] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[1][9]
					),
					Round(
						+tabledata.table_colourandcompotision[1][10] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[1][10]
					),
					Round(
						+tabledata.table_colourandcompotision[1][11] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[1][11]
					),
					Round(
						+tabledata.table_colourandcompotision[1][12] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[1][12]
					)
				],
				[
					tabledata.table_colourandcompotision[2][0],
					tabledata.table_colourandcompotision[2][1],
					Round(
						+tabledata.table_colourandcompotision[2][2] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[2][2]
					),
					Round(
						+tabledata.table_colourandcompotision[2][3] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[2][3]
					),
					Round(
						+tabledata.table_colourandcompotision[2][4] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[2][4]
					),
					Round(
						+tabledata.table_colourandcompotision[2][5] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[2][5]
					),
					Round(
						+tabledata.table_colourandcompotision[2][6] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[2][6]
					),
					Round(
						+tabledata.table_colourandcompotision[2][7] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[2][7]
					),
					Round(
						+tabledata.table_colourandcompotision[2][8] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[2][8]
					),
					Round(
						+tabledata.table_colourandcompotision[2][9] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[2][9]
					),
					Round(
						+tabledata.table_colourandcompotision[2][10] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[2][10]
					),
					Round(
						+tabledata.table_colourandcompotision[2][11] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[2][11]
					),
					Round(
						+tabledata.table_colourandcompotision[2][12] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[2][12]
					)
				],
				[
					tabledata.table_colourandcompotision[3][0],
					tabledata.table_colourandcompotision[3][1],
					Round(
						+tabledata.table_colourandcompotision[3][2] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[3][2]
					),
					Round(
						+tabledata.table_colourandcompotision[3][3] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[3][3]
					),
					Round(
						+tabledata.table_colourandcompotision[3][4] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[3][4]
					),
					Round(
						+tabledata.table_colourandcompotision[3][5] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[3][5]
					),
					Round(
						+tabledata.table_colourandcompotision[3][6] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[3][6]
					),
					Round(
						+tabledata.table_colourandcompotision[3][7] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[3][7]
					),
					Round(
						+tabledata.table_colourandcompotision[3][8] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[3][8]
					),
					Round(
						+tabledata.table_colourandcompotision[3][9] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[3][9]
					),
					Round(
						+tabledata.table_colourandcompotision[3][10] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[3][10]
					),
					Round(
						+tabledata.table_colourandcompotision[3][11] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[3][11]
					),
					Round(
						+tabledata.table_colourandcompotision[3][12] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[3][12]
					)
				],
				[
					tabledata.table_colourandcompotision[4][0],
					tabledata.table_colourandcompotision[4][1],
					Round(
						+tabledata.table_colourandcompotision[4][2] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[4][2]
					),
					Round(
						+tabledata.table_colourandcompotision[4][3] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[4][3]
					),
					Round(
						+tabledata.table_colourandcompotision[4][4] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[4][4]
					),
					Round(
						+tabledata.table_colourandcompotision[4][5] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[4][5]
					),
					Round(
						+tabledata.table_colourandcompotision[4][6] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[4][6]
					),
					Round(
						+tabledata.table_colourandcompotision[4][7] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[4][7]
					),
					Round(
						+tabledata.table_colourandcompotision[4][8] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[4][8]
					),
					Round(
						+tabledata.table_colourandcompotision[4][9] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[4][9]
					),
					Round(
						+tabledata.table_colourandcompotision[4][10] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[4][10]
					),
					Round(
						+tabledata.table_colourandcompotision[4][11] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[4][11]
					),
					Round(
						+tabledata.table_colourandcompotision[4][12] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[4][12]
					)
				],
				[
					tabledata.table_colourandcompotision[5][0],
					tabledata.table_colourandcompotision[5][1],
					Round(
						+tabledata.table_colourandcompotision[5][2] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[5][2]
					),
					Round(
						+tabledata.table_colourandcompotision[5][3] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[5][3]
					),
					Round(
						+tabledata.table_colourandcompotision[5][4] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[5][4]
					),
					Round(
						+tabledata.table_colourandcompotision[5][5] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[5][5]
					),
					Round(
						+tabledata.table_colourandcompotision[5][6] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[1][6]
					),
					Round(
						+tabledata.table_colourandcompotision[5][7] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[5][7]
					),
					Round(
						+tabledata.table_colourandcompotision[5][8] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[5][8]
					),
					Round(
						+tabledata.table_colourandcompotision[5][9] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[5][9]
					),
					Round(
						+tabledata.table_colourandcompotision[5][10] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[5][10]
					),
					Round(
						+tabledata.table_colourandcompotision[5][11] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[5][11]
					),
					Round(
						+tabledata.table_colourandcompotision[5][12] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[5][12]
					)
				],
				[
					tabledata.table_colourandcompotision[6][0],
					tabledata.table_colourandcompotision[6][1],
					Round(
						+tabledata.table_colourandcompotision[6][2] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[6][2]
					),
					Round(
						+tabledata.table_colourandcompotision[6][3] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[6][3]
					),
					Round(
						+tabledata.table_colourandcompotision[6][4] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[6][4]
					),
					Round(
						+tabledata.table_colourandcompotision[6][5] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[6][5]
					),
					Round(
						+tabledata.table_colourandcompotision[6][6] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[6][6]
					),
					Round(
						+tabledata.table_colourandcompotision[6][7] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[6][7]
					),
					Round(
						+tabledata.table_colourandcompotision[6][8] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[6][8]
					),
					Round(
						+tabledata.table_colourandcompotision[6][9] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[6][9]
					),
					Round(
						+tabledata.table_colourandcompotision[6][10] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[6][10]
					),
					Round(
						+tabledata.table_colourandcompotision[6][11] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[6][11]
					),
					Round(
						+tabledata.table_colourandcompotision[6][12] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[6][12]
					)
				],
				[
					tabledata.table_colourandcompotision[7][0],
					tabledata.table_colourandcompotision[7][1],
					Round(
						+tabledata.table_colourandcompotision[7][2] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[7][2]
					),
					Round(
						+tabledata.table_colourandcompotision[7][3] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[7][3]
					),
					Round(
						+tabledata.table_colourandcompotision[7][4] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[7][4]
					),
					Round(
						+tabledata.table_colourandcompotision[7][5] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[7][5]
					),
					Round(
						+tabledata.table_colourandcompotision[7][6] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[7][6]
					),
					Round(
						+tabledata.table_colourandcompotision[7][7] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[7][7]
					),
					Round(
						+tabledata.table_colourandcompotision[7][8] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[7][8]
					),
					Round(
						+tabledata.table_colourandcompotision[7][9] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[7][9]
					),
					Round(
						+tabledata.table_colourandcompotision[7][10] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[7][10]
					),
					Round(
						+tabledata.table_colourandcompotision[7][11] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[7][11]
					),
					Round(
						+tabledata.table_colourandcompotision[7][12] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[7][12]
					)
				],
				[
					tabledata.table_colourandcompotision[8][0],
					tabledata.table_colourandcompotision[8][1],
					Round(
						+tabledata.table_colourandcompotision[8][2] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[8][2]
					),
					Round(
						+tabledata.table_colourandcompotision[8][3] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[8][3]
					),
					Round(
						+tabledata.table_colourandcompotision[8][4] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[8][4]
					),
					Round(
						+tabledata.table_colourandcompotision[8][5] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[8][5]
					),
					Round(
						+tabledata.table_colourandcompotision[8][6] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[8][6]
					),
					Round(
						+tabledata.table_colourandcompotision[8][7] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[8][7]
					),
					Round(
						+tabledata.table_colourandcompotision[8][8] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[8][8]
					),
					Round(
						+tabledata.table_colourandcompotision[8][9] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[8][9]
					),
					Round(
						+tabledata.table_colourandcompotision[8][10] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[8][10]
					),
					Round(
						+tabledata.table_colourandcompotision[8][11] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[8][11]
					),
					Round(
						+tabledata.table_colourandcompotision[8][12] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[8][12]
					)
				],

				[
					tabledata.table_colourandcompotision[9][0],
					tabledata.table_colourandcompotision[9][1],
					Round(
						+tabledata.table_colourandcompotision[9][2] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[9][2]
					),
					Round(
						+tabledata.table_colourandcompotision[9][3] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[9][3]
					),
					Round(
						+tabledata.table_colourandcompotision[9][4] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[9][4]
					),
					Round(
						+tabledata.table_colourandcompotision[9][5] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[9][5]
					),
					Round(
						+tabledata.table_colourandcompotision[9][6] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[9][6]
					),
					Round(
						+tabledata.table_colourandcompotision[9][7] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[9][7]
					),
					Round(
						+tabledata.table_colourandcompotision[9][8] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[9][8]
					),
					Round(
						+tabledata.table_colourandcompotision[9][9] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[9][9]
					),
					Round(
						+tabledata.table_colourandcompotision[9][10] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[9][10]
					),
					Round(
						+tabledata.table_colourandcompotision[9][11] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[9][11]
					),
					Round(
						+tabledata.table_colourandcompotision[9][12] * +tabledata.table_accessoriesname[0][i] +
							+tabledata.table_colourandcompotision[9][12]
					)
				]
			]
		}
	}

	let GarmentTables = []

	process.map((process, i) => {
		if (process !== '') GarmentTables = [ ...GarmentTables, schemaData(i) ]
	})

	return GarmentTables
}
export default GarmentData
