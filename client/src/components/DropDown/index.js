import React, {Component} from "react";
import JsonData from "./csvjson.json";

class Droppp extends Component {
    constructor(props) {
        super(props);
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
        JsonData: JsonData,
        carPrice: this.props.carPrice
        }
    }

    componentDidMount() {

    }
    selectYear(e) {
        console.log(this.state.carPrice)

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
    console.log(trim);
    for (var i = 0; i < trim.length; i++) {
        if (trim[i] === "Sedan") {
            console.log("sedan")
            this.setState({
                carPrice: 8
            })
        } else if (trim[i] === "Wagon") {
            console.log("wagon")
            this.setState({
                carPrice: 6
            })
        } else if (trim[i] === "Convertible") {
            console.log("Convertible")
            this.setState({
                carPrice: 3
            })
        } else if (trim[i] === "Coupe") {
            console.log("Coupe")
            this.setState({
                carPrice: 2
            })
        } else if (trim[i] === "Hatchback") {
            console.log("Hatchback")
            this.setState({
                carPrice: 1
            })
        } else if (trim[i] === "SUV") {
            console.log("suv")
            this.setState({
                carPrice: 15
            })
        } else if (trim[i] === ""){
            console.log("old")
            this.setState({
                carPrice: 30
            })
        } else if (trim[i] === "Minivan") {
            console.log("Minivan");
            this.setState({
                carPrice: 20
            })
        } else if (trim[i] === "Van") {
            console.log("Van")
            this.setState({
                carPrice: 50
            })
        } else if (trim[i] === "Crew") {
            console.log("Crew Cab")
            this.setState({
                carPrice: 21
            })
        } else if (trim[i] === "Extended") {
            console.log("Extended Cab")
            this.setState({
                carPrice: 25
            })
        } else if (trim[i] === "Regular") {
            console.log("Regular Cab")
            this.setState({
                carPrice: 20
            })
        } else if (trim[i] === "Double") {
            console.log("Double Cab")
            this.setState({
                carPrice: 25
            })
        } else if (trim[i] === "SuperCrew") {
            console.log("SuperCrew")
            this.setState({
                carPrice: 27
            })
        } else if (trim[i] === "SuperCab") {
            console.log("SuperCab")
            this.setState({
                carPrice: 27
            })
        } else {
            // console.log("old")
            // this.setState({
            //     carPrice: 30
            // })
        } 
    }
    console.log(this.state.carPrice);
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
                <p>{this.state.carPrice}</p> 
            </div>
        )
    }
}

export default Droppp;