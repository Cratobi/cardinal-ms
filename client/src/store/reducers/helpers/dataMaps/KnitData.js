const KnitData = (payload) => {
	const Ymaker = (n) => {
		return (
			(+tabledata.table_measurments[1][n] + +tabledata.table_measurments[2][n] + +tabledata.table_extradata[5][1]) *
			(+tabledata.table_measurments[3][n] + +tabledata.table_extradata[5][0]) *
			2 *
			12 *
			+tabledata.table_extradata[2] *
			(1 + +tabledata.table_extradata[4] / 100) /
			10000000
		)
	}

	const tabledata = payload.tabledata
	const elastaneQty = +tabledata.table_currency[4][2] + +tabledata.table_currency[5][2]
	const Y = [
		Ymaker(1),
		Ymaker(2),
		Ymaker(3),
		Ymaker(4),
		Ymaker(5),
		Ymaker(6),
		Ymaker(7),
		Ymaker(8),
		Ymaker(9),
		Ymaker(10)
	]
	return {
		table_items               : [
			[
				'Item/Description ',
				'Colour',
				'Fabrics Composition',
				'Size',
				tabledata.table_extradata[3][0],
				'Total Fabrics'
			],
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
				payload.item,
				tabledata.table_colourandcompotision[1][0],
				tabledata.table_colourandcompotision[1][1],
				+tabledata.table_colourandcompotision[1][2] / 12 * Y[0],
				+tabledata.table_colourandcompotision[1][3] / 12 * Y[1],
				+tabledata.table_colourandcompotision[1][4] / 12 * Y[2],
				+tabledata.table_colourandcompotision[1][5] / 12 * Y[3],
				+tabledata.table_colourandcompotision[1][6] / 12 * Y[4],
				+tabledata.table_colourandcompotision[1][7] / 12 * Y[5],
				+tabledata.table_colourandcompotision[1][8] / 12 * Y[6],
				+tabledata.table_colourandcompotision[1][9] / 12 * Y[7],
				+tabledata.table_colourandcompotision[1][10] / 12 * Y[8],
				+tabledata.table_colourandcompotision[1][11] / 12 * Y[9],
				+tabledata.table_colourandcompotision[1][12] / 12 * +tabledata.table_extradata[3][1] / 1000,
				tabledata.table_colourandcompotision[1][12]
			],
			[
				tabledata.table_colourandcompotision[2][0],
				tabledata.table_colourandcompotision[2][1],
				+tabledata.table_colourandcompotision[2][2] / 12 * Y[0],
				+tabledata.table_colourandcompotision[2][3] / 12 * Y[1],
				+tabledata.table_colourandcompotision[2][4] / 12 * Y[2],
				+tabledata.table_colourandcompotision[2][5] / 12 * Y[3],
				+tabledata.table_colourandcompotision[2][6] / 12 * Y[4],
				+tabledata.table_colourandcompotision[2][7] / 12 * Y[5],
				+tabledata.table_colourandcompotision[2][8] / 12 * Y[6],
				+tabledata.table_colourandcompotision[2][9] / 12 * Y[7],
				+tabledata.table_colourandcompotision[2][10] / 12 * Y[8],
				+tabledata.table_colourandcompotision[2][11] / 12 * Y[9],
				+tabledata.table_colourandcompotision[2][12] / 12 * +tabledata.table_extradata[3][1] / 1000,
				tabledata.table_colourandcompotision[2][12]
			],
			[
				tabledata.table_colourandcompotision[3][0],
				tabledata.table_colourandcompotision[3][1],
				+tabledata.table_colourandcompotision[3][2] / 12 * Y[0],
				+tabledata.table_colourandcompotision[3][3] / 12 * Y[1],
				+tabledata.table_colourandcompotision[3][4] / 12 * Y[2],
				+tabledata.table_colourandcompotision[3][5] / 12 * Y[3],
				+tabledata.table_colourandcompotision[3][6] / 12 * Y[4],
				+tabledata.table_colourandcompotision[3][7] / 12 * Y[5],
				+tabledata.table_colourandcompotision[3][8] / 12 * Y[6],
				+tabledata.table_colourandcompotision[3][9] / 12 * Y[7],
				+tabledata.table_colourandcompotision[3][10] / 12 * Y[8],
				+tabledata.table_colourandcompotision[3][11] / 12 * Y[9],
				+tabledata.table_colourandcompotision[3][12] / 12 * +tabledata.table_extradata[3][1] / 1000,
				tabledata.table_colourandcompotision[3][12]
			],
			[
				tabledata.table_colourandcompotision[4][0],
				tabledata.table_colourandcompotision[4][1],
				+tabledata.table_colourandcompotision[4][2] / 12 * Y[0],
				+tabledata.table_colourandcompotision[4][3] / 12 * Y[1],
				+tabledata.table_colourandcompotision[4][4] / 12 * Y[2],
				+tabledata.table_colourandcompotision[4][5] / 12 * Y[3],
				+tabledata.table_colourandcompotision[4][6] / 12 * Y[4],
				+tabledata.table_colourandcompotision[4][7] / 12 * Y[5],
				+tabledata.table_colourandcompotision[4][8] / 12 * Y[6],
				+tabledata.table_colourandcompotision[4][9] / 12 * Y[7],
				+tabledata.table_colourandcompotision[4][10] / 12 * Y[8],
				+tabledata.table_colourandcompotision[4][11] / 12 * Y[9],
				+tabledata.table_colourandcompotision[4][12] / 12 * +tabledata.table_extradata[3][1] / 1000,
				tabledata.table_colourandcompotision[4][12]
			],
			[
				tabledata.table_colourandcompotision[5][0],
				tabledata.table_colourandcompotision[5][1],
				+tabledata.table_colourandcompotision[5][2] / 12 * Y[0],
				+tabledata.table_colourandcompotision[5][3] / 12 * Y[1],
				+tabledata.table_colourandcompotision[5][4] / 12 * Y[2],
				+tabledata.table_colourandcompotision[5][5] / 12 * Y[3],
				+tabledata.table_colourandcompotision[5][6] / 12 * Y[4],
				+tabledata.table_colourandcompotision[5][7] / 12 * Y[5],
				+tabledata.table_colourandcompotision[5][8] / 12 * Y[6],
				+tabledata.table_colourandcompotision[5][9] / 12 * Y[7],
				+tabledata.table_colourandcompotision[5][10] / 12 * Y[8],
				+tabledata.table_colourandcompotision[5][11] / 12 * Y[9],
				+tabledata.table_colourandcompotision[5][12] / 12 * +tabledata.table_extradata[3][1] / 1000,
				tabledata.table_colourandcompotision[5][12]
			],
			[
				tabledata.table_colourandcompotision[6][0],
				tabledata.table_colourandcompotision[6][1],
				+tabledata.table_colourandcompotision[6][2] / 12 * Y[0],
				+tabledata.table_colourandcompotision[6][3] / 12 * Y[1],
				+tabledata.table_colourandcompotision[6][4] / 12 * Y[2],
				+tabledata.table_colourandcompotision[6][5] / 12 * Y[3],
				+tabledata.table_colourandcompotision[6][6] / 12 * Y[4],
				+tabledata.table_colourandcompotision[6][7] / 12 * Y[5],
				+tabledata.table_colourandcompotision[6][8] / 12 * Y[6],
				+tabledata.table_colourandcompotision[6][9] / 12 * Y[7],
				+tabledata.table_colourandcompotision[6][10] / 12 * Y[8],
				+tabledata.table_colourandcompotision[6][11] / 12 * Y[9],
				+tabledata.table_colourandcompotision[6][12] / 12 * +tabledata.table_extradata[3][1] / 1000,
				tabledata.table_colourandcompotision[6][12]
			],
			[
				tabledata.table_colourandcompotision[7][0],
				tabledata.table_colourandcompotision[7][1],
				+tabledata.table_colourandcompotision[7][2] / 12 * Y[0],
				+tabledata.table_colourandcompotision[7][3] / 12 * Y[1],
				+tabledata.table_colourandcompotision[7][4] / 12 * Y[2],
				+tabledata.table_colourandcompotision[7][5] / 12 * Y[3],
				+tabledata.table_colourandcompotision[7][6] / 12 * Y[4],
				+tabledata.table_colourandcompotision[7][7] / 12 * Y[5],
				+tabledata.table_colourandcompotision[7][8] / 12 * Y[6],
				+tabledata.table_colourandcompotision[7][9] / 12 * Y[7],
				+tabledata.table_colourandcompotision[7][10] / 12 * Y[8],
				+tabledata.table_colourandcompotision[7][11] / 12 * Y[9],
				+tabledata.table_colourandcompotision[7][12] / 12 * +tabledata.table_extradata[3][1] / 1000,
				tabledata.table_colourandcompotision[7][12]
			],
			[
				tabledata.table_colourandcompotision[8][0],
				tabledata.table_colourandcompotision[8][1],
				+tabledata.table_colourandcompotision[8][2] / 12 * Y[0],
				+tabledata.table_colourandcompotision[8][3] / 12 * Y[1],
				+tabledata.table_colourandcompotision[8][4] / 12 * Y[2],
				+tabledata.table_colourandcompotision[8][5] / 12 * Y[3],
				+tabledata.table_colourandcompotision[8][6] / 12 * Y[4],
				+tabledata.table_colourandcompotision[8][7] / 12 * Y[5],
				+tabledata.table_colourandcompotision[8][8] / 12 * Y[6],
				+tabledata.table_colourandcompotision[8][9] / 12 * Y[7],
				+tabledata.table_colourandcompotision[8][10] / 12 * Y[8],
				+tabledata.table_colourandcompotision[8][11] / 12 * Y[9],
				+tabledata.table_colourandcompotision[8][12] / 12 * +tabledata.table_extradata[3][1] / 1000,
				tabledata.table_colourandcompotision[8][12]
			],

			[
				'TOTAL',
				+tabledata.table_colourandcompotision[9][1] / 12 * Y[0],
				+tabledata.table_colourandcompotision[9][2] / 12 * Y[1],
				+tabledata.table_colourandcompotision[9][3] / 12 * Y[2],
				+tabledata.table_colourandcompotision[9][4] / 12 * Y[3],
				+tabledata.table_colourandcompotision[9][5] / 12 * Y[4],
				+tabledata.table_colourandcompotision[9][6] / 12 * Y[5],
				+tabledata.table_colourandcompotision[9][7] / 12 * Y[6],
				+tabledata.table_colourandcompotision[9][8] / 12 * Y[7],
				+tabledata.table_colourandcompotision[9][9] / 12 * Y[8],
				+tabledata.table_colourandcompotision[9][10] / 12 * Y[9],
				+tabledata.table_colourandcompotision[9][11] / 12 * +tabledata.table_extradata[3][1] / 1000,
				tabledata.table_colourandcompotision[9][11]
			]
		],
		table_fabricfinishprocess : [
			[ tabledata.table_fabricfinishprocess[0][0], tabledata.table_fabricfinishprocess[0][1] ],
			[ tabledata.table_fabricfinishprocess[1][0], tabledata.table_fabricfinishprocess[1][1] ],
			[ tabledata.table_fabricfinishprocess[2][0], tabledata.table_fabricfinishprocess[2][1] ],
			[ tabledata.table_fabricfinishprocess[3][0], tabledata.table_fabricfinishprocess[3][1] ],
			[ tabledata.table_fabricfinishprocess[4][0], tabledata.table_fabricfinishprocess[4][1] ]
		],
		table_quantity            : [
			[ 'Yarn Qty', +tabledata.table_extrafabric[7][1] - elastaneQty ],
			[ 'Elastane Qty', elastaneQty ]
		],

		table_extrafabric         : [
			[
				tabledata.table_extrafabric[0][0],
				tabledata.table_extrafabric[0][1],
				tabledata.table_extrafabric[0][2],
				tabledata.table_extrafabric[0][3],
				tabledata.table_extrafabric[0][4]
			],
			[
				tabledata.table_extrafabric[1][0],
				tabledata.table_extrafabric[1][1],
				tabledata.table_extrafabric[1][2],
				tabledata.table_extrafabric[1][3],
				tabledata.table_extrafabric[1][4]
			],
			[
				tabledata.table_extrafabric[2][0],
				tabledata.table_extrafabric[2][1],
				tabledata.table_extrafabric[2][2],
				tabledata.table_extrafabric[2][3],
				tabledata.table_extrafabric[2][4]
			],
			[
				tabledata.table_extrafabric[3][0],
				tabledata.table_extrafabric[3][1],
				tabledata.table_extrafabric[3][2],
				tabledata.table_extrafabric[3][3],
				tabledata.table_extrafabric[3][4]
			],
			[
				tabledata.table_extrafabric[4][0],
				tabledata.table_extrafabric[4][1],
				tabledata.table_extrafabric[4][2],
				tabledata.table_extrafabric[4][3],
				tabledata.table_extrafabric[4][4]
			],
			[
				tabledata.table_extrafabric[5][0],
				tabledata.table_extrafabric[5][1],
				tabledata.table_extrafabric[5][2],
				tabledata.table_extrafabric[5][3],
				tabledata.table_extrafabric[5][4]
			],
			[
				tabledata.table_extrafabric[6][0],
				tabledata.table_extrafabric[6][1],
				tabledata.table_extrafabric[6][2],
				tabledata.table_extrafabric[6][3],
				tabledata.table_extrafabric[6][4]
			],
			[ 'G. Total', tabledata.table_extrafabric[7][1] ]
		],
		table_rawitems            : [
			[ 'Item/Description ', 'Colour', 'Fabrics Composition', 'Size', 'Total Fabrics' ],
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
				payload.item,
				tabledata.table_colourandcompotision[1][0],
				tabledata.table_colourandcompotision[1][1],
				tabledata.table_colourandcompotision[1][2],
				tabledata.table_colourandcompotision[1][3],
				tabledata.table_colourandcompotision[1][4],
				tabledata.table_colourandcompotision[1][5],
				tabledata.table_colourandcompotision[1][6],
				tabledata.table_colourandcompotision[1][7],
				tabledata.table_colourandcompotision[1][8],
				tabledata.table_colourandcompotision[1][9],
				tabledata.table_colourandcompotision[1][10],
				tabledata.table_colourandcompotision[1][11],
				tabledata.table_colourandcompotision[1][12]
			],
			[
				tabledata.table_colourandcompotision[2][0],
				tabledata.table_colourandcompotision[2][1],
				tabledata.table_colourandcompotision[2][2],
				tabledata.table_colourandcompotision[2][3],
				tabledata.table_colourandcompotision[2][4],
				tabledata.table_colourandcompotision[2][5],
				tabledata.table_colourandcompotision[2][6],
				tabledata.table_colourandcompotision[2][7],
				tabledata.table_colourandcompotision[2][8],
				tabledata.table_colourandcompotision[2][9],
				tabledata.table_colourandcompotision[2][10],
				tabledata.table_colourandcompotision[2][11],
				tabledata.table_colourandcompotision[2][12]
			],
			[
				tabledata.table_colourandcompotision[3][0],
				tabledata.table_colourandcompotision[3][1],
				tabledata.table_colourandcompotision[3][2],
				tabledata.table_colourandcompotision[3][3],
				tabledata.table_colourandcompotision[3][4],
				tabledata.table_colourandcompotision[3][5],
				tabledata.table_colourandcompotision[3][6],
				tabledata.table_colourandcompotision[3][7],
				tabledata.table_colourandcompotision[3][8],
				tabledata.table_colourandcompotision[3][9],
				tabledata.table_colourandcompotision[3][10],
				tabledata.table_colourandcompotision[3][11],
				tabledata.table_colourandcompotision[3][12]
			],
			[
				tabledata.table_colourandcompotision[4][0],
				tabledata.table_colourandcompotision[4][1],
				tabledata.table_colourandcompotision[4][2],
				tabledata.table_colourandcompotision[4][3],
				tabledata.table_colourandcompotision[4][4],
				tabledata.table_colourandcompotision[4][5],
				tabledata.table_colourandcompotision[4][6],
				tabledata.table_colourandcompotision[4][7],
				tabledata.table_colourandcompotision[4][8],
				tabledata.table_colourandcompotision[4][9],
				tabledata.table_colourandcompotision[4][10],
				tabledata.table_colourandcompotision[4][11],
				tabledata.table_colourandcompotision[4][12]
			],
			[
				tabledata.table_colourandcompotision[5][0],
				tabledata.table_colourandcompotision[5][1],
				tabledata.table_colourandcompotision[5][2],
				tabledata.table_colourandcompotision[5][3],
				tabledata.table_colourandcompotision[5][4],
				tabledata.table_colourandcompotision[5][5],
				tabledata.table_colourandcompotision[5][6],
				tabledata.table_colourandcompotision[5][7],
				tabledata.table_colourandcompotision[5][8],
				tabledata.table_colourandcompotision[5][9],
				tabledata.table_colourandcompotision[5][10],
				tabledata.table_colourandcompotision[5][11],
				tabledata.table_colourandcompotision[5][12]
			],
			[
				tabledata.table_colourandcompotision[6][0],
				tabledata.table_colourandcompotision[6][1],
				tabledata.table_colourandcompotision[6][2],
				tabledata.table_colourandcompotision[6][3],
				tabledata.table_colourandcompotision[6][4],
				tabledata.table_colourandcompotision[6][5],
				tabledata.table_colourandcompotision[6][6],
				tabledata.table_colourandcompotision[6][7],
				tabledata.table_colourandcompotision[6][8],
				tabledata.table_colourandcompotision[6][9],
				tabledata.table_colourandcompotision[6][10],
				tabledata.table_colourandcompotision[6][11],
				tabledata.table_colourandcompotision[6][12]
			],
			[
				tabledata.table_colourandcompotision[7][0],
				tabledata.table_colourandcompotision[7][1],
				tabledata.table_colourandcompotision[7][2],
				tabledata.table_colourandcompotision[7][3],
				tabledata.table_colourandcompotision[7][4],
				tabledata.table_colourandcompotision[7][5],
				tabledata.table_colourandcompotision[7][6],
				tabledata.table_colourandcompotision[7][7],
				tabledata.table_colourandcompotision[7][8],
				tabledata.table_colourandcompotision[7][9],
				tabledata.table_colourandcompotision[7][10],
				tabledata.table_colourandcompotision[7][11],
				tabledata.table_colourandcompotision[7][12]
			],
			[
				tabledata.table_colourandcompotision[8][0],
				tabledata.table_colourandcompotision[8][1],
				tabledata.table_colourandcompotision[8][2],
				tabledata.table_colourandcompotision[8][3],
				tabledata.table_colourandcompotision[8][4],
				tabledata.table_colourandcompotision[8][5],
				tabledata.table_colourandcompotision[8][6],
				tabledata.table_colourandcompotision[8][7],
				tabledata.table_colourandcompotision[8][8],
				tabledata.table_colourandcompotision[8][9],
				tabledata.table_colourandcompotision[8][10],
				tabledata.table_colourandcompotision[8][11],
				tabledata.table_colourandcompotision[8][12]
			],
			[
				'TOTAL',
				tabledata.table_colourandcompotision[9][1],
				tabledata.table_colourandcompotision[9][2],
				tabledata.table_colourandcompotision[9][3],
				tabledata.table_colourandcompotision[9][4],
				tabledata.table_colourandcompotision[9][5],
				tabledata.table_colourandcompotision[9][6],
				tabledata.table_colourandcompotision[9][7],
				tabledata.table_colourandcompotision[9][8],
				tabledata.table_colourandcompotision[9][9],
				tabledata.table_colourandcompotision[9][10],
				tabledata.table_colourandcompotision[9][11]
			]
		],
		table_fabricsl            : [
			[ '', '', '', '', '', '', '' ],
			[ '', '', '', '', '', '', '' ],
			[ '', '', '', '', '', '', '' ],
			[ '', '', '', '', '', '', '' ],
			[ '', '', '', '', '', '', '' ],
			[ '', '', '', '', '', '', '' ]
		],

		table_date                : [
			[ 'Yarn Required Date', tabledata.table_date[0][1] ],
			[ 'Knitting Start Date', tabledata.table_date[1][1] ],
			[ 'Knitting Close Date', tabledata.table_date[2][1] ],
			[ 'Batch Received Date', tabledata.table_date[3][1] ],
			[ 'Batch Delivery Date', tabledata.table_date[4][1] ],
			[ 'Dyeing Start Date', tabledata.table_date[5][1] ],
			[ 'Dyeing Close Date', tabledata.table_date[6][1] ],
			[ 'Finished Fabrics Check Close', tabledata.table_date[7][1] ],
			[ 'Finished Fabrics Inhouse', tabledata.table_date[8][1] ]
		]
	}
}
export default KnitData
