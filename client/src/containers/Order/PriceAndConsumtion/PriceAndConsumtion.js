import React, { Component, Fragment } from 'react'
// eslint-disable-next-line
import { getIn } from 'immutable'

import ConsumptionAndPricingLayout from '../../../components/Layout/ConsumptionAndPricing/ConsumptionAndPricing'

class PriceAndConsumtion extends Component {
  render() {
    return (
      <Fragment>
        <table className="extradata">
          <tbody>
            <tr>
              <td>Yarn Type:</td>
              <td colSpan="2">
                {this.props.tabledata.getIn(['extradata', 'yarn_type'])}
              </td>
            </tr>
            <tr>
              <td>Construction:</td>
              <td colSpan="2">
                {this.props.tabledata.getIn(['extradata', 'construction'])}
              </td>
            </tr>
            <tr>
              <td>Weight:</td>
              <td colSpan="2">
                {this.props.tabledata.getIn(['extradata', 'fabric_weight'])}
              </td>
            </tr>
            <tr>
              <td>Self-Fabric:</td>
              <td colSpan="2">
                {this.props.tabledata.getIn([
                  'extradata',
                  'self_fabric_matching_body',
                ])}
              </td>
            </tr>
            <tr>
              <td>Wastage:</td>
              <td colSpan="2">
                {this.props.tabledata.getIn(['extradata', 'wastage'])}
              </td>
            </tr>
            <tr>
              <td />
              <td>Chest</td>
              <td>Length</td>
            </tr>
            <tr>
              <td>S. Allowance:</td>
              <td>
                {this.props.tabledata.getIn(['extradata', 's_allowance_chest'])}
              </td>
              <td>
                {this.props.tabledata.getIn([
                  'extradata',
                  's_allowance_length',
                ])}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="static-table">
          <ConsumptionAndPricingLayout tabledata={this.props.tabledata} />
        </div>
      </Fragment>
    )
  }
}

export default PriceAndConsumtion
