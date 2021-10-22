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
        // const JsonData = JsonData;
        // console.log(JsonData);
        function findArrayElementByTitle(JsonData, model_make_id) {
            return JsonData.find((element) => {
              return element.model_make_id === model_make_id;
            })
          }
        // findArrayElementByTitle(JsonData, ()=> {
        //     console.log(element.model_make_id);
        // }); 
        
        var years = [];
        for (var i=2022; i>1941; i--) {
            years.push(i);
        } 
        this.setState({
            DDL1: [
                {"year": years, DDL2:
                [
                    {}
                ]
            }
            ], 
        }, 
            () => {
            console.log(this.state.DDL1[0].year);
        })
   //     console.log(JsonData.find(model_year => model_year > 2023   ));

    //     const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

    //     let x = (names) => names.filter((v,i) => names.indexOf(v) === i)
    //     x(names); 
    //     this.setState({
    //         DDL1: [
    //             {year: "2021", DDL2: 
    //             [
    //                 {model: "Audi", DDL3: ["Q3", "A3", "A3 e-tron", "S3"]},
    //                 {model: "BMW", DDL3: ["X4", "3 Series", "X1", "X2"]},
    //                 {model: "Mercedes-Benz", DDL3: ["C-Class", "S-Class", "CLA-Class", "GLK-Class"]},
    //                 {model: "Kia", DDL3: ["Optima Hybrid", "Sedona", "Rio", "Rio X"]},

    //             ]}, 
    //             {year: "2020", DDL2:
    //             [
    //                 {model: "Audi", DDL3: ["Q3", "Q5", "A3 e-tron", "A8"]},
    //                 {model: "BMW", DDL3: ["M3", "M4", "X4", "X2"]},
    //                 {model: "Mercedes-Benz", DDL3: ["C-Class", "GLA-Class", "CLA-Class", "GLK-Class"]},
    //                 {model: "Kia", DDL3: ["K900", "Optima", "Rio X"]},
    //             ]},
    //             {year: "2019", DDL2: 
    //             [
    //                 {model: "Audi", DDL3: ["S8", "Q5", "A3 e-tron", "A4"]},
    //                 {model: "ford", DDL3: ["fusion", "Expedition", "Explorer", "f-150"]},
    //                 {model: "Chevrolet", DDL3: ["Malibu", "Suburban", "impala", "trax"]},
    //                 {model: "Kia", DDL3: ["Forte", "Optima", "Rio X"]},
    //             ]},
    //             {year: "2006", DDL2: 
    //             [
    //                 {model: "citroen", DDL3: ["C8", "C2", "C4", "C3"]},
    //                 {model: "mercedes-benz", DDL3: ["S", "C", "E", "CL"]},
    //                 {model: "acura", DDL3: ["RSX", "TL", "RL", "MDX"]},
    //             ]}
    //         ]
    //     })
    //     console.log(this.state.DDL1[0]);
    // }
    // selectYear(e) {
    //     console.log(e.target.value);
    //     this.setState({selectYear: e.target.value});
    //     this.setState({DDL2: this.state.DDL1.find( x=> x.year === e.target.value).DDL2}, () => {
    //         for (var i = 0; i < this.state.DDL2.length; i++) {
    //             // console.log(this.state.DDL2[i].model)
    //         }
    //     })
    // }
    // selectModel(e) {
    //     this.setState({selectModel: e.target.value});
    //     this.setState({DDL3: this.state.DDL2.find( x=> x.model === e.target.value).DDL3}, () => {
    //         for (var i = 0; i < this.state.DDL3.length; i++) {
    //             // console.log(this.state.DDL3[i])
    //         }
    //     })
    }
    

    render() {
        return (
            <div>
                 {/* <select value={this.state.selectYear} onChange={this.selectYear.bind(this)}>
                    <option>Select Year</option>
                    {this.DDL1.map(x=> {
                        return <option key={x}>{x}</option>
                    })}
                </select> */}
              {/*  <select value={this.state.selectModel} onChange={this.selectModel.bind(this)}>
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
                </select> */}
            </div>
        )
    }
}

export default Droppp;