import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { get, getIn, size } from 'immutable'
import { NavLink, Route, Redirect, withRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import ReactToPrint from 'react-to-print'
import * as actions from '../../store/actions'

import Overview from './Overview/Overview'
import PriceAndConsumtion from './PriceAndConsumtion/PriceAndConsumtion'
import WOKnitAndAccess from './WOKnitAndAccess/WOKnitAndAccess'
import LoadingLayout from '../../components/Layout/Loading/Loading'
import '../../components/style/DuoGrid.css'
import './Order.css'

class PrintWrapper extends React.Component {
	render() {
		return this.props.children
	}
}

class Order extends Component {
	state = {
		show_more : false
	}
	componentWillMount() {
		this.props.resetOrder()
		this.props.fetchOrder(this.props.match.params.id)
	}
	componentWillUnmount() {
		this.props.resetOrder()
	}
	handleToggleMore = () => {
		const state = { ...this.state }
		state.show_more = !state.show_more
		this.setState(state)
	}

	render() {
		const path = this.props.location.pathname
		return (
			<Fragment>
				{!this.props.order ? <LoadingLayout txt /> : null}
				<div id='print-backdrop' hidden />
				<div id='print-all' hidden>
					<h1>All Header</h1>
					<div id='print-PriceAndConsumtion'>
						<h2>Price And Consumtion</h2>
					</div>
				</div>
				<main className='container duo-grid'>
					<aside className='side-tab'>
						<CSSTransition in={this.props.order ? true : false} timeout={250} classNames='slide-right' unmountOnExit>
							<ul>
								<NavLink activeClassName='active' to={`/order/${this.props.match.params.id}/overview`}>
									<li>
										<i className='fas fa-chart-area' />
										<span className='text'>Overview</span>
									</li>
								</NavLink>
								<NavLink to={`/order/${this.props.match.params.id}/priceandconsumtion`}>
									<li>
										<i className='fas fa-hand-holding-usd' />
										<span className='text'>Price & Consumtion</span>
									</li>
								</NavLink>
								<NavLink to={`/order/${this.props.match.params.id}/woknitandaccess`}>
									<li>
										<i className='fas fa-mitten' />
										<span className='text'>WO-Knit & Access</span>
									</li>
								</NavLink>
							</ul>
						</CSSTransition>
					</aside>
					<CSSTransition
						in={this.props.order && this.props.order.size ? true : false}
						timeout={250}
						classNames='fade'
						unmountOnExit
					>
						{this.props.order ? (
							<Fragment>
								<Route
									path='/order/:id'
									exact
									render={() => <Redirect exact to={`/order/${this.props.match.params.id}/overview`} />}
								/>
								<PrintWrapper ref={(el) => (this.componentRef = el)}>
									<article className='card card-body'>
										<Overview
											render={path.includes('overview')}
											showMore={this.state.show_more}
											handleToggleMore={this.handleToggleMore}
											printBtn={
												<ReactToPrint
													bodyClass='print-body'
													trigger={() => (
														<button className='btn btn-chip btn-dark p-l-1 p-r-1 m-l-1'>
															<i className='fas fa-print' />
															<span className='p-l'>Print All</span>
														</button>
													)}
													content={() => this.componentRef}
												/>
											}
											order={this.props.order}
										/>
										<PriceAndConsumtion
											render={path.includes('priceandconsumtion')}
											tabledata={this.props.order.get('tabledata')}
										/>
										<WOKnitAndAccess render={path.includes('woknitandaccess')} tabledata={this.props.knit_data} />
									</article>
								</PrintWrapper>
							</Fragment>
						) : (
							<LoadingLayout txt />
						)}
					</CSSTransition>
				</main>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		order     : state.getIn([ 'order', 'order' ]),
		knit_data : state.getIn([ 'order', 'knit_data' ])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchOrder : (id) => dispatch(actions.fetchOrder(id)),
		resetOrder : () => dispatch(actions.resetOrder())
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Order))
