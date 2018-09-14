// eslint-disable-next-line
import { fromJS, getIn, set, setIn, toJS } from "immutable"

const initialState = fromJS({
  drafts: null,
  metadata: null,
  tabledata: {
    table_measurments: {
      tablename: "measurments",
      tableheader: [],
      tablebody: [
        [
          { editable: false, cellType: "text", cellData: "SIZE" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "BODY LENGTH"
          },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "SLEEVE LENGTH"
          },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" }
        ],
        [
          {
            editable: true,
            cellType: "type",
            cellData: "1/2 CHEST"
          },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" }
        ]
      ]
    },
    table_colourandcompotision: {
      tablename: "colourandcompotision",
      tableheader: [],
      tablebody: [
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Colour"
          },
          {
            editable: false,
            cellType: "text",
            cellData: "Composition"
          },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "text", cellData: "Count" }
        ],
        [
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" }
        ],
        [
          { editable: false, cellType: "text", cellData: "ad23q" },
          { editable: false, cellType: "text", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" }
        ],
        [
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" }
        ],
        [
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" }
        ],
        [
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" }
        ],
        [
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" }
        ],
        [
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" }
        ],
        [
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "text", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Count"
          },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" },
          { editable: false, cellType: "number", cellData: "" }
        ]
      ]
    },
    table_extrafabric: {
      tablename: "extrafabric",
      tableheader: [
        { cellData: "Contrast Color" },
        { cellData: "Construction" },
        { cellData: "Composition" },
        { cellData: "Fabric Weight" },
        { cellData: "Qty" }
      ],
      tablebody: [
        [
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" }
        ],
        [
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" }
        ],
        [
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" }
        ],
        [
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" }
        ],
        [
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" }
        ],
        [
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" }
        ],
        [
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          { editable: true, cellType: "number", cellData: "" }
        ]
      ]
    },
    table_fabricfinishprocess: {
      tablename: "fabricfinishprocess",
      tableheader: [],
      tablebody: [
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "text", cellData: "Open" }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "text", cellData: "YES" }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "text", cellData: "YES" }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          {
            editable: true,
            cellType: "text",
            cellData: "PRACH FINISH"
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "text", cellData: "" }
        ]
      ]
    },
    table_garmentapplication: {
      tablename: "garmentapplication",
      tableheader: [
        { cellData: "Description" },
        { cellData: "Excess" },
        { cellData: "Price" }
      ],
      tablebody: [
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ]
      ]
    },
    table_accessoriesname: {
      tablename: "accessoriesname",
      tableheader: [
        { cellData: "Description" },
        { cellData: "Excess" },
        { cellData: "Price" }
      ],
      tablebody: [
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: true, cellType: "select", cellData: "" },
          { editable: true, cellType: "number", cellData: "" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Count cost of accessories"
          },
          {
            editable: false,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ]
      ]
    },
    table_currency: {
      tablename: "currency",
      tableheader: [],
      tablebody: [
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Exchange Rate (BDT)"
          },
          { editable: true, cellType: "number", cellData: "" }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Count Yarn"
          },
          { editable: true, cellType: "number", cellData: "" }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Body consumption"
          },
          { editable: true, cellType: "number", cellData: "" }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Rib consumption"
          },
          { editable: true, cellType: "number", cellData: "" }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Lyca % Body"
          },
          {
            editable: true,
            sufix: "%",
            cellType: "number",
            cellData: ""
          },
          { editable: false, cellType: "number", cellData: "" }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Lyca % Rib"
          },
          {
            editable: true,
            sufix: "%",
            cellType: "number",
            cellData: ""
          },
          { editable: false, cellType: "number", cellData: "" }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "RIB AOP QTY"
          },
          { editable: true, cellType: "number", cellData: "" }
        ]
      ]
    },
    table_price: {
      tablename: "price",
      tableheader: [
        { cellData: "Particular" },
        { cellData: "Price" },
        { cellData: "Value" },
        { cellData: "Per Pcs" }
      ],
      tablebody: [
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Count yarn cost"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Body knitting cost"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Rib knitting cost"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Dyeing cost"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Lycra cost"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Pitch finished cost"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Brush finished cost"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Tumble dry"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: false, cellType: "text", cellData: "AOP" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: false, cellType: "text", cellData: "Print" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Sequence"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Lather patch"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Embroidery"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Accessories"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          { editable: false, cellType: "text", cellData: "CM" },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Freight"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Commercial cost"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Extra cost 1"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Extra cost 2"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Extra cost 3"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Buying commotion"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            colspan: "2",
            cellType: "text",
            cellData: "Count"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Order price (Colour)"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: false,
            cellType: "text",
            cellData: "Difference"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Order price (White)"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: false,
            cellType: "text",
            cellData: "Difference"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ],
        [
          {
            editable: false,
            cellType: "text",
            cellData: "Order price (Black)"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          },
          {
            editable: false,
            cellType: "text",
            cellData: "Difference"
          },
          {
            editable: true,
            prefix: "$",
            cellType: "number",
            cellData: ""
          }
        ]
      ]
    }
  }
})

const sizeHeaderSyncer = (state, colindex, value) => {
  const newstate = state.setIn(
    [
      "tabledata",
      "table_colourandcompotision",
      "tablebody",
      0,
      colindex + 1,
      "cellData"
    ],
    value
  )
  return state.set("tabledata", newstate.get("tabledata"))
}

const compositionSyncer = (state, rowindex, colindex, value, prev_val) => {
  const newstate_footer = state.updateIn(
    [
      "tabledata",
      "table_colourandcompotision",
      "tablebody",
      9,
      colindex - 1,
      "cellData"
    ],
    old_val => +old_val + (+value - +prev_val)
  )
  const newstate_right = newstate_footer.updateIn(
    [
      "tabledata",
      "table_colourandcompotision",
      "tablebody",
      rowindex,
      12,
      "cellData"
    ],
    old_val => +old_val + (+value - +prev_val)
  )
  const newstate_total = newstate_right.updateIn(
    ["tabledata", "table_colourandcompotision", "tablebody", 9, 11, "cellData"],
    old_val => +old_val + (+value - +prev_val)
  )

  return state.set("tabledata", newstate_total.get("tabledata"))
}

const accessoriesSyncer = (state, value, prev_val) => {
  const newstate = state.updateIn(
    ["tabledata", "table_accessoriesname", "tablebody", 22, 1, "cellData"],
    old_val =>
      "$ " + (Number(old_val.substr(1)) + (Number(value) - Number(prev_val)))
  )

  return state.set("tabledata", newstate.get("tabledata"))
}

const currencySyncer = (state, rowindex) => {
  const consumption_total = state.getIn([
    "tabledata",
    "table_colourandcompotision",
    "tablebody",
    9,
    11,
    "cellData"
  ])

  if (rowindex === 2 || rowindex === 4) {
    const currency_bodyconsumption = state.getIn([
      "tabledata",
      "table_currency",
      "tablebody",
      2,
      1,
      "cellData"
    ])
    const lycra_body_percent =
      state.getIn([
        "tabledata",
        "table_currency",
        "tablebody",
        4,
        1,
        "cellData"
      ]) / 100

    const lycra_body =
      Math.round(
        (+consumption_total / 12) *
          +currency_bodyconsumption *
          +lycra_body_percent *
          100
      ) / 100

    const newstate = state.setIn(
      ["tabledata", "table_currency", "tablebody", 4, 2, "cellData"],
      lycra_body
    )

    return state.set("tabledata", newstate.get("tabledata"))
  } else if (rowindex === 3 || rowindex === 5) {
    const currency_ribconsumption = state.getIn([
      "tabledata",
      "table_currency",
      "tablebody",
      3,
      1,
      "cellData"
    ])
    const lycra_rib_percent =
      state.getIn([
        "tabledata",
        "table_currency",
        "tablebody",
        5,
        1,
        "cellData"
      ]) / 100

    const lycra_body =
      Math.round(
        (+consumption_total / 12) *
          +currency_ribconsumption *
          +lycra_rib_percent *
          100
      ) / 100

    const newstate = state.setIn(
      ["tabledata", "table_currency", "tablebody", 5, 2, "cellData"],
      lycra_body
    )

    return state.set("tabledata", newstate.get("tabledata"))
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_DRAFTS":
      return state.set("drafts", fromJS(action.payload))
    case "SAVE_DRAFT_METADATA":
      return state.set("metadata", fromJS(action.payload))
    case "SAVE_DRAFT_TABLEDATA":
      return state.set("tabledata", fromJS(action.payload))
    case "RESET_DRAFT_TABLEDATA":
      return state.set("tabledata", initialState.get("tabledata"))
    case "SYNCTABLES":
      const rowindex = Number(action.payload.rowindex)
      const colindex = Number(action.payload.colindex)
      const tablename = action.payload.tablename
      const value = action.payload.value

      const prev_val = state.getIn([
        "tabledata",
        "table_" + tablename,
        "tablebody",
        rowindex,
        colindex,
        "cellData"
      ])

      const newstate = state.setIn(
        [
          "tabledata",
          "table_" + tablename,
          "tablebody",
          rowindex,
          colindex,
          "cellData"
        ],
        value
      )

      if (
        tablename === "measurments" &&
        rowindex === 0 &&
        0 <= colindex <= 10
      ) {
        return sizeHeaderSyncer(newstate, colindex, value)
      } else if (
        tablename === "colourandcompotision" &&
        1 <= rowindex <= 8 &&
        2 <= colindex <= 11
      ) {
        return compositionSyncer(newstate, rowindex, colindex, value, prev_val)
      } else if (
        tablename === "accessoriesname" &&
        0 <= rowindex <= 21 &&
        colindex === 2
      ) {
        return accessoriesSyncer(newstate, value, prev_val)
      } else if (tablename === "currency") {
        return currencySyncer(newstate, rowindex)
      } else {
        return state.set("tabledata", newstate.get("tabledata"))
      }
    default:
      return state
  }
}

export default reducer
