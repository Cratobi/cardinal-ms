import React, { Component, Fragment } from 'react'
// eslint-disable-next-line
import { getIn } from 'immutable'
import ReactToPrint from 'react-to-print'

import ConsumptionAndPricingLayout from '../../../components/Layout/ConsumptionAndPricing/ConsumptionAndPricing'

class ConsumptionAndPricingLayoutClass extends React.Component {
  render() {
    return (
      <div>
        <div className="only-print">
          <h1>HEADER</h1>
        </div>
        <ConsumptionAndPricingLayout tabledata={this.props.tabledata} />
      </div>
    )
  }
}

class PriceAndConsumtion extends Component {
  render() {
    return (
      <Fragment>
        <div className="card-header flex-j-start">
          <div className="title">Price & Consumtion</div>
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
                <td className="header">Chest</td>
                <td className="header">Length</td>
              </tr>
              <tr>
                <td>S. Allowance:</td>
                <td className="tdata">
                  {this.props.tabledata.getIn([
                    'extradata',
                    's_allowance_chest',
                  ])}
                </td>
                <td className="tdata">
                  {this.props.tabledata.getIn([
                    'extradata',
                    's_allowance_length',
                  ])}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="static-table">
            <ConsumptionAndPricingLayoutClass
              ref={el => (this.componentRef = el)}
              tabledata={this.props.tabledata}
            />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default PriceAndConsumtion
