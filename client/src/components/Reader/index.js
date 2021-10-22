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
        DDL3: [],
        selectYear: "",
        selectModel: ""
        }
    }

    componentDidMount() {
        this.setState({
            DDL1: [
                {year: "2021", DDL2: 
                [
                    {model: "Audi", DDL3: ["Q3", "A3", "A3 e-tron", "S3"]},
                    {model: "BMW", DDL3: ["X4", "3 Series", "X1", "X2"]},
                    {model: "Mercedes-Benz", DDL3: ["C-Class", "S-Class", "CLA-Class", "GLK-Class"]},
                    {model: "Kia", DDL3: ["Optima Hybrid", "Sedona", "Rio", "Rio X"]},

                ]}, 
                {year: "2020", DDL2:
                [
                    {model: "Audi", DDL3: ["Q3", "Q5", "A3 e-tron", "A8"]},
                    {model: "BMW", DDL3: ["M3", "M4", "X4", "X2"]},
                    {model: "Mercedes-Benz", DDL3: ["C-Class", "GLA-Class", "CLA-Class", "GLK-Class"]},
                    {model: "Kia", DDL3: ["K900", "Optima", "Rio X"]},
                ]},
                {year: "2019", DDL2: 
                [
                    {model: "Audi", DDL3: ["S8", "Q5", "A3 e-tron", "A4"]},
                    {model: "ford", DDL3: ["fusion", "Expedition", "Explorer", "f-150"]},
                    {model: "Chevrolet", DDL3: ["Malibu", "Suburban", "impala", "trax"]},
                    {model: "Kia", DDL3: ["Forte", "Optima", "Rio X"]},
                ]},
                {year: "2006", DDL2: 
                [
                    {model: "citroen", DDL3: ["C8", "C2", "C4", "C3"]},
                    {model: "mercedes-benz", DDL3: ["S", "C", "E", "CL"]},
                    {model: "acura", DDL3: ["RSX", "TL", "RL", "MDX"]},
                ]}
            ]
        })
    }
    selectYear(e) {
        this.setState({selectYear: e.target.value});
        this.setState({DDL2: this.state.DDL1.find( x=> x.year === e.target.value).DDL2}, () => {
            for (var i = 0; i < this.state.DDL2.length; i++) {
                console.log(this.state.DDL2[i].model)
            }
        })
    }
    selectModel(e) {
        this.setState({selectModel: e.target.value});
        this.setState({DDL3: this.state.DDL2.find( x=> x.model === e.target.value).DDL3}, () => {
            for (var i = 0; i < this.state.DDL3.length; i++) {
                console.log(this.state.DDL3[i])
            }
        })
    }
    

    render() {
        return (
            <div>
                <select value={this.state.selectYear} onChange={this.selectYear.bind(this)}>
                    <option>Select Year</option>
                    {this.state.DDL1.map(x=> {
                        return <option key={x.year}>{x.year}</option>
                    })}
                </select>
                <select value={this.state.selectModel} onChange={this.selectModel.bind(this)}>
                <option>Select model</option>
                    {this.state.DDL2.map(x=> {
                        return <option key={x.model}>{x.model}</option>
                    })}
                </select>
                <select>
                <option>Select Make</option>
                    {this.state.DDL3.map(x=> {
                        return <option key={x}>{x}</option>
                    })}
                </select>
            </div>
        )
    }
}

export default Droppp;