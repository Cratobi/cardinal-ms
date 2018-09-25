import React, { Component } from "react"
import { connect } from "react-redux"
// eslint-disable-next-line
import { get, getIn } from "immutable"
import * as actions from "../../store/actions/index"

import DataTableLayout from "../../components/Layout/DataTable/DataTable"
import "./EditableTable.css"
import LoadingLayout from "../../components/Layout/Loading/Loading"

class Table extends Component {
  tableChangeHandler = e => {
    this.props.onChange({
      rowindex: e.target.dataset.rowindex,
      colindex: e.target.dataset.colindex,
      tablename: e.target.dataset.tablename,
      value: e.target.value
    })
  }

  // wheel = e => {
  //   let d  elta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
  //   e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + e.deltaY / 10
  //   e.preventDefault()
  // }

  render() {
    return (
      <div>
        {this.props.tabledata ? (
          <div className="editable-table">
            <DataTableLayout
              editability={true}
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_measurments")}
              wheel={this.wheel}
            />
            <br />
            <DataTableLayout
              editability={true}
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_colourandcompotision")}
              wheel={this.wheel}
            />
            <br />
            <DataTableLayout
              editability={true}
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_extrafabric")}
              wheel={this.wheel}
            />
            <br />
            <DataTableLayout
              editability={true}
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_fabricfinishprocess")}
              wheel={this.wheel}
            />
            <br />
            <DataTableLayout
              editability={true}
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_garmentapplication")}
              wheel={this.wheel}
            />
            <br />
            <DataTableLayout
              editability={true}
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_accessoriesname")}
              wheel={this.wheel}
            />
            <br />
            <DataTableLayout
              editability={true}
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get("table_currency")}
              wheel={this.wheel}
            />
            <br />
            {/* <DataTableLayout
              editability={true}
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.state.table_price}
              wheel={this.wheel}
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
