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
        specificationCarPrice: null,
        JsonData: JsonData,
        carPrice: this.props.carPrice,
        modelPrice: null,
        makePrice: null
        }
    }
    selectYear(e) {
        console.log(this.state.carPrice)

        var year = e.target.value
        if (year == 2022) {
            this.setState({
                specificationCarPrice: 70
            }, () => {
                console.log(this.state.specificationCarPrice);
            })
        } else if (year < 2022 && year > 2014) {
            this.setState({
                specificationCarPrice: 30
            }, () => {
                console.log(this.state.specificationCarPrice);
            })
        } else if (year < 2016 && year > 2009 ) {
            this.setState({
                specificationCarPrice: 15
            }, () => {
                console.log(this.state.specificationCarPrice);
            })
        } else if (year < 2010 && year > 1999) {
            this.setState({
                specificationCarPrice: 10
            }, () => {
                console.log(this.state.specificationCarPrice);
            })
        } else if (year < 2000 && year >= 1980 ) {
            this.setState({
                specificationCarPrice: 15
            }, () => {
                console.log(this.state.specificationCarPrice);
            })
        } else if (year < 1980 && year >= 1960) {
            this.setState({
                specificationCarPrice: 50
            }, () => {
                console.log(this.state.specificationCarPrice);
            })
        } else if (year < 1960) {
            this.setState({
                specificationCarPrice: 70
            }, () => {
                console.log(this.state.specificationCarPrice);
            })
        }
        this.setState({selectYear: e.target.value,
                        selectModel: "",
                        selectMake: "",
                        selectTrim: "",
                        DDL2: [],
                        DDL3: [],
                        DDL4: [],
                        carModels: [],
                        carMakes: [],
                        carTrims: [],
                        carPrice: 0
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
        selectTrim: "",
        DDL3: [],
        DDL4: [],
        carTrims: [],
        specificationCarPrice: this.state.specificationCarPrice - this.state.modelPrice - this.state.makePrice,
        modelPrice: 0,
        makePrice: 0,
        carPrice: null
    }) 
    if (e.target.value.toLowerCase() === "bentley" || e.target.value.toLowerCase() === "bugatti" || e.target.value.toLowerCase() === "ferrari" || e.target.value.toLowerCase() === "lamborghini" || e.target.value.toLowerCase() === "maserati" || e.target.value.toLowerCase() === "mclaren" || e.target.value.toLowerCase() === "rolls-royce" || e.target.value.toLowerCase() === "koenigsegg" || e.target.value.toLowerCase() === "maybach") {
        console.log(e.target.value); 
        this.setState({
            modelPrice: 200
        }, () => {
            this.setState({
                specificationCarPrice: this.state.specificationCarPrice + this.state.modelPrice
            }, () => {
                console.log(this.state.specificationCarPrice);
            })
        })

    } else if (e.target.value.toLowerCase() === "bmw" || e.target.value.toLowerCase() === "cadillac" || e.target.value.toLowerCase() === "infiniti" || e.target.value.toLowerCase() === "jaguar" || e.target.value.toLowerCase() === "land rover" || e.target.value.toLowerCase() === "lexus" || e.target.value.toLowerCase() === "mercedes-benz" || e.target.value.toLowerCase() === "porsche") {
        console.log(e.target.value); 
        this.setState({
            modelPrice: 70
        }, () => {
            this.setState({
                specificationCarPrice: this.state.specificationCarPrice + this.state.modelPrice
            }, () => {
                console.log(this.state.specificationCarPrice);
            })
        })
    }
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
        carTrims: [],
        specificationCarPrice: this.state.specificationCarPrice - this.state.makePrice,
        makePrice: 0,
        carPrice: null
    });
    console.log(e.target.value);
    if (e.target.value.toLowerCase() === "nsx" || e.target.value.toLowerCase() === "4c" || e.target.value.toLowerCase() === "8c competizione" || e.target.value.toLowerCase() === "atom" || e.target.value.toLowerCase() === "db7" || e.target.value.toLowerCase() === "db9" || e.target.value.toLowerCase() === "dbs" || e.target.value.toLowerCase() === "one-77" || e.target.value.toLowerCase() === "rapide" || e.target.value.toLowerCase() === "vanquish" || e.target.value.toLowerCase() === "vantage" || e.target.value.toLowerCase() === "r8" || e.target.value.toLowerCase() === "tt" || e.target.value.toLowerCase() === "r8" || e.target.value.toLowerCase() === "i8" || e.target.value.toLowerCase() === "m8" || e.target.value.toLowerCase() === "z3" || e.target.value.toLowerCase() === "z8" || e.target.value.toLowerCase() === "gt-r" || e.target.value.toLowerCase() === "gt-r" ) {
        console.log(e.target.value); 
        this.setState({
            makePrice: 200
        }, () => {
            this.setState({
                specificationCarPrice: this.state.specificationCarPrice + this.state.makePrice
            }, () => {
                console.log(this.state.specificationCarPrice);
            })
        })
    } else if (e.target.value.toLowerCase() === "m5" || e.target.value.toLowerCase() === "m3") {
        console.log(e.target.value); 
        this.setState({
            makePrice: 50
        }, () => {
            this.setState({
                specificationCarPrice: this.state.specificationCarPrice + this.state.makePrice
            }, () => {
                console.log(this.state.specificationCarPrice);
            })
        })
    }
    const filter = this.state.DDL3.filter(x=>x.model_name == e.target.value)
    this.setState({DDL4: filter}, () => {
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
    this.setState({
        selectTrim: e.target.value,
        carPrice: null

    }, () => {
        for (var i = 0; i < trim.length; i++) {
            if (trim[i] === "Sedan") {
                console.log("sedan")
                console.log(this.state.carPrice);
                this.setState({
                    carPrice: 8 + this.state.specificationCarPrice
                })
            } else if (trim[i] === "Wagon") {
                console.log("wagon")
                this.setState({
                    carPrice: 6 + this.state.specificationCarPrice
                })
            } else if (trim[i] === "Convertible") {
                console.log("Convertible")
                this.setState({
                    carPrice: 3 + this.state.specificationCarPrice
                })
            } else if (trim[i] === "Coupe") {
                console.log("Coupe")
                this.setState({
                    carPrice: 2 + this.state.specificationCarPrice
                })
            } else if (trim[i] === "Hatchback") {
                console.log("Hatchback")
                this.setState({
                    carPrice: 1 + this.state.specificationCarPrice
                })
            } else if (trim[i] === "SUV") {
                console.log("suv")
                this.setState({
                    carPrice: 30 + this.state.specificationCarPrice
                })
            } else if (trim[i] === ""){
                console.log("old")
                this.setState({
                    carPrice: 30 + this.state.specificationCarPrice
                })
            } else if (trim[i] === "Minivan") {
                console.log("Minivan");
                this.setState({
                    carPrice: 40 + this.state.specificationCarPrice
                })
            } else if (trim[i] === "Van") {
                console.log("Van")
                this.setState({
                    carPrice: 100 + this.state.specificationCarPrice
                })
            } else if (trim[i] === "Crew") {
                console.log("Crew Cab")
                this.setState({
                    carPrice: 21 + this.state.specificationCarPrice
                })
            } else if (trim[i] === "Extended") {
                console.log("Extended Cab")
                this.setState({
                    carPrice: 25 + this.state.specificationCarPrice
                })
            } else if (trim[i] === "Regular") {
                console.log("Regular Cab")
                this.setState({
                    carPrice: 40 + this.state.specificationCarPrice
                })
            } else if (trim[i] === "Double") {
                console.log("Double Cab")
                this.setState({
                    carPrice: 50 + this.state.specificationCarPrice
                })
            } else if (trim[i] === "SuperCrew") {
                console.log("SuperCrew")
                this.setState({
                    carPrice: 50 + this.state.specificationCarPrice
                })
            } else if (trim[i] === "SuperCab") {
                console.log("SuperCab")
                this.setState({
                    carPrice: 50 + this.state.specificationCarPrice
                })
            } else if ([trim[i] === "Select trim"]) {
                this.setState({
                    carPrice: null
                })
            } else {
                console.log("old")
                this.setState({
                    carPrice: 30 + this.state.specificationCarPrice
                })
            } 
        this.setState({
            carPrice: this.state.carPrice + this.state.specificationCarPrice
        })
        console.log(this.state.carPrice);
    
        }
    });
    console.log(this.state.DDL4);
    var trim = e.target.value.split(" ");
    console.log(trim);

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