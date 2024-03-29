import React, { Component } from 'react'
import JsonData from "./csvjson.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export class UserCar extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
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
        yearPrice: null,
        specificationCarPrice: null,
        JsonData: JsonData,
        carPrice: this.props.carPrice,
        modelPrice: null,
        makePrice: null
        }
    }    


    selectYear(e) {
        this.props.year(e.target.value);
        // this.props.handleChange(year = year, e = e.target.value);
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
            yearPrice: null,
            specificationCarPrice: null,
            carPrice: null
        }
    );
        var year = e.target.value
        if (year == 2023) {
            this.setState({
                yearPrice: 50
            }, () => {
                console.log(this.state.yearPrice);
            })
        } else if (year < 2023 && year > 2014) {
            this.setState({
                yearPrice: 30
            }, () => {
                console.log(this.state.yearPrice);
            })
        } else if (year < 2016 && year > 2009 ) {
            this.setState({
                yearPrice: 15
            }, () => {
                console.log(this.state.yearPrice);
            })
        } else if (year < 2010 && year > 1999) {
            this.setState({
                yearPrice: 10
            }, () => {
                console.log(this.state.yearPrice);
            })
        } else if (year < 2000 && year >= 1980 ) {
            this.setState({
                yearPrice: 15
            }, () => {
                console.log(this.state.yearPrice);
            })
        } else if (year < 1980 && year >= 1960) {
            this.setState({
                yearPrice: 50
            }, () => {
                console.log(this.state.yearPrice);
            })
        } else if (year < 1960) {
            this.setState({
                yearPrice: 70
            }, () => {
                console.log(this.state.yearPrice);
            })
        }
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
    this.props.model(e.target.value);
    this.setState({
        selectModel: e.target.value,
        selectTrim: "",
        DDL3: [],
        DDL4: [],
        carTrims: [],
        specificationCarPrice: null,
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
                specificationCarPrice: this.state.yearPrice + this.state.modelPrice
            }, () => {
                console.log(this.state.specificationCarPrice);
                this.props.carPrice(this.state.specificationCarPrice);
            })
        })

    } else if (e.target.value.toLowerCase() === "bmw" || e.target.value.toLowerCase() === "cadillac" || e.target.value.toLowerCase() === "infiniti" || e.target.value.toLowerCase() === "jaguar" || e.target.value.toLowerCase() === "land rover" || e.target.value.toLowerCase() === "lexus" || e.target.value.toLowerCase() === "mercedes-benz" || e.target.value.toLowerCase() === "porsche") {
        this.setState({
            modelPrice: 70
        }, () => {
            this.setState({
                specificationCarPrice: this.state.yearPrice + this.state.modelPrice
            }, () => {
                console.log(this.state.specificationCarPrice);
                this.props.carPrice(this.state.specificationCarPrice);
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
    this.props.make(e.target.value);
    this.setState({
        selectMake: e.target.value,
        selectTrim: "",
        DDL4: [],
        carTrims: [],
        specificationCarPrice: null,
        makePrice: null,
        carPrice: null
    });
    if (e.target.value.toLowerCase() === "nsx" || e.target.value.toLowerCase() === "4c" || e.target.value.toLowerCase() === "8c competizione" || e.target.value.toLowerCase() === "atom" || e.target.value.toLowerCase() === "db7" || e.target.value.toLowerCase() === "db9" || e.target.value.toLowerCase() === "dbs" || e.target.value.toLowerCase() === "one-77" || e.target.value.toLowerCase() === "rapide" || e.target.value.toLowerCase() === "vanquish" || e.target.value.toLowerCase() === "vantage" || e.target.value.toLowerCase() === "r8" || e.target.value.toLowerCase() === "tt" || e.target.value.toLowerCase() === "r8" || e.target.value.toLowerCase() === "i8" || e.target.value.toLowerCase() === "m8" || e.target.value.toLowerCase() === "z3" || e.target.value.toLowerCase() === "z8" || e.target.value.toLowerCase() === "gt-r" || e.target.value.toLowerCase() === "gt-r" ) {
        console.log(e.target.value); 
        this.setState({
            makePrice: 200
        }, () => {
            this.setState({
                specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice
            }, () => {
                console.log(this.state.specificationCarPrice);
                this.props.carPrice(this.state.specificationCarPrice);
            })
        })
    } else if (e.target.value.toLowerCase() === "m5" || e.target.value.toLowerCase() === "m3") {
        console.log(e.target.value); 
        this.setState({
            makePrice: 50
        }, () => {
            this.setState({
                specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice
            }, () => {
                console.log(this.state.specificationCarPrice);
                this.props.carPrice(this.state.specificationCarPrice);
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
    this.setState({carTrims: newArray.sort()})

});
}
selectTrim(e) {
    this.props.trim(e.target.value);
    console.log(e.target.value)
    this.setState({
        selectTrim: e.target.value,
        carPrice: null,
        specificationCarPrice: null

    }, () => {
         var trim = e.target.value.split(" ");
    
        for (var i = 0; i < trim.length; i++) {
            if (trim[i] === "Sedan") {
                console.log("sedan")
                console.log(this.state.carPrice);
                this.setState({
                    carPrice: 10
                }, () => {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })    
                return           
             } else if (trim[i] === "Wagon") {
                console.log("wagon")
                this.setState({
                    carPrice: 6
                }, () => {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
                return           
             } else if (trim[i] === "Convertible") {
                console.log("Convertible")
                this.setState({
                    carPrice: 3
                }, ()=>{
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                }) 
                return           
            } else if (trim[i] === "Coupe") {
                console.log("Coupe")
                this.setState({
                    carPrice: 2
                }, () => {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
                return           
             } else if (trim[i] === "Hatchback") {
                console.log("Hatchback")
                this.setState({
                    carPrice: 1
                }, () => {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
                return
            } else if (trim[i] === "SUV") {
                console.log("suv")
                this.setState({
                    carPrice: 30
                }, () => {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
                return
            }  else if (trim[i] === "Minivan") {
                console.log("Minivan");
                this.setState({
                    carPrice: 40
                }, ()=> {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
                return
            } else if (trim[i] === "Van") {
                console.log("Van")
                this.setState({
                    carPrice: 100
                }, ()=> {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
                return
            } else if (trim[i] === "Crew") {
                console.log("Crew Cab")
                this.setState({
                    carPrice: 21 + this.state.specificationCarPrice
                }, ()=> {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
                return
            } else if (trim[i] === "Extended") {
                console.log("Extended Cab")
                this.setState({
                    carPrice: 25 + this.state.specificationCarPrice
                }, ()=> {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
                return
            } else if (trim[i] === "Regular") {
                console.log("Regular Cab")
                this.setState({
                    carPrice: 40 + this.state.specificationCarPrice
                }, ()=> {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
                return
            } else if (trim[i] === "Double") {
                console.log("Double Cab")
                this.setState({
                    carPrice: 50 + this.state.specificationCarPrice
                }, ()=> {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
                return
            } else if (trim[i] == "SuperCrew") {
                console.log("SuperCrew")
                this.setState({
                    carPrice: 50 + this.state.specificationCarPrice
                }, ()=> {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
                return
            } else if (trim[i] == "SuperCab") {
                console.log("SuperCab")
                this.setState({
                    carPrice: 50 + this.state.specificationCarPrice
                }, ()=> {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
                return
            } else if (trim[i] == "") {
                this.setState({
                    carPrice: 10 + this.state.specificationCarPrice
                }, () => {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
            } else {
                this.setState({
                    carPrice: 10 + this.state.specificationCarPrice
                }, () => {
                    this.setState({
                        specificationCarPrice: this.state.yearPrice + this.state.modelPrice + this.state.makePrice + this.state.carPrice
                    }, () => {
                        console.log(this.state.specificationCarPrice);
                        this.props.carPrice(this.state.specificationCarPrice);
                    })
                })
            }
        console.log(this.state.carPrice);
        }
    });
}

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values, handleChange} = this.props;
        var years = [];
        for (var i=2023; i>1940; i--) {
            years.push(i);
        }
        return (
    <section id="email">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={this.continue} className="contact-form">
                    <div className="form-group col-md-12">
                        <select value={this.state.year} onChange={this.selectYear.bind(this)} required
                            >
                            <option value="">Select Year</option>
                            {years.map(x=> {
                                return <option key={x}>{x}</option>
                            })}
                        </select>
                        <select value={this.state.selectModel} onChange={this.selectModel.bind(this)} required>
                            <option value="">Select model</option>
                                {this.state.carModels.map(x=> {
                                    return <option key={x}>{x}</option>
                                })}
                            </select> 
                            <select value={this.state.selectMake} onChange={this.selectMake.bind(this)} required>
                            <option value="">Select Make</option>
                                {this.state.carMakes.map(x=> {
                                    return <option key={x}>{x}</option>
                                })}
                            </select>
                            <select value={this.state.selectTrim} onChange={this.selectTrim.bind(this)} required>
                            <option value="">Select trim</option>
                                {this.state.carTrims.map(x=> {
                                    return <option key={x}>{x}</option>
                                })}
                            </select>
                            <div className="form-group col-md-12 d-flex justify-content-around">
                                <p className="card-text">Is it operable?</p>
                                <input type="radio" id="yes" value="yes"
                                name="type" onChange={handleChange("operable")} required/>
                                <label htmlFor="yes">Yes</label>
                                <input type="radio" id="no" value="no"
                                name="type" required onChange={handleChange("operable")}/>
                                <label htmlFor="no" >No</label>
                            </div>
                            <div className="form-group d-flex justify-content-between">
                                <button className="btn" onClick={this.back}>
                                    Back
                                </button>
                                <button className="btn" type="submit">
                                    Confirmation details <FontAwesomeIcon icon={faArrowRight}/>
                                </button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
           </section>
        )
    }
}

export default UserCar;