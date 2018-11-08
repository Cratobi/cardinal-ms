import React, { Component, Fragment } from 'react'
import PrintProvider, { Print, NoPrint } from 'react-easy-print'
// eslint-disable-next-line
import { getIn } from 'immutable'

import ConsumptionAndPricingLayout from '../../../components/Layout/ConsumptionAndPricing/ConsumptionAndPricing'

class PriceAndConsumtion extends Component {
  handlePrint = () => {
    window.print()
  }

  render() {
    return (
      <Fragment>
        <NoPrint>
          <div className="card-header">
            <div className="title">Price & Consumtion</div>
            <button
              className="btn btn-chip btn-dark p-l-1 p-r-1"
              onClick={this.handlePrint}
            >
              <i className="fas fa-print" />
              <span className="p-l">Print</span>
            </button>
          </div>
        </NoPrint>
        <PrintProvider>
          <Print single name="PriceAndConsumtion">
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
                      {this.props.tabledata.getIn([
                        'extradata',
                        'construction',
                      ])}
                    </td>
                  </tr>
                  <tr>
                    <td>Weight:</td>
                    <td colSpan="2">
                      {this.props.tabledata.getIn([
                        'extradata',
                        'fabric_weight',
                      ])}
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
                <ConsumptionAndPricingLayout tabledata={this.props.tabledata} />
              </div>
            </div>
          </Print>
        </PrintProvider>
      </Fragment>
    )
  }
}

export default PriceAndConsumtion
