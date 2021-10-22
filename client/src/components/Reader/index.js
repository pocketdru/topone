// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';
// import DataTable from 'react-data-table-component';

// function CarsData() {
//     const [columns, setColumns] = useState([]);
//     const [data, setData] = useState([]);
   
//   // process CSV data
//   const processData = dataString => {
//     const dataStringLines = dataString.split(/\r\n|\n/);
//     const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
 
//     const list = [];
//     for (let i = 1; i < dataStringLines.length; i++) {
//       const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
//       if (headers && row.length == headers.length) {
//         const obj = {};
//         for (let j = 0; j < headers.length; j++) {
//           let d = row[j];
//           if (d.length > 0) {
//             if (d[0] == '"')
//               d = d.substring(1, d.length - 1);
//             if (d[d.length - 1] == '"')
//               d = d.substring(d.length - 2, 1);
//           }
//           if (headers[j]) {
//             obj[headers[j]] = d;
//           }
//         }
 
//         // remove the blank rows
//         if (Object.values(obj).filter(x => x).length > 0) {
//           list.push(obj);
//         }
//       }
//     }
 
//     // prepare columns list from headers
//     const columns = headers.map(c => ({
//       name: c,
//       selector: c,
//     }));
 
//     setData(list);
//     setColumns(columns);
//   }
 
//   // handle file upload
//   const handleFileUpload = e => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       /* Parse data */
//       const bstr = evt.target.result;
//       console.log(bstr);
//       const wb = XLSX.read(bstr, { type: 'binary' });
//       /* Get first worksheet */
//       const wsname = wb.SheetNames[0];
//       const ws = wb.Sheets[wsname];
//       /* Convert array of arrays */
//       const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
//       processData(data);
//     //   console.log(data);
//     };
//     reader.readAsBinaryString(file);
//   }
//     return (
//         <div>
//           <h3>Read CSV file in React - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
//           <input
//             type="file"
//             accept=".csv,.xlsx,.xls"
//             onChange={handleFileUpload}
//           />
//           <DataTable
//             pagination
//             highlightOnHover
//             columns={columns}
//             data={data}
//           />
//         </div>
//       );
// }

// export default CarsData;

import React, {Component} from "react";
import JsonData from "./csvjson.json";

class Droppp extends Component {
    constructor() {
        super();
        this.state = { 
        DDL1: [],
        DDL2: [],
        selectddl: ""
        }
    }

    componentDidMount() {
        this.setState({
            DDL1: [
                {model: "alfa-romeo", DDL2: ["Saloon", "Berlina", "Fregate", "GT Coupe"]},
                {model: "fiat", DDL2: ["Doblo", "Brava", "Panda", "Grand Break"]},
                {model: "ford", DDL2: ["Fiesta", "Probe", "Mustang", "Capri"]}
            ] 
        })
    }
    selectDDL(e) {
        this.setState({selectddl: e.target.value});
        this.setState({DDL2: this.state.DDL1.find( x=> x.model === e.target.value).DDL2})
    }

    render() {
        return (
            <div>
                <select value={this.state.selectddl} onChange={this.selectDDL.bind(this)}>
                    <option>Select model</option>
                    {this.state.DDL1.map(x=> {
                        return <option key={x.model}>{x.model}</option>
                    })}
                </select>
                <select>
                <option >Select make</option>
                    {this.state.DDL2.map(x=> {
                        return <option key={x}>{x}</option>
                    })}
                </select>
            </div>
        )
    }
}

export default Droppp;