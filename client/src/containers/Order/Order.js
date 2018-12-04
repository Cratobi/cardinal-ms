import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { get, getIn, size } from 'immutable'
import { NavLink, Route, Redirect, withRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import * as actions from '../../store/actions'

import Overview from './Overview/Overview'
import PriceAndConsumtion from './PriceAndConsumtion/PriceAndConsumtion'
import LoadingLayout from '../../components/Layout/Loading/Loading'
import '../../components/style/DuoGrid.css'
import './Order.css'

class Order extends Component {
	state = {
		show_more: false,
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
				<div id="print-backdrop" hidden />
				<div id="print-all" hidden>
					<h1>All Header</h1>
					<div id="print-PriceAndConsumtion">
						<h2>Price And Consumtion</h2>
					</div>
				</div>
				<main className="container duo-grid">
					<aside className="side-tab">
						<CSSTransition
							in={this.props.order ? true : false}
							timeout={250}
							classNames="slide-right"
							unmountOnExit
						>
							<ul>
								<NavLink activeClassName="active" to={`/order/${this.props.match.params.id}/overview`}>
									<li>
										<i className="fas fa-chart-area" />
										<span className="text">Overview</span>
									</li>
								</NavLink>
								<NavLink to={`/order/${this.props.match.params.id}/priceandconsumtion`}>
									<li>
										<i className="fas fa-hand-holding-usd" />
										<span className="text">Price & Consumtion</span>
									</li>
								</NavLink>
								{/* <NavLink
              to={`/order/${this.props.match.params.id}/woknitandaccess`}
            >
              <li>
                <i className="fas fa-tshirt" />
                <span className="text">WO-Knit & Access</span>
              </li>
            </NavLink>
            <NavLink
              to={`/order/${this.props.match.params.id}/knittingprogram`}
            >
              <li>
                <i className="fas fa-industry" />
                <span className="text">Knitting Program</span>
              </li>
            </NavLink> */}
							</ul>
						</CSSTransition>
					</aside>
					<CSSTransition
						in={this.props.order && this.props.order.size ? true : false}
						timeout={250}
						classNames="fade"
						unmountOnExit
					>
						{this.props.order ? (
							<article className="card card-body">
								<Route
									path="/order/:id"
									exact
									render={() => (
										<Redirect exact to={`/order/${this.props.match.params.id}/overview`} />
									)}
								/>
								<Overview
									render={path.includes('overview')}
									showMore={this.state.show_more}
									handleToggleMore={this.handleToggleMore}
									handlePrint={this.handlePrint}
									order={this.props.order}
								/>
								<PriceAndConsumtion
									render={path.includes('priceandconsumtion')}
									tabledata={this.props.order.get('tabledata')}
									handlePrint={this.handlePrint}
								/>
							</article>
						) : (
							<LoadingLayout txt />
						)}
					</CSSTransition>
				</main>
			</Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		order: state.getIn(['order', 'order']),
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchOrder: id => dispatch(actions.fetchOrder(id)),
		resetOrder: () => dispatch(actions.resetOrder()),
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Order))
