import React, { Component } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { get, getIn } from 'immutable'
import * as actions from '../../store/actions/index'

import DataTableLayout from '../../components/Layout/DataTable/DataTable'
import './EditableTable.css'
import LoadingLayout from '../../components/Layout/Loading/Loading'

class Table extends Component {
  tableChangeHandler = e => {
    this.props.onChange({
      rowindex: e.target.dataset.rowindex,
      colindex: e.target.dataset.colindex,
      tablename: e.target.dataset.tablename,
      value: e.target.value,
    })
  }
  tableDateChangeHandler = (date, modifiers, e) => {
    e = e.props
    this.props.onChange({
      rowindex: e.rowindex,
      colindex: e.colindex,
      tablename: e.tablename,
      value: date,
    })
  }

  render() {
    return (
      <div>
        {this.props.tabledata ? (
          <div className="editable-table">
            <DataTableLayout
              editability={true}
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get('table_measurments')}
              wheel={this.wheel}
            />
            <DataTableLayout
              editability={true}
              changeHandler={e => this.tableChangeHandler(e)}
              tableData={this.props.tabledata.get('table_colourandcompotision')}
              wheel={this.wheel}
            />
            <div className="inline-datatable-conatiner">
              <DataTableLayout
                editability={true}
                changeHandler={e => this.tableChangeHandler(e)}
                tableData={this.props.tabledata.get(
                  'table_fabricfinishprocess',
                )}
              />
              <DataTableLayout
                editability={true}
                changeHandler={e => this.tableChangeHandler(e)}
                tableData={this.props.tabledata.get('table_extrafabric')}
              />
            </div>
            <div className="inline-datatable-conatiner">
              <div>
                <DataTableLayout
                  editability={true}
                  changeHandler={e => this.tableChangeHandler(e)}
                  tableData={this.props.tabledata.get(
                    'table_garmentapplication',
                  )}
                />
                <DataTableLayout
                  editability={true}
                  changeHandler={e => this.tableChangeHandler(e)}
                  tableData={this.props.tabledata.get('table_accessoriesname')}
                />
              </div>
              <div>
                <DataTableLayout
                  editability={true}
                  changeHandler={e => this.tableChangeHandler(e)}
                  tableData={this.props.tabledata.get('table_currency')}
                />
                <DataTableLayout
                  editability={true}
                  changeHandler={(day, modifiers, e) =>
                    this.tableDateChangeHandler(day, modifiers, e)
                  }
                  tableData={this.props.tabledata.get('table_date')}
                />
              </div>
              <DataTableLayout
                editability={true}
                changeHandler={e => this.tableChangeHandler(e)}
                tableData={this.props.tabledata.get('table_price')}
              />
            </div>
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
    onChange: payload => dispatch(actions.onChange(payload)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Table)
