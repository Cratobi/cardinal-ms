// eslint-disable-next-line
import { fromJS, set } from "immutable"

const initialState = fromJS({
  buyers: ["JBC", "RamJungle"],
  orders: null,
  order: null,
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
          { editable: false, cellType: "text", cellData: "Total" }
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
            cellData: "Total"
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
            cellData: "Total cost of accessories"
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
            cellData: "Total Yarn"
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
            cellData: "Total yarn cost"
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
            cellData: "Total"
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_BUYERS":
      return state.set("buyers", fromJS(action.payload))
    case "SAVE_ORDERS":
      return state.set("orders", fromJS(action.payload))
    case "SAVE_ORDER":
      return state.set("order", fromJS(action.payload))
    default:
      return state
  }
}

export default reducer
