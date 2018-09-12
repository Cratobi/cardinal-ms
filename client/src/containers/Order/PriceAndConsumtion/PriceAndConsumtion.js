import React, { Component } from "react"

import ConsumptionAndPricingLayout from "./../../../components/Layout/ConsumptionAndPricing/ConsumptionAndPricing"

class PriceAndConsumtion extends Component {
  render() {
    return (
      <div>
        <div>
          <table className="overview">
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
          </table>
        </div>
        <ConsumptionAndPricingLayout
          editability="false"
          tabledata={this.props.order}
        />
      </div>
    )
  }
}

export default PriceAndConsumtion
