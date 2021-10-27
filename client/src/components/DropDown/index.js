import React, {Component} from "react";
import JsonData from "./csvjson.json";

class Droppp extends Component {
    constructor() {
        super();
        this.state = { 
        DDL1: [],
        DDL2: [],
        DDL3: [],
        DDL4: [],
        selectYear: "",
        selectModel: "",
        selectMake: "",
        carModels: [],
        carMakes: [],
        carTrims: [],
        JsonData: JsonData
        }
    }

    componentDidMount() {
        // const JsonData = JsonData;
        console.log(JsonData);
        function findArrayElementByTitle(JsonData, model_make_id) {
            return JsonData.find((element) => {
              return element.model_make_id === model_make_id;
            })
          }
        // findArrayElementByTitle(JsonData, ()=> {
        //     console.log(element.model_make_id);
        // }); 
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
    }
    // JsonData.filter(x=>x.model_year === 2022 && x.model_make_id === "Ram")
    selectYear(e) {
        var year = e.target.value
        this.setState({selectYear: e.target.value});
            const filter = this.state.JsonData.filter(x=>x.model_year == year)
            this.setState({DDL2: filter}, () => {
                var models = [];
                for (var i = 0; i < this.state.DDL2.length; i++) {
                    models.push(this.state.DDL2[i].model_make_id)
                }
                var newArray = models.filter(function(elem, pos) {
                    return models.indexOf(elem) == pos;
            });
            this.setState({
                carModels: newArray
            }, () => {
                console.log(this.state.carModels)
            })
            })
    }

selectModel(e) {
    this.setState({selectModel: e.target.value});
    const filter = this.state.DDL2.filter(x=>x.model_make_id == e.target.value)

    this.setState({DDL3: filter}, () => {
    console.log(this.state.DDL3);
    var makes = [];
    for (var i = 0; i < this.state.DDL3.length; i++) {
        makes.push(this.state.DDL3[i].model_name)
    }

    var newArray = makes.filter(function(elem, pos) {
        return makes.indexOf(elem) == pos;
        // console.log(this.state.selectYear, this.state.selectModel);
        // const filter = this.state.DDL2.filter(x=>x.model_make_id === e.target.value);
        // console.log(filter[0].model_name);
    });
    console.log(newArray);
    this.setState({carMakes: newArray.sort()})
});
}

selectMake(e) {
    this.setState({selectMake: e.target.value});
    const filter = this.state.DDL3.filter(x=>x.model_name == e.target.value)
    console.log(filter);
    this.setState({DDL4: filter}, () => {
        console.log(this.state.DDL4);
        var trims = [];
        for (var i = 0; i < this.state.DDL4.length; i++) {
            trims.push(this.state.DDL4[i].model_trim)
        }
        var newArray = trims.filter(function(elem, pos) {
            return trims.indexOf(elem) == pos;
            // console.log(this.state.selectYear, this.state.selectModel);
            // const filter = this.state.DDL2.filter(x=>x.model_make_id === e.target.value);
            // console.log(filter[0].model_name);
    });
    console.log(newArray);
    this.setState({carTrims: newArray.sort()}, ()=> {
        console.log(this.state.carTrims);
    })
    // for (var i = 0; i < this.state.DDL3.length; i++) {
    //     console.log(this.state.DDL3[i].model_trim);
    // }

});
}
render() {
    var years = [];
    for (var i=2022; i>1941; i--) {
        years.push(i);
    } 
        return (
            <div>
                 <select value={this.state.selectYear} onChange={this.selectYear.bind(this)}>
                    <option>Select Year</option>
                    {years.map(x=> {
                        return <option key={x}>{x}</option>
                    })}
                </select>
               <select value={this.state.selectModel} onChange={this.selectModel.bind(this)}>
                <option>Select model</option>
                    {this.state.carModels.map(x=> {
                        return <option key={x}>{x}</option>
                    })}
                </select> 
                <select value={this.state.selectMake} onChange={this.selectMake.bind(this)}>
                <option>Select Make</option>
                    {this.state.carMakes.map(x=> {
                        return <option key={x}>{x}</option>
                    })}
                </select>
                <select>
                <option>Select trim</option>
                    {this.state.carTrims.map(x=> {
                        return <option key={x}>{x}</option>
                    })}
                </select>  
            </div>
        )
    }
}

export default Droppp;