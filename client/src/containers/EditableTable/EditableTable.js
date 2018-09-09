import React, { Component } from "react"
import { connect } from "react-redux"
import { get, getIn } from "immutable"
import * as actions from "../../store/actions/index"

import TableLayout from "../../components/Layout/Table/Table"

class Table extends Component {
  tableChangeHandler = e => {
    this.props.onChange({
      rowindex: e.target.dataset.rowindex,
      colindex: e.target.dataset.colindex,
      tablename: e.target.dataset.tablename,
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <br />
        <br />
        {this.props.tabledata ? (
          <div>
            <TableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_measurments")}
            />
            <br />
            <TableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_colourandcompotision")}
            />
            <br />
            <TableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_extrafabric")}
            />
            <br />
            <TableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_fabricfinishprocess")}
            />
            <br />
            <TableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_garmentapplication")}
            />
            <br />
            <TableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_accessoriesname")}
            />
            <br />
            <TableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_currency")}
            />
            <br />
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
        {/* <TableLayout
        editability="true"
        changeHandler={(e) => this.tableChangeHandler(e)} 
        tableData={this.state.table_price}/><br /> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: payload => dispatch(actions.onChange(payload))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Table)
