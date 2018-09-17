import React from "react"
// eslint-disable-next-line
import { get } from "immutable"

const SelectOption = props => <option value={props.value}>{props.name}</option>

const tableBody = props => {
  const fabricfinishprocessOption = [
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
  ]
  const garmentapplicationOption = [
    "Print",
    "Sequence",
    "Embroidery",
    "Wash",
    "AOP",
    "Re embo",
    "Woven fabric"
  ]
  const accessoriesnameOption = [
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

  return props.tableData.map((data, rowindex) => (
    <tr key={rowindex}>
      {props.tableData
        ? data.map((data, colindex) => {
            // Init

            let cellData = data.get("cellData")
            let [colspan, rowspan, prefix, suffix, classname] = [null]

            // Handle editable
            if (props.editability === "true" && data.get("editable")) {
              // Handle Select element
              if (data.get("cellType") === "select") {
                let options = null

                // Select array corresponding to table name

                const optionArray = (() => {
                  switch (props.tableName) {
                    case "fabricfinishprocess":
                      return fabricfinishprocessOption
                    case "garmentapplication":
                      return garmentapplicationOption
                    case "accessoriesname":
                      return accessoriesnameOption
                    default:
                      return null
                  }
                })()

                options = optionArray.map((data, index) => (
                  <SelectOption key={index} value={data} name={data} />
                ))
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
                    {options}
                  </select>
                )
              } else {
                // Handle input element

                cellData = (
                  <input
                    className={classname}
                    data-tablename={props.tableName}
                    data-rowindex={rowindex}
                    data-colindex={colindex}
                    onChange={props.changeHandler}
                    name={data.get("id")}
                    type={data.get("cellType")}
                    value={data.get("cellData")}
                  />
                )
              }
            }

            // Handle colspan or rowspan

            if (data.get("colspan")) {
              colspan = data.get("colspan")
            }
            if (data.get("rowspan")) {
              rowspan = data.get("rowspan")
            }

            // Handle prefix or suffix

            if (data.get("prefix")) {
              prefix = <span className="span-prefix">{data.get("prefix")}</span>
              classname = "input-prefix"
            }
            if (data.get("suffix")) {
              suffix = <span className="span-suffix">{data.get("suffix")}</span>
              classname = "input-suffix"
            }
            if (data.get("className")) {
              return (classname = data.get("className"))
            }
            // Return table column

            return (
              <td
                className={classname}
                colSpan={colspan}
                rowSpan={rowspan}
                key={colindex}
              >
                {prefix}
                {cellData}
                {suffix}
              </td>
            )
          })
        : null}
    </tr>
  ))
}

export default tableBody
