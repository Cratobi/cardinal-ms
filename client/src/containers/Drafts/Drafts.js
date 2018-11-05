import React, { Component } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { get, getIn, size } from 'immutable'
import * as actions from '../../store/actions'

import MonoGridLayout from '../../components/Layout/MonoGrid/MonoGrid'
import OrderCardLayout from './../../components/Layout/OrderCard/OrderCard'
import LoadingLayout from '../../components/Layout/Loading/Loading'

class Order extends Component {
  componentWillMount() {
    this.props.fetchDrafts()
  }
  componentWillUnmount() {
    this.props.resetDrafts()
  }

  render() {
    return this.props.drafts ? (
      this.props.drafts.size !== 0 ? (
        <MonoGridLayout
          CustomCSS="orders"
          header={<h5 className="header-title"> DRAFT </h5>}
        >
          {this.props.drafts.map(draft => (
            <OrderCardLayout
              key={draft.get('id')}
              id={draft.get('id')}
              buyer={draft.get('buyer')}
              orderNo={draft.get('order_no')}
              styleNo={draft.get('style_no')}
              path="/draft/"
            />
          ))}
        </MonoGridLayout>
      ) : (
        <MonoGridLayout emptyTxt="Draft is empty :D" />
      )
    ) : (
      <LoadingLayout txt center />
    )
  }
}

const mapStateToProps = state => {
  return {
    drafts: state.getIn(['draft', 'drafts']),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDrafts: () => dispatch(actions.fetchDrafts()),
    resetDrafts: () => dispatch(actions.resetDrafts()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order)
