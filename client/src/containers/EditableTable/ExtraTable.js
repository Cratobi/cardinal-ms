import React, { Component } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { get, getIn } from 'immutable'
import * as actions from '../../store/actions/index'

import './EditableTable.css'
import LoadingLayout from '../../components/Layout/Loading/Loading'

class ExtraData extends Component {
  handleChange = e => {
    this.props.onChange({
      tablename: 'extradata',
      name: e.target.name,
      value: e.target.value,
    })
  }

  render() {
    return (
      <div>
        {this.props.tabledata ? (
          <table className="card overview extradata_table">
            <tbody>
              <tr>
                <td>Yarn Type:</td>
                <td colSpan="2">
                  <input
                    type="text"
                    name="yarn_type"
                    className="form-input"
                    autoComplete="off"
                    onChange={e => this.handleChange(e)}
                    value={this.props.tabledata.getIn([
                      'extradata',
                      'yarn_type',
                    ])}
                  />
                </td>
              </tr>
              <tr>
                <td>Construction:</td>
                <td colSpan="2">
                  <input
                    type="text"
                    name="construction"
                    className="form-input"
                    autoComplete="off"
                    onChange={e => this.handleChange(e)}
                    value={this.props.tabledata.getIn([
                      'extradata',
                      'construction',
                    ])}
                  />
                </td>
              </tr>
              <tr>
                <td>Weight:</td>
                <td colSpan="2">
                  <input
                    type="text"
                    name="fabric_weight"
                    className="form-input"
                    autoComplete="off"
                    onChange={e => this.handleChange(e)}
                    value={this.props.tabledata.getIn([
                      'extradata',
                      'fabric_weight',
                    ])}
                  />
                </td>
              </tr>
              <tr>
                <td>self_fabric_matching_body:</td>
                <td colSpan="2">
                  <input
                    type="text"
                    name="self_fabric_matching_body"
                    className="form-input"
                    autoComplete="off"
                    onChange={e => this.handleChange(e)}
                    value={this.props.tabledata.getIn([
                      'extradata',
                      'self_fabric_matching_body',
                    ])}
                  />
                </td>
              </tr>
              <tr>
                <td>Wastage:</td>
                <td colSpan="2">
                  <input
                    type="text"
                    name="wastage"
                    className="form-input"
                    autoComplete="off"
                    onChange={e => this.handleChange(e)}
                    value={this.props.tabledata.getIn(['extradata', 'wastage'])}
                  />
                </td>
              </tr>
              <tr>
                <td />
                <th>Chest</th>
                <th>Length</th>
              </tr>
              <tr>
                <td>S. Allowance:</td>
                <td className="half-td">
                  <input
                    type="text"
                    name="s_allowance_chest"
                    className="custom-form-input"
                    autoComplete="off"
                    onChange={e => this.handleChange(e)}
                    value={this.props.tabledata.getIn([
                      'extradata',
                      's_allowance_chest',
                    ])}
                  />
                </td>
                <td className="half-td">
                  <input
                    type="text"
                    name="s_allowance_length"
                    className="custom-form-input"
                    autoComplete="off"
                    onChange={e => this.handleChange(e)}
                    value={this.props.tabledata.getIn([
                      'extradata',
                      's_allowance_length',
                    ])}
                  />
                </td>
              </tr>
              <tr>
                <td>R22:</td>
                <td className="half-td">
                  {this.props.tabledata.getIn(['extradata', 'R22'])}
                </td>
              </tr>
              <tr>
                <td>S22:</td>
                <td className="half-td">
                  {this.props.tabledata.getIn(['extradata', 'S22'])}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <LoadingLayout />
        )}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: payload => dispatch(actions.onChange(payload)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(ExtraData)
