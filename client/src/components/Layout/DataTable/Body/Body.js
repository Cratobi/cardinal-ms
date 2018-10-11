import React, { Fragment } from "react"
// eslint-disable-next-line
import { get } from "immutable"

const SelectOption = props => <option value={props.value}>{props.name}</option>

const tableBody = props => {
  const processOptions = {
    fabricfinishprocessOption: [
      "Open dia",
      "Tube dia",
      "Peach finish",
      "Brush",
      "Tumble dry",
      "Burnout",
      "AOP",
      "Enzyme",
      "Silicon",
      "Heat seat",
      "Light brushed inside-peached outside",
      "Light brush inside",
      "Heavy peach outside",
      "Inside Lt. brush",
      "Topside peached"
    ],
    garmentapplicationOption: [
      "Print",
      "Sequence",
      "Embroidery",
      "Wash",
      "AOP",
      "Re embo",
      "Woven fabric"
    ],
    accessoriesnameOption: [
      "M. label",
      "Size label",
      "Bottom label",
      "Batch label",
      "Han tag",
      "Flag label",
      "Wash care label",
      "Warning label",
      "Price tag",
      "Poly bag",
      "Tissue papper",
      "Leather badge",
      "Security tag",
      "Gum tag",
      "Lock pin",
      "Cartoon",
      "PP belt",
      "Hanger",
      "Silica gel",
      "Care label",
      "Snap button",
      "Ring button",
      "Hang tag with price sticker",
      "Snap (CAP)",
      "Paper board",
      "Blister poly",
      "Elastic",
      "Twill tape",
      "Drawsting",
      "Cartoon sticker",
      "Smile label",
      "Bangladesh label",
      "Additional label",
      "Eylat",
      "Special label",
      "Mesh",
      "Chambray fabric",
      "Herringbone tape",
      "Satin tape",
      "Gross grain tape"
    ]
  }

  return props.tableData.map((data, rowindex) => (
    <tr key={rowindex}>
      {props.tableData
        ? data.map((data, colindex) => {
            // Init
            let cellData = data.get("cellData")
            let [
              colspan,
              rowspan,
              prefix,
              suffix,
              inputPrefix,
              inputSuffix,
              classname
            ] = [null]

            // Handle colspan or rowspan
            if (data.get("colspan")) {
              colspan = data.get("colspan")
            }
            if (data.get("rowspan")) {
              rowspan = data.get("rowspan")
            }

            // Handle prefix or suffix

            if (data.get("prefix")) {
              const sign = data.get("prefix")
              prefix = <span className="span-prefix">{sign}</span>
              inputPrefix = (
                <span
                  className={`span-input-prefix${
                    sign === "BDT" ? "-long" : ""
                  }`}
                >
                  {sign}
                </span>
              )
              classname = "input-prefix"
            }
            if (data.get("suffix")) {
              suffix = <span className="span-suffix">{data.get("suffix")}</span>
              inputSuffix = (
                <span className="span-input-suffix">{data.get("suffix")}</span>
              )
              classname = [classname, "input-suffix"].join(" ")
            }
            if (data.get("className")) {
              return (classname = data.get("className"))
            }

            // Handle editable
            if (props.editability === true && data.get("editable")) {
              // Handle Select element
              if (data.get("CellDataType") === "select") {
                // Select array corresponding to table name

                const optionArray = (() => {
                  switch (props.tableName) {
                    case "fabricfinishprocess":
                      return processOptions.fabricfinishprocessOption
                    case "garmentapplication":
                      return processOptions.garmentapplicationOption
                    case "accessoriesname":
                      return processOptions.accessoriesnameOption
                    default:
                      return null
                  }
                })()

                cellData = (
                  <select
                    className={classname}
                    data-tablename={props.tableName}
                    data-rowindex={rowindex}
                    data-colindex={colindex}
                    onChange={props.changeHandler}
                    value={data.get("cellData")}
                  >
                    <option value="" />
                    {optionArray.map((data, index) => (
                      <SelectOption key={index} value={data} name={data} />
                    ))}
                  </select>
                )
              } else {
                // Handle input element

                cellData = (
                  <Fragment>
                    <div className="input-container">
                      {inputPrefix}
                      <input
                        className={classname}
                        data-tablename={props.tableName}
                        data-rowindex={rowindex}
                        data-colindex={colindex}
                        onChange={props.changeHandler}
                        name={data.get("id")}
                        type={data.get("CellDataType")}
                        title={data.get("cellData")}
                        value={data.get("cellData")}
                      />
                      {inputSuffix}
                    </div>
                  </Fragment>
                )
              }
            } else {
              cellData = (
                <div
                  className={
                    "filled-txt" + (data.get("id") ? " auto-filled-txt" : "")
                  }
                  // onWheel={e => props.wheel(e)} // To control horizental scroll by default
                >
                  {prefix}
                  {cellData}
                  {suffix}
                </div>
              )
            }
            // Return table column

            return (
              <td colSpan={colspan} rowSpan={rowspan} key={colindex}>
                {cellData}
              </td>
            )
          })
        : null}
    </tr>
  ))
}

export default tableBody
