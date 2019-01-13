const tabledataSchema = {
	table_extradata            : {
		yarn_type          : '',
		construction       : '',
		fabric_weight      : '',
		fabric_type        : '',
		fabric_type_value  : '',
		wastage            : '',
		s_allowance_chest  : '',
		s_allowance_length : '',
		basic              : []
	},
	table_measurments          : {
		tablename   : 'measurments',
		tableheader : [ { colspan: 11, cellData: 'Measurments' } ],
		tablebody   : [
			[
				{ editable: false, cellType: 'text', cellData: 'Size' },
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Body length'
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Sleeve length'
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'text',
					cellData : '1/2 Chest'
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				}
			]
		]
	},
	table_colourandcompotision : {
		tablename   : 'colourandcompotision',
		tableheader : [ { colspan: 13, cellData: 'Colour and Compotision' } ],
		tablebody   : [
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Colour'
				},
				{
					editable : false,
					cellType : 'text',
					cellData : 'Composition'
				},
				{
					editable : false,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'text',
					cellData : 'Count'
				}
			],
			[
				{ id: 'cnc_a_1', editable: true, cellType: 'text', cellData: '' },
				{ id: 'cnc_a_2', editable: true, cellType: 'text', cellData: '' },
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{ id: 'cnc_b_1', editable: true, cellType: 'text', cellData: '' },
				{ id: 'cnc_b_2', editable: true, cellType: 'text', cellData: '' },
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{ id: 'cnc_c_1', editable: true, cellType: 'text', cellData: '' },
				{ id: 'cnc_c_2', editable: true, cellType: 'text', cellData: '' },
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{ id: 'cnc_d_1', editable: true, cellType: 'text', cellData: '' },
				{ id: 'cnc_d_2', editable: true, cellType: 'text', cellData: '' },
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{ id: 'cnc_e_1', editable: true, cellType: 'text', cellData: '' },
				{ id: 'cnc_e_2', editable: true, cellType: 'text', cellData: '' },
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{ id: 'cnc_f_1', editable: true, cellType: 'text', cellData: '' },
				{ id: 'cnc_f_2', editable: true, cellType: 'text', cellData: '' },
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{ id: 'cnc_g_1', editable: true, cellType: 'text', cellData: '' },
				{ id: 'cnc_g_2', editable: true, cellType: 'text', cellData: '' },
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{ id: 'cnc_h_1', editable: true, cellType: 'text', cellData: '' },
				{ id: 'cnc_h_2', editable: true, cellType: 'text', cellData: '' },
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					colspan  : '2',
					cellType : 'text',
					cellData : 'Count'
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			]
		]
	},
	table_extrafabric          : {
		tablename   : 'extrafabric',
		tableheader : [
			{ cellData: 'Contrast Color' },
			{ cellData: 'Construction' },
			{ cellData: 'Composition' },
			{ cellData: 'Fabric Weight' },
			{ cellData: 'Qty' }
		],
		tablebody   : [
			[
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				}
			],

			[
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'text',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				}
			],

			[
				{
					editable : false,
					colspan  : 4,
					cellType : 'text',
					cellData : 'G. Total'
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			]
		]
	},
	table_fabricfinishprocess  : {
		tablename   : 'fabricfinishprocess',
		tableheader : [ { colspan: 2, cellData: 'Fabric Finish Process' } ],
		tablebody   : [
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'checkbox',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'checkbox',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'checkbox',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					cellType : 'checkbox',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{ id: 'ffp_e_2', editable: true, cellType: 'checkbox', cellData: '' }
			]
		]
	},
	table_garmentapplication   : {
		tablename   : 'garmentapplication',
		tableheader : [ { cellData: 'Description' }, { cellData: 'Excess' }, { cellData: 'Price' } ],
		tablebody   : [
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			]
		]
	},
	table_accessoriesname      : {
		tablename   : 'accessoriesname',
		tableheader : [ { cellData: 'Description' }, { cellData: 'Excess' }, { cellData: 'Price' } ],
		tablebody   : [
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : true,
					cellType : 'select',
					cellData : ''
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					colspan  : '2',
					cellType : 'text',
					cellData : 'Count cost of accessories'
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			]
		]
	},
	table_currency             : {
		tablename   : 'currency',
		tableheader : [ { colspan: 3, cellData: 'Currency' } ],
		tablebody   : [
			[
				{
					editable : false,
					colspan  : '2',
					cellType : 'text',
					cellData : 'Exchange Rate'
				},
				{
					editable : true,
					prefix   : 'BDT',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					colspan  : '2',
					cellType : 'text',
					cellData : 'Count Yarn'
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					colspan  : '2',
					cellType : 'text',
					cellData : 'Body consumption'
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					colspan  : '2',
					cellType : 'text',
					cellData : 'Rib consumption'
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Lycra % Body'
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Lycra % Rib'
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					colspan  : '2',
					cellType : 'text',
					cellData : 'Rib AOP quantity'
				},
				{
					editable : true,
					cellType : 'number',
					cellData : ''
				}
			]
		]
	},
	table_price                : {
		tablename   : 'price',
		tableheader : [ { cellData: 'Particular' }, { cellData: 'Price' }, { cellData: 'Value' }, { cellData: 'Per Pcs' } ],
		tablebody   : [
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Count yarn cost'
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Body knitting cost'
				},
				{
					editable : true,
					prefix   : 'BDT',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Rib knitting cost'
				},
				{
					editable : true,
					prefix   : 'BDT',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Dyeing cost'
				},
				{
					editable : true,
					prefix   : 'BDT',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Lycra cost'
				},
				{
					editable : true,
					prefix   : 'BDT',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Pitch finished cost'
				},
				{
					editable : true,
					prefix   : 'BDT',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Brush finished cost'
				},
				{
					editable : true,
					prefix   : 'BDT',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Tumble dry'
				},
				{
					editable : true,
					prefix   : 'BDT',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{ editable: false, cellType: 'text', cellData: 'AOP' },
				{
					editable : true,
					prefix   : 'BDT',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{ editable: false, cellType: 'text', cellData: 'Print' },
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Sequence'
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Lather patch'
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Embroidery'
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Accessories'
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{ editable: false, cellType: 'text', cellData: 'CM' },
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Freight'
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Commercial cost'
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Extra cost 1'
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Extra cost 2'
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Extra cost 3'
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Buying commotion'
				},
				{
					editable : true,
					suffix   : '%',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					colspan  : '2',
					cellType : 'text',
					cellData : 'Count'
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Order price (Colour)'
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'text',
					cellData : 'Difference'
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Order price (White)'
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'text',
					cellData : 'Difference'
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Order price (Black)'
				},
				{
					editable : true,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				},
				{
					editable : false,
					cellType : 'text',
					cellData : 'Difference'
				},
				{
					editable : false,
					prefix   : '$',
					cellType : 'number',
					cellData : ''
				}
			]
		]
	},
	table_date                 : {
		tablename   : 'date',
		tableheader : [ { colspan: 2, cellData: 'Dates' } ],
		tablebody   : [
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Yarn Required Date'
				},
				{
					editable : true,
					cellType : 'date',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Knitting Start Date'
				},
				{
					editable : true,
					cellType : 'date',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Knitting Close Date'
				},
				{
					editable : true,
					cellType : 'date',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Batch Received Date'
				},
				{
					editable : true,
					cellType : 'date',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Batch Delivery Date'
				},
				{
					editable : true,
					cellType : 'date',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Dyeing Start Date'
				},
				{
					editable : true,
					cellType : 'date',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Dyeing Close Date'
				},
				{
					editable : true,
					cellType : 'date',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Finished Fabrics Check Close'
				},
				{
					editable : true,
					cellType : 'date',
					cellData : ''
				}
			],
			[
				{
					editable : false,
					cellType : 'text',
					cellData : 'Finished Fabrics Inhouse'
				},
				{
					editable : true,
					cellType : 'date',
					cellData : ''
				}
			]
		]
	}
}

export default tabledataSchema
