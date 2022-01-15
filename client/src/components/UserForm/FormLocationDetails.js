import React, { Component } from 'react'
import zones from "../../assets/zones/zones.json";
import prices from "../../assets/zones/price_list.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { json } from 'body-parser';


export class FormUserDetails extends Component {

    state = {
        puZone: null,
        delZone: null,
        puPrice: null,
        delPrice: null,
        finalPrice: null,
        milePrice: null,
        loading: false, 
        setLoading: false,
        puCalculator: null,
        delCalculator: null,
        }  
    continue = e => {
        e.preventDefault();
        console.log(this.props.state.puZip);
        this.handleFormSubmit();
    }

     handleFormSubmit = () => {
        // console.log(this.state.carPrice);
        // event.preventDefault();
        this.setState({
            loading: true
        })
        var puZipCodeToString = String(this.props.state.puZip);
        var delZipCodeToString = String(this.props.state.delZip);
        var puAreaCode = puZipCodeToString.slice(0,3);
        var delAreaCode = delZipCodeToString.slice(0,3);
        console.log( "Pick up area code is " + puAreaCode + ", delivery area code is " + delAreaCode);
        this.milePriceApiCall(puAreaCode, delAreaCode);    
        this.setState({
            puCalculator: puAreaCode,
            delCalculator: delAreaCode
        })
        puZipCodeToString = null; 
        delZipCodeToString = null;
        puAreaCode = null; 
        delAreaCode = null;
    }

    milePriceApiCall = (puAreaCode, delAreaCode) => {
        
        var myHeaders = new Headers();
        myHeaders.append("Host", "api.shipengine.com");
        myHeaders.append("API-Key", "TEST_WKICVdlwCQPVDQk5EDv2pZaTX8myOr62GOOeT7jxO1c");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*");
        myHeaders.append("Origin","https://api.shipengine.com");
        myHeaders.append("Access-Control-Allow-Credentials" , "true");
        myHeaders.append('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        myHeaders.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
         var raw = JSON.stringify({
            "carrier_ids": [
                "se-656576"
              ],
              "from_country_code": "US",
              "from_postal_code": this.props.state.puZip,
              "to_country_code": "US",
              "to_postal_code": this.props.state.delZip,
              "weight": {
                "value": 1,
                "unit": "ounce"
              },
              "dimensions": {
                "unit": "inch",
                "length": 10,
                "width": 10,
                "height": 50
              },
              "confirmation": "none",
              "address_residential_indicator": "no"
            })
             
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("/v1/rates/estimate", requestOptions)
        .then(response => response.text())
        .then(result => { 
            console.log(result);
            console.log(JSON.parse(result));
            console.log(JSON.parse(result).length);
            const resultLenght = JSON.parse(result).length;
            for (var i = 0; resultLenght > i; i++) {
                if (JSON.parse(result)[i].service_code === "fedex_ground") {
                    this.setState({
                        milePrice: JSON.parse(result)[i].shipping_amount.amount*11.4
                    }, ()=> {
                        console.log("mile price " +this.state.milePrice);
                    });
                    this.areaZoneGet(puAreaCode, delAreaCode);
                    return
                }
            }
        })
        .catch(error => console.log('error', error));
    } 
     
    areaZoneGet = (puAreaCode, delAreaCode) => {
        var puAreaCode = puAreaCode;
         var delAreaCode = delAreaCode;
         for (var i = 0; zones.zones.length > i; i += 1) {
             for (var k in zones.zones[i].areaCodes ) {
                 if (zones.zones[i].areaCodes[k] === puAreaCode) {
                     puAreaCode = zones.zones[i].zone;
                     this.setState({
                         puZone: zones.zones[i].zone 
                     })
                 }   
             }
         }
         for (var m = 0; zones.zones.length > m; m += 1) {
             for (var n in zones.zones[m].areaCodes ) {
                 if (zones.zones[m].areaCodes[n] === delAreaCode) {
                     delAreaCode = zones.zones[m].zone;
                     this.setState({
                         delZone: zones.zones[m].zone 
                     })
                 }   
             }
         }
         console.log(puAreaCode, delAreaCode);
         this.priceforZoneGet(puAreaCode, delAreaCode);
     }
    priceforZoneGet = (puAreaCode, delAreaCode) => {
         var puZone = puAreaCode;
         var delZone = delAreaCode;
         var puPrice = null;
         var delPrice = null;
         var finalPrice = null;
         for (var i = 0; prices.prices.length > i; i += 1) {
             if (prices.prices[i].zone === puZone) {
                 console.log(prices.prices[i].price);
                  puPrice = prices.prices[i].price;
             }
         }
         for (var m = 0; prices.prices.length > m; m += 1) {
             if (prices.prices[m].zone === delZone) {
                 console.log(prices.prices[m].price);
                 delPrice = prices.prices[m].price;
             }
         }
         var extraCharge = null;
         var finalPrice;
         if (puPrice > delPrice) {
             console.log(delAreaCode);
             extraCharge = (delPrice/100)*55;
            //  console.log("extra charge " + extraCharge);
             finalPrice = (puPrice*2 + delPrice + extraCharge)/15;
            //  console.log("final price " + finalPrice);
            //  console.log(Math.round(finalPrice));
            console.log( "mile price " +this.state.milePrice);
            if (this.state.milePrice > 1000 && this.state.milePrice < 1300) {
            //     this.setState({
            //         milePrice: this.state.milePrice*1.8
            //     }, () => {
            //        console.log(this.state.milePrice);
            //    })
            } else if (this.state.milePrice > 650 && this.state.milePrice < 1000) {
                this.setState({
                    milePrice: this.state.milePrice*2.2
                }, () => {
                   console.log(this.state.milePrice);
               })
            }
            else if (this.state.milePrice > 600 && this.state.milePrice < 650) {
                this.setState({
                    milePrice: this.state.milePrice*2.6
                }, () => {
                   console.log(this.state.milePrice);
               })
            } else 
            if (this.state.milePrice > 500 && this.state.milePrice < 600) {
                this.setState({
                    milePrice: this.state.milePrice*2.78
                }, () => {
                   console.log(this.state.milePrice);
               })
            } else
             if (this.state.milePrice > 450 && this.state.milePrice < 500) {
                 this.setState({
                     milePrice: this.state.milePrice*3.3
                 }, () => {
                    console.log(this.state.milePrice);
                })
             } else 
             if (this.state.milePrice > 400 && this.state.milePrice < 450) {
                this.setState({
                    milePrice: this.state.milePrice*2.95
                }, () => {
                   console.log(this.state.milePrice);
               })
             } else
             if (this.state.milePrice > 350 && this.state.milePrice < 400) {
                this.setState({
                    milePrice: this.state.milePrice*3
                }, () => {
                   console.log(this.state.milePrice);
               })
             } else
             if (this.state.milePrice > 325 && this.state.milePrice < 350) {
                 this.setState({
                     milePrice: this.state.milePrice*3.9
                 }, () => {
                    console.log(this.state.milePrice);
                })
             } else 
             if (this.state.milePrice > 300 && this.state.milePrice < 325) {
                 if (this.state.puCalculator === "336" && this.state.delCalculator === "282") {
                    this.setState({
                        milePrice: this.state.milePrice*1.2
                    }, () => {
                       console.log(this.state.milePrice);
                   })
                 } else if (this.state.puCalculator === "336" && this.state.delCalculator === "389") {
                    this.setState({
                        milePrice: this.state.milePrice*1.7
                    }, () => {
                       console.log(this.state.milePrice);
                   })
                 } else if (this.state.puCalculator === "572" && this.state.delCalculator === "810") {
                    this.setState({
                        milePrice: this.state.milePrice*4
                    }, () => {
                       console.log(this.state.milePrice);
                   })
                  } else if (this.state.delCalculator === "978") {
                    this.setState({
                        milePrice: this.state.milePrice*2.6
                    }, () => {
                       console.log(this.state.milePrice);
                   })
                  } else {
                    this.setState({
                        milePrice: this.state.milePrice*1.9
                    }, () => {
                    console.log(this.state.milePrice);
                })
                }
             } else 
             if (this.state.milePrice > 250 && this.state.milePrice < 300){
                this.setState({
                    milePrice: this.state.milePrice*1.8
                }, () => {
                   console.log(this.state.milePrice);
               })
             } else if (this.state.milePrice > 200 && this.state.milePrice < 250) {
                this.setState({
                    milePrice: this.state.milePrice*1.9
                }, () => {
                   console.log(this.state.milePrice);
               })
             } else
             if (this.state.milePrice > 150 && this.state.milePrice < 200) {
                 this.setState({
                     milePrice: this.state.milePrice*1.2
                 }, () => {
                    console.log(this.state.milePrice);
                })
             } else if (this.state.milePrice > 100 && this.state.milePrice < 150) {
                this.setState({
                    milePrice: this.state.milePrice*12
                }, () => {
                   console.log(this.state.milePrice);
               })
             }
             var finalPrice1 = finalPrice + this.state.milePrice;
             this.setState({finalPrice: finalPrice1}, ()=> {
                 console.log("finalprie1 " +this.state.finalPrice);
             })
             this.props.milePrice(Math.round(this.state.finalPrice));
             this.props.nextStep();
             return finalPrice;
         } else if (puPrice < delPrice) {
             extraCharge = (puPrice/100)*15;
             finalPrice = ((puPrice + delPrice + extraCharge)/100)*35;
             if (this.state.milePrice > 660) {
                 this.setState({  
                     milePrice: this.state.milePrice*2.6
                 }, () => {
                    console.log(this.state.milePrice);
                })
             } else if (this.state.milePrice > 650 && this.state.milePrice < 660){
                 this.setState({
                     milePrice: this.state.milePrice*1.25
                 }, () => {
                    console.log(this.state.milePrice);
                })
             }  else if (this.state.milePrice > 630 && this.state.milePrice < 650) {
                this.setState({
                    milePrice: this.state.milePrice*1.25
                }, () => {
                   console.log(this.state.milePrice);
               })
             } else if (this.state.milePrice > 620 && this.state.milePrice < 630) {
                this.setState({
                    milePrice: this.state.milePrice*1.5
                }, () => {
                   console.log(this.state.milePrice);
               })
             } else if (this.state.milePrice > 500 && this.state.milePrice < 600) {
                this.setState({
                    milePrice: this.state.milePrice*1.5
                }, () => {
                   console.log(this.state.milePrice);
               })
             } else if (this.state.milePrice > 450 && this.state.milePrice < 500) {
                this.setState({
                    milePrice: this.state.milePrice*2.9
                }, () => {
                   console.log(this.state.milePrice);
               })

             } else if (this.state.milePrice > 370 && this.state.milePrice < 400) {
                this.setState({
                    milePrice: this.state.milePrice*2.4
                }, () => {
                   console.log(this.state.milePrice);
               })
             }
             else if (this.state.milePrice > 350 && this.state.milePrice < 370) {
                 this.setState({
                     milePrice: this.state.milePrice*1.6
                 }, () => {
                    console.log(this.state.milePrice);
                })
             } 
             else if (this.state.milePrice > 300 && this.state.milePrice < 350) {
                this.setState({
                    milePrice: this.state.milePrice*1.1
                }, () => {
                   console.log(this.state.milePrice);
               })
             } else if (this.state.milePrice > 250 && this.state.milePrice < 300) {
                this.setState({
                    milePrice: this.state.milePrice*0.6
                }, () => {
                   console.log(this.state.milePrice);
               })
             }
             else if (this.state.milePrice > 200 && this.state.milePrice < 250) {
                this.setState({
                    milePrice: this.state.milePrice*0.02
                }, () => {
                   console.log(this.state.milePrice);
                   finalPrice = finalPrice*0.75;
               })
             } else if (this.state.milePrice > 190 && this.state.milePrice < 200) {
                this.setState({
                    milePrice: this.state.milePrice*0.1
                }, () => {
                    console.log(this.state.milePrice);
                })
                finalPrice = finalPrice*0.85;
             }
             else if (this.state.milePrice > 150 && this.state.milePrice < 190) {
                 this.setState({
                     milePrice: this.state.milePrice*0.6
                 }, () => {
                     console.log(this.state.milePrice);
                 })
             }
             var finalPrice1 = finalPrice + this.state.milePrice;
             this.setState({finalPrice: finalPrice1}, ()=> {
                 console.log(this.state.finalPrice);
             })
             this.props.milePrice(Math.round(this.state.finalPrice));
             this.props.nextStep();
             return finalPrice;
 
         }  else if (puPrice === delPrice) {
            if ( this.state.milePrice > 350) {
                this.setState({
                    milePrice: this.state.milePrice*2.2
                }, ()=> {
                    console.log(this.state.milePrice);
                })
            } else if (this.state.milePrice > 300 && this.state.milePrice < 350) {
                this.setState({
                    milePrice: this.state.milePrice*3
                }, ()=> {
                    console.log(this.state.milePrice);
                })
            } else if(this.state.milePrice > 250 && this.state.milePrice < 300) {
                this.setState({
                    milePrice: this.state.milePrice
                }, ()=> {
                    console.log(this.state.milePrice);
                })
            } else if (this.state.milePrice > 200 && this.state.milePrice < 250) {
                this.setState({
                    milePrice: this.state.milePrice*0.9
                }, ()=> {
                    console.log(this.state.milePrice);
                })
            }
             else if (this.state.milePrice > 175 && this.state.milePrice < 200) {
                this.setState({
                    milePrice: this.state.milePrice*0.01
                })
                this.setState({finalPrice: this.state.milePrice}, ()=> {
                    console.log(this.state.finalPrice);
                })
            } else if (this.state.milePrice > 150 && this.state.milePrice < 175) {
                this.setState({
                    milePrice: this.state.milePrice*0.3
                }, ()=> {
                    console.log(this.state.milePrice);
                })
            }
            extraCharge = (puPrice/100)*5;
            finalPrice = ((puPrice + delPrice + extraCharge)/100)*15;
            var finalPrice1 = finalPrice + this.state.milePrice;
            this.setState({finalPrice: finalPrice1}, ()=> {
                console.log(this.state.finalPrice);
            })
            this.props.milePrice(Math.round(this.state.finalPrice));
            this.props.nextStep();
            return finalPrice;
         }
         this.setState({
            milePrice: null,
            puZone: null,
            delZone: null,
            finalPrice: null
        }, () => {
            console.log(this.state);
        })                 
    }     

    render() {
        const {values, handleChange} = this.props;
        return (
            <section id="email">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="card-text mt-4">Get a quote or call <u>+1 (303) 353 8362</u></h3>
                            <form onSubmit={this.continue} className="contact-form">
                                <div className="form-group col-md-12">
                                    <label htmlFor="puZip">pu zip code</label>
                                    <input type="number" className="form-control" id="puZip" aria-describedby="emailHelp" placeholder="pick up zip" onChange={handleChange("puZip")}
                                    defaultValue={values.puZip} required/>
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="delZip">delivery zip</label>
                                    <input type="number" className="form-control" id="delZip" placeholder="delivery zip"
                                    onChange={handleChange("delZip")}
                                    defaultValue={values.delZip}
                                    required/>
                                </div>
                                <div className="form-group col-md-12 d-flex justify-content-around">
                                    <p className="card-text">Transport type</p>
                                    <input type="radio" id="Open" value="open"
                                    name="type" onChange={handleChange("transportType")} required/>
                                    <label htmlFor="Open">Open</label>

                                    <input type="radio" id="enclosed" value="enclosed"
                                    name="type" required onChange={handleChange("transportType")}/>
                                    <label htmlFor="enclosed" >Enclosed</label>
                                </div>
                                <div className="form-group button">
                                    <button className="btn" type="submit">
                                        Vehicle details <FontAwesomeIcon icon={faArrowRight}/>
                                    </button>
                                    {this.state.loading ? <p className="d-block mt-4">Calculating distance...</p> : <p></p>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
           </section>
        )}
}

export default FormUserDetails;
 