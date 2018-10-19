import React, { Component } from 'react'
// eslint-disable-next-line
import { get } from 'immutable'

import OrderCardLayout from './../../components/Layout/OrderCard/OrderCard'
import LoadingLayout from '../../components/Layout/Loading/Loading'

class Order extends Component {
  render() {
    return this.props.orders ? (
      this.props.orders.map((order, index) => (
        <OrderCardLayout
          key={index}
          id={order.get('id')}
          buyer={order.get('buyer')}
          orderNo={order.get('order_no')}
          styleNo={order.get('style_no')}
          path="/order/"
        />
      ))
    ) : (
      <LoadingLayout />
    )
  }
}

export default Order
