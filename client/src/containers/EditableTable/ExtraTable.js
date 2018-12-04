import React, { Component } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { get, getIn } from 'immutable'
import * as actions from '../../store/actions/index'

import './EditableTable.css'
import LoadingLayout from '../../components/Layout/Loading/Loading'

class ExtraData extends Component {
	handleChange = e => {
		this.props.onChange({
			tablename: 'extradata',
			rowindex: e.target.dataset.rowindex,
			colindex: e.target.dataset.colindex,
			name: e.target.name,
			value: e.target.value,
		})
	}

	render() {
		return this.props.data ? (
			<table className="card overview extradata_table">
				<tbody>
					<tr>
						<td>Yarn Type:</td>
						<td colSpan="2">
							{/* {console.log(this.props.data.getIn(['table_extradata', 0]))} */}
							<input
								type="text"
								name="yarn_type"
								data-rowindex={0}
								className="form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['table_extradata', 0])}
							/>
						</td>
					</tr>
					<tr>
						<td>Construction:</td>
						<td colSpan="2">
							<input
								type="text"
								name="construction"
								data-rowindex={1}
								className="form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['table_extradata', 1])}
							/>
						</td>
					</tr>
					<tr>
						<td>Weight:</td>
						<td colSpan="2">
							<input
								type="number"
								name="fabric_weight"
								data-rowindex={2}
								className="form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['table_extradata', 2])}
							/>
						</td>
					</tr>
					<tr>
						<td>
							{/* {console.log(typeof this.props.data.getIn(['table_extradata', 3, 0]))} */}
							<input
								type="text"
								name="fabric_type"
								data-rowindex={3}
								data-colindex={0}
								className="form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['table_extradata', 3, 0])}
							/>
						</td>
						<td colSpan="2">
							<input
								type="number"
								name="fabric_type_value"
								data-rowindex={3}
								data-colindex={1}
								className="form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['table_extradata', 3, 1])}
							/>
						</td>
					</tr>
					<tr>
						<td>Wastage:</td>
						<td colSpan="2">
							<input
								type="number"
								name="wastage"
								data-rowindex={4}
								className="form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['table_extradata', 4])}
							/>
						</td>
					</tr>
					<tr>
						<td />
						<th>Chest</th>
						<th>Length</th>
					</tr>
					<tr>
						<td>S. Allowance:</td>
						<td className="half-td">
							<input
								type="number"
								name="s_allowance_chest"
								data-rowindex={5}
								className="custom-form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['table_extradata', 5])}
							/>
						</td>
						<td className="half-td">
							<input
								type="number"
								name="s_allowance_length"
								data-rowindex={6}
								className="custom-form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['table_extradata', 6])}
							/>
						</td>
					</tr>
					<tr>
						<td>R22:</td>
						<td className="half-td">{this.props.data.getIn(['table_extradata', 'R22'])}</td>
					</tr>
					<tr>
						<td>S22:</td>
						<td className="half-td">{this.props.data.getIn(['table_extradata', 'S22'])}</td>
					</tr>
				</tbody>
			</table>
		) : (
			<LoadingLayout />
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onChange: payload => dispatch(actions.onChange(payload)),
	}
}

export default connect(null, mapDispatchToProps)(ExtraData)
