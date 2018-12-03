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
			rowindex: 0,
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
							<input
								type="text"
								name="yarn_type"
								data-colindex={1}
								className="form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['extradata', 'yarn_type'])}
							/>
						</td>
					</tr>
					<tr>
						<td>Construction:</td>
						<td colSpan="2">
							<input
								type="text"
								name="construction"
								data-colindex={2}
								className="form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['extradata', 'construction'])}
							/>
						</td>
					</tr>
					<tr>
						<td>Weight:</td>
						<td colSpan="2">
							<input
								type="number"
								name="fabric_weight"
								data-colindex={3}
								className="form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['extradata', 'fabric_weight'])}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<input
								type="text"
								name="fabric_type"
								data-colindex={4}
								className="form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['extradata', 'self_fabric_matching_body'])}
							/>
						</td>
						<td colSpan="2">
							<input
								type="number"
								name="fabric_type_value"
								data-colindex={5}
								className="form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['extradata', 'self_fabric_matching_body'])}
							/>
						</td>
					</tr>
					<tr>
						<td>Wastage:</td>
						<td colSpan="2">
							<input
								type="number"
								name="wastage"
								data-colindex={6}
								className="form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['extradata', 'wastage'])}
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
								data-colindex={7}
								className="custom-form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['extradata', 's_allowance_chest'])}
							/>
						</td>
						<td className="half-td">
							<input
								type="number"
								name="s_allowance_length"
								data-colindex={8}
								className="custom-form-input"
								autoComplete="off"
								onChange={e => this.handleChange(e)}
								value={this.props.data.getIn(['extradata', 's_allowance_length'])}
							/>
						</td>
					</tr>
					<tr>
						<td>R22:</td>
						<td className="half-td">{this.props.data.getIn(['extradata', 'R22'])}</td>
					</tr>
					<tr>
						<td>S22:</td>
						<td className="half-td">{this.props.data.getIn(['extradata', 'S22'])}</td>
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
