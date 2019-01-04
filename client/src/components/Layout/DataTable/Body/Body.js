import React, { Fragment } from 'react'
// eslint-disable-next-line
import { get, getIn } from 'immutable'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'
import { number, string } from 'prop-types'

const SelectOption = (props) => <option value={props.value}>{props.name}</option>
const parseDate = (str, format, locale) => {
	const parsed = dateFnsParse(str, format, { locale })
	if (DateUtils.isDate(parsed)) {
		return parsed
	}
	return undefined
}
const formatDate = (date, format, locale) => {
	return dateFnsFormat(date, format, { locale })
}

const tableBody = (props) => {
	const processOptions = {
		fabricfinishprocessOption : [
			'Open dia',
			'Tube dia',
			'Peach finish',
			'Brush',
			'Tumble dry',
			'Burnout',
			'AOP',
			'Enzyme',
			'Silicon',
			'Heat seat',
			'Light brushed inside-peached outside',
			'Light brush inside',
			'Heavy peach outside',
			'Inside Lt. brush',
			'Topside peached'
		],
		garmentapplicationOption  : [ 'Print', 'Sequence', 'Embroidery', 'Wash', 'AOP', 'Re embo', 'Woven fabric' ],
		accessoriesnameOption     : [
			'M. label',
			'Size label',
			'Bottom label',
			'Batch label',
			'Han tag',
			'Flag label',
			'Wash care label',
			'Warning label',
			'Price tag',
			'Poly bag',
			'Tissue papper',
			'Leather badge',
			'Security tag',
			'Gum tag',
			'Lock pin',
			'Cartoon',
			'PP belt',
			'Hanger',
			'Silica gel',
			'Care label',
			'Snap button',
			'Ring button',
			'Hang tag with price sticker',
			'Snap (CAP)',
			'Paper board',
			'Blister poly',
			'Elastic',
			'Twill tape',
			'Drawsting',
			'Cartoon sticker',
			'Smile label',
			'Bangladesh label',
			'Additional label',
			'Eylat',
			'Special label',
			'Mesh',
			'Chambray fabric',
			'Herringbone tape',
			'Satin tape',
			'Gross grain tape'
		],
		accessoriesOption         : [ 'Yes', 'No' ]
	}
	return props.schema.map((schema, rowindex) => (
		<tr key={rowindex}>
			{props.schema && props.data ? (
				schema.map((schema, colindex) => {
					// Init
					let cellData = props.data.getIn([ rowindex, colindex ])
					let [ colspan, rowspan, prefix, suffix, inputPrefix, inputSuffix, classname ] = [ null ]

					// Handle colspan or rowspan
					if (schema.get('colspan')) {
						colspan = schema.get('colspan')
					}
					if (schema.get('rowspan')) {
						rowspan = schema.get('rowspan')
					}

					// Handle prefix or suffix

					if (schema.get('prefix')) {
						const sign = schema.get('prefix')
						prefix = <span className='span-prefix'>{sign}</span>
						inputPrefix = <span className={`span-input-prefix${sign === 'BDT' ? '-long' : ''}`}>{sign}</span>
						classname = 'input-prefix'
					}
					if (schema.get('suffix')) {
						suffix = <span className='span-suffix'>{schema.get('suffix')}</span>
						inputSuffix = <span className='span-input-suffix'>{schema.get('suffix')}</span>
						classname = [ classname, 'input-suffix' ].join(' ')
					}
					if (schema.get('className')) {
						return (classname = schema.get('className'))
					}

					// Handle editable
					if (props.editability === true && schema.get('editable')) {
						// Handle Select element
						if (schema.get('cellType') === 'text' || schema.get('cellType') === 'number') {
							// Handle input element

							cellData = (
								<Fragment>
									<div className='input-container'>
										{inputPrefix}
										<input
											className={classname}
											data-tablename={props.tableName}
											data-rowindex={rowindex}
											data-colindex={colindex}
											onChange={props.changeHandler}
											name={schema.get('id')}
											type={schema.get('cellType')}
											title={cellData}
											value={cellData}
											placeholder={schema.get('cellType') === 'number' ? '0' : '...'}
										/>
										{inputSuffix}
									</div>
								</Fragment>
							)
						} else if (schema.get('cellType') === 'select') {
							// Select array corresponding to table name

							const optionArray = (() => {
								switch (props.tableName) {
									case 'fabricfinishprocess':
										return processOptions.fabricfinishprocessOption
									case 'garmentapplication':
										return processOptions.garmentapplicationOption
									case 'accessoriesname':
										return processOptions.accessoriesnameOption
									// case 'accessoriesname':
									//   return processOptions.accessoriesOption
									default:
										return null
								}
							})()

							cellData = (
								<select
									className={classname}
									data-tablename={props.tableName}
									data-rowindex={rowindex}
									data-colindex={colindex}
									onChange={props.changeHandler}
									value={cellData}
								>
									<option value='' />
									{optionArray.map((schema, index) => <SelectOption key={index} value={schema} name={schema} />)}
								</select>
							)
						} else if (schema.get('cellType') === 'date') {
							cellData = (
								<DayPickerInput
									onDayChange={props.changeHandler}
									tablename={props.tableName}
									rowindex={rowindex}
									colindex={colindex}
									keepFocus={false}
									formatDate={formatDate}
									format='D/M/YYYY'
									parseDate={parseDate}
									value={cellData}
									placeholder={`e.g. ${dateFnsFormat(new Date(), 'D/M/YYYY')}`}
								/>
							)
						} else if (schema.get('cellType') === 'checkbox') {
							cellData = (
								// <input
								//   type="checkbox"
								//   schema-tablename={props.tableName}
								//   schema-rowindex={rowindex}
								//   schema-colindex={colindex}
								//   onChange={props.changeHandler}
								//   value={cellData}
								//   checked={cellData === 'Yes' ? true : false}
								// />
								<select
									className={classname}
									data-tablename={props.tableName}
									data-rowindex={rowindex}
									data-colindex={colindex}
									onChange={props.changeHandler}
									value={cellData}
								>
									<option value='' />
									<option value='Yes'>Yes</option>
									<option value='No'>No</option>
								</select>
							)
						}
					} else {
						if (schema.get('cellType') === 'date' && cellData !== '') {
							cellData = new Date(cellData).toDateString()
						}
						if (schema.get('cellType') === 'number' && cellData !== '') {
							if (cellData !== undefined) {
								let parts
								if (typeof cellData === 'number') {
									parts = cellData.toString().split('.')
								} else if (typeof cellData === 'string') {
									parts = cellData.split('.')
								}
								parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
								cellData = parts.join('.')
								cellData = Math.round(cellData * 100) / 100
							}
						}
						cellData = (
							<div
								className={'filled-txt' + (schema.get('id') ? ' auto-filled-txt' : '')}
								// onWheel={e => props.wheel(e)} // To control horizental scroll by default
							>
								{prefix}
								{cellData}
								{suffix}
							</div>
						)
					}
					// Return table column

					return (
						<td colSpan={colspan} rowSpan={rowspan} key={colindex}>
							{cellData}
						</td>
					)
				})
			) : null}
		</tr>
	))
}

export default tableBody
