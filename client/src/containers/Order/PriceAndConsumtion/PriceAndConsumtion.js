import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { getIn } from 'immutable'
import ReactToPrint from 'react-to-print'

import PricingAndConsumption from '../../../components/Layout/PricingAndConsumption/PricingAndConsumption'

class PrintWrapper extends React.Component {
	render() {
		return (
			<div>
				<div className='only-print'>
					<h1>HEADER</h1>
				</div>
				{this.props.children}
			</div>
		)
	}
}

class PriceAndConsumtion extends Component {
	render() {
		return (
			<div className={`print-page print-break${!this.props.render ? ' only-print' : ''}`}>
				<div className='card-header flex-j-start only-display'>
					<div className='title'>Price & Consumtion</div>
					<ReactToPrint
						bodyClass='print-body'
						trigger={() => (
							<button className='btn btn-chip btn-lighter p-l-1 p-r-1 m-l-1'>
								<i className='fas fa-print' />
								<span className='p-l'>Print</span>
							</button>
						)}
						content={() => this.componentRef}
					/>
				</div>
				<div className='print-single'>
					<table className='extradata'>
						<tbody>
							<tr>
								<td>Yarn Type:</td>
								<td colSpan='2'>{this.props.tabledata.getIn([ 'table_extradata', 0 ])}</td>
							</tr>
							<tr>
								<td>Construction:</td>
								<td colSpan='2'>{this.props.tabledata.getIn([ 'table_extradata', 1 ])}</td>
							</tr>
							<tr>
								<td>Weight:</td>
								<td colSpan='2'>{this.props.tabledata.getIn([ 'table_extradata', 2 ])}</td>
							</tr>
							<tr>
								<td>Self-Fabric:</td>
								<td colSpan='2'>{this.props.tabledata.getIn([ 'table_extradata', 3, 0 ])}</td>
							</tr>
							<tr>
								<td>Wastage:</td>
								<td colSpan='2'>{this.props.tabledata.getIn([ 'table_extradata', 3, 1 ])}</td>
							</tr>
							<tr>
								<td />
								<td className='header'>Chest</td>
								<td className='header'>Length</td>
							</tr>
							<tr>
								<td>S. Allowance:</td>
								<td className='tdata'>{this.props.tabledata.getIn([ 'table_extradata', 4 ])}</td>
								<td className='tdata'>{this.props.tabledata.getIn([ 'table_extradata', 5 ])}</td>
							</tr>
						</tbody>
					</table>
					<div className='static-table'>
						<PrintWrapper ref={(el) => (this.componentRef = el)}>
							<PricingAndConsumption schema={this.props.CnP_dataSchema} data={this.props.tabledata} />
						</PrintWrapper>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		CnP_dataSchema : state.getIn([ 'draft', 'CnP_dataSchema' ])
	}
}

export default connect(mapStateToProps)(PriceAndConsumtion)
