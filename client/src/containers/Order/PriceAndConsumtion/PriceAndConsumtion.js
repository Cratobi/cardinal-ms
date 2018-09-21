import React, { Component } from "react"

import ConsumptionAndPricingLayout from "../../../components/Layout/ConsumptionAndPricing/ConsumptionAndPricing"
import Aux from "../../../hoc/_Aux/_Aux"

class PriceAndConsumtion extends Component {
  render() {
    return (
      <Aux>
        <table className="extradata">
          <tbody>
            <tr>
              <td>Yarn Type:</td>
              <td>COMBED COTTON</td>
            </tr>
            <tr>
              <td>Construction:</td>
              <td>100% CTN SINGLE JERSY</td>
            </tr>
            <tr>
              <td>Weight:</td>
              <td>180 GSM</td>
            </tr>
            <tr>
              <td>Self-Fabric:</td>
              <td>150 Gram</td>
            </tr>
            <tr>
              <td>Wastage:</td>
              <td>Chest: 5</td>
            </tr>
            <tr>
              <td>S. Allowance:</td>
              <td>Length: 10</td>
            </tr>
          </tbody>
        </table>
        <div className="static-table">
          <ConsumptionAndPricingLayout tabledata={this.props.tabledata} />
        </div>
      </Aux>
    )
  }
}

export default PriceAndConsumtion
