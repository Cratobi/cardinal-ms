import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { getIn, toJS } from 'immutable'
import ReactToPrint from 'react-to-print'

import WOKnitAndAccessLayout from '../../../components/Layout/WOKnitAndAccess/WOKnitAndAccess'

class WOKnitAndAccess extends Component {
	render() {
		return (
			<div style={!this.props.render ? { display: 'none' } : null}>
				<div className="card-header flex-j-start">
					<div className="title">WO-Knit & Access</div>
					<ReactToPrint
						bodyClass="print-body"
						trigger={() => (
							<button className="btn btn-chip btn-lighter p-l-1 p-r-1 m-l-1">
								<i className="fas fa-print" />
								<span className="p-l">Print</span>
							</button>
						)}
						content={() => this.componentRef}
					/>
				</div>
				<div className="print-single">
					<div className="static-table">
						<WOKnitAndAccessLayout schema={this.props.knit_schema} data={this.props.tabledata} />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		knit_schema: state.getIn(['order', 'knit_schema']),
	}
}

export default connect(mapStateToProps)(WOKnitAndAccess)
