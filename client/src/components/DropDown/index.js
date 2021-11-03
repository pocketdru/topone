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
        selectTrim: "",
        carModels: [],
        carMakes: [],
        carTrims: [],
        JsonData: JsonData
        }
    }

    componentDidMount() {
    }
    selectYear(e) {
        var year = e.target.value
        this.setState({selectYear: e.target.value,
                        selectModel: "",
                        selectMake: "",
                        selectTrim: "",
                        DDL2: [],
                        DDL3: [],
                        DDL4: [],
                        carModels: [],
                        carMakes: [],
                        carTrims: []
                    }
            );
            const filter = this.state.JsonData.filter(x=>x.model_year == year)
            this.setState({DDL2: filter}, () => {
                var models = [];
                for (var i = 0; i < this.state.DDL2.length; i++) {
                    models.push(this.state.DDL2[i].model_make_id)
                }
                var newArray = models.filter(function(elem, pos) {
                    return models.indexOf(elem) === pos;
            });
            this.setState({
                carModels: newArray.sort()
            },)
            })
    }

selectModel(e) {
    this.setState({
        selectModel: e.target.value,
        selectMake: "",
        selectTrim: "",
        DDL3: [],
        DDL4: [],
        carTrims: []
    });
    const filter = this.state.DDL2.filter(x=>x.model_make_id == e.target.value)

    this.setState({DDL3: filter}, () => {
    var makes = [];
    for (var i = 0; i < this.state.DDL3.length; i++) {
        makes.push(this.state.DDL3[i].model_name)
    }

    var newArray = makes.filter(function(elem, pos) {
        return makes.indexOf(elem) === pos;
    });
    this.setState({carMakes: newArray.sort()})
});
}

selectMake(e) {
    this.setState({
        selectMake: e.target.value,
        selectTrim: "",
        DDL4: [],
        carTrims: []
    });
    const filter = this.state.DDL3.filter(x=>x.model_name == e.target.value)
    console.log(filter);
    this.setState({DDL4: filter}, () => {
        console.log(this.state.DDL4);
        var trims = [];
        for (var i = 0; i < this.state.DDL4.length; i++) {
            trims.push(this.state.DDL4[i].model_trim)
        }
        var newArray = trims.filter(function(elem, pos) {
            return trims.indexOf(elem) === pos;;
    });
    this.setState({carTrims: newArray.sort()}, ()=> {
        console.log(this.state.carTrims)
    })

});
}
selectTrim(e) {
    console.log(e.target.value)
    this.setState({selectTrim: e.target.value});
    console.log(this.state.DDL4);
    var trim = e.target.value.split(" ");
    var percent;
    console.log(trim);
    for (var i = 0; i < trim.length; i++) {
        if (trim[i] === "Sedan") {
            console.log("sedan")
            percent = 8;
        } else if (trim[i] === "Wagon") {
            console.log("wagon")
        } else if (trim[i] === "Convertible") {
            console.log("Convertible")
        } else if (trim[i] === "Coupe") {
            console.log("Coupe")
        } else if (trim[i] === "Hatchback") {
            console.log("Hatchback")
        } else if (trim[i] === "SUV") {
            console.log("suv")
        } else if (trim[i] === ""){
            console.log("old")
        } else if (trim[i] === "Minivan") {
            console.log("Minivan");
        } else if (trim[i] === "Van") {
            console.log("Van")
        } else if (trim[i] === "Crew") {
            console.log("Crew Cab")
        } else if (trim[i] === "Extended") {
            console.log("Extended Cab")
        } else if (trim[i] === "Regular") {
            console.log("Regular Cab")
        }
    }
}
render() { 
    var years = [];
    for (var i=2022; i>1940; i--) {
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
                <select value={this.state.selectTrim} onChange={this.selectTrim.bind(this)}>
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