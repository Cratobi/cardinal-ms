import React, { Component } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
import { get, getIn } from "immutable"
import * as actions from "../../store/actions/index"

import DataTableLayout from "../../components/Layout/DataTable/DataTable"
import "./EditableTable.css"
import LoadingLayout from "../../components/Layout/Loading/Loading"
// import Aux from "../../hoc/_Aux/_Aux"

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
        {this.props.tabledata ? (
          <div
            className={
              "editableTable" + (this.props.wide ? " editableTable-wide" : "")
            }
          >
            <DataTableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_measurments")}
            />
            <br />
            <DataTableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_colourandcompotision")}
            />
            <br />
            <DataTableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_extrafabric")}
            />
            <br />
            <DataTableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_fabricfinishprocess")}
            />
            <br />
            <DataTableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_garmentapplication")}
            />
            <br />
            <DataTableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_accessoriesname")}
            />
            <br />
            <DataTableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_currency")}
            />
            <br />
            {/* <DataTableLayout
              editability="true"
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.state.table_price}
            />
            <br /> */}
          </div>
        ) : (
          <LoadingLayout />
        )}
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
