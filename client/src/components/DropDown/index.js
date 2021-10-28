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
    }
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
                    return models.indexOf(elem) === pos;
            });
            this.setState({
                carModels: newArray
            },)
            })
    }

selectModel(e) {
    this.setState({selectModel: e.target.value});
    const filter = this.state.DDL2.filter(x=>x.model_make_id === e.target.value)

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
    this.setState({selectMake: e.target.value});
    const filter = this.state.DDL3.filter(x=>x.model_name === e.target.value)
    this.setState({DDL4: filter}, () => {
        var trims = [];
        for (var i = 0; i < this.state.DDL4.length; i++) {
            trims.push(this.state.DDL4[i].model_trim)
        }
        var newArray = trims.filter(function(elem, pos) {
            return trims.indexOf(elem) === pos;;
    });
    this.setState({carTrims: newArray.sort()})

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