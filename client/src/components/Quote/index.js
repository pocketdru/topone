import React, { Component } from "react";
import zones from "../../assets/zones/zones.json";
import prices from "../../assets/zones/price_list.json";
import "./style.css";
import emailjs from 'emailjs-com';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DropDown from "../DropDown";

class Quote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            puPrice: null,
            delPrice: null,
            carPrice: null,
            show: true,
            setShow: false 
        } 
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);  
      }
    state = {
        year: null,
        puZone: null,
        delZoen: null,
        puPrice: null,
        delProce: null,
        finalPrice: null,
        milePrice: null
    }
    handleFormSubmit = event => {
        console.log(this.state.carPrice);
        event.preventDefault();

        var puZipCodeToString = String(this.refs.puZip.value);
        var delZipCodeToString = String(this.refs.delZip.value);

        var puAreaCode = puZipCodeToString.slice(0,3);
        var delAreaCode = delZipCodeToString.slice(0,3);
        console.log( "Pick up area code is " + puAreaCode + ", delivery area code is " + delAreaCode);
        this.milePriceApiCall(puAreaCode, delAreaCode);
        // this.areaZoneGet(puAreaCode, delAreaCode);
        // const collections = [];
        // var newAddress ={
        //     pickUp: this.refs.puZip.value,
        //     deliivery: this.refs.delZip.value
        // }
        // collections.push(newAddress)
        // this.setState({address: newAddress})
    this.emailjs(event);

    }
    milePriceApiCall = (puAreaCode, delAreaCode) => {
        // console.log(this.refs.puZip.value);
        // console.log(this.refs.delZip.value);
        
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
            "from_postal_code": this.refs.puZip.value,
            "to_country_code": "US",
            "to_postal_code": this.refs.delZip.value,
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
        // .then(result => console.log(JSON.parse(result)[3].shipping_amount.amount))
        .then(result => { 
            console.log(JSON.parse(result));
            this.setState({
                milePrice: JSON.parse(result)[1].shipping_amount.amount*2.25
            }, ()=> {
                console.log("mile price " +this.state.milePrice)
            });
            this.areaZoneGet(puAreaCode, delAreaCode);

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
            extraCharge = (delPrice/100)*55;
            console.log("extra charge " + extraCharge);
            finalPrice = (puPrice*2 + delPrice + extraCharge)/15;
            console.log("final price " + finalPrice);
            console.log(Math.round(finalPrice));
            if (this.state.milePrice > 600) {
                this.setState({
                    milePrice: this.state.milePrice*1.75
                })
            } else 
            if (this.state.milePrice > 300 && this.state.milePrice < 400) {
                this.setState({
                    milePrice: this.state.milePrice*1.75
                })
            } else 
            if (this.state.milePrice > 150 && this.state.milePrice < 200) {
                this.setState({
                    milePrice: this.state.milePrice*1
                })
            }
            var finalPrice1 = finalPrice + this.state.milePrice;
            this.setState({finalPrice: finalPrice1}, ()=> {
                console.log("finalprie1 " +this.state.finalPrice);
            })
            return finalPrice;
        } else if (puPrice < delPrice) {
            extraCharge = (puPrice/100)*15;
            finalPrice = ((puPrice + delPrice + extraCharge)/100)*35;
            console.log(Math.round(finalPrice));
            if (this.state.milePrice > 660) {
                this.setState({
                    milePrice: this.state.milePrice*2.2
                })
            } else if (this.state.milePrice > 650 && this.state.milePrice < 660){
                this.setState({
                    milePrice: this.state.milePrice*1.8
                })
            } else 
            if (this.state.milePrice > 300 && this.state.milePrice < 400) {
                this.setState({
                    milePrice: this.state.milePrice*1.15
                })
            } else 
            if (this.state.milePrice > 150 && this.state.milePrice < 200) {
                this.setState({
                    milePrice: this.state.milePrice*0.4
                })
            }
            var finalPrice1 = finalPrice + this.state.milePrice;
            this.setState({finalPrice: finalPrice1}, ()=> {
                console.log(this.state.finalPrice);
            })
            return finalPrice;

        } else if (puPrice === delPrice && this.state.milePrice < 200) {
            this.setState({
                milePrice: this.state.milePrice
            })
            this.setState({finalPrice: this.state.milePrice}, ()=> {
                console.log(this.state.finalPrice);
            })
        } else if (puPrice === delPrice && this.state.milePrice > 350) {
            this.setState({
                milePrice: this.state.milePrice*2.2
            })
            extraCharge = (puPrice/100)*5;
            finalPrice = ((puPrice + delPrice + extraCharge)/100)*15;
        var finalPrice1 = finalPrice + this.state.milePrice;
        this.setState({finalPrice: finalPrice1}, ()=> {
            console.log(this.state.finalPrice);
        })
        return finalPrice;
        }
        // console.log(puPrice, delPrice);
        // console.log(finalPrice);
        // console.log(this.state.milePrice)
        // var finalPrice1 = finalPrice + this.state.milePrice;
        // this.setState({finalPrice: finalPrice1}, ()=> {
        //     console.log(this.state.finalPrice);
        // })
    }

     sendEmail = (e) => {
         console.log(e);
        e.preventDefault();
    
        emailjs.sendForm('service_752idno', 'template_f0mcw4u', e.target, 'user_Qv5eynQ9bFuznSm26mu6r')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          this.handleShow();
          e.target.reset();
      }
      handleShow() {
        this.setState({
            setShow: true
        })
      }
      handleClose() {
        this.setState({
            setShow: false
        })
      }
    render() {
        

    return (
        <section className="quoute">
            <div className="container">
                <form className="contact-form needs-validation pb-4" onSubmit={this.handleFormSubmit}>
                    <input type="hidden" name="contact_number"/>
                    <div className="form-row">
                    <div className="form-group col-md-3">     
                        <label>Your Name</label>
                        <input type="text" name="from_name" className="form-control" required/>
                    </div>
                    <div className="form-group col-md-2">
                        <label>Your Email</label>
                        <input type="email" name="from_email" className="form-control" required/>
                    </div>
                    <div className="form-group col-md-3">
                        <label>Your phone number (optional)</label>
                        <input type="tel" name="phone" className="form-control"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="puZip">pu zip code</label>
                        <input ref="puZip" type="text" className="form-control" id="puZip" aria-describedby="emailHelp" placeholder="pick up zip"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="delZip">delivery zip</label>
                        <input ref="delZip" type="text" className="form-control" id="delZip" placeholder="delivery zip"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <DropDown carPrice={this.state.carPrice}/>
                        </div>
                        <div className="form-group">
                            {/* <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>submit</button> */}
                        </div>
                    </div>
                    </div>
                    {/* <div className="form-group">
                        <label>Year, make, model of the car, and note all the modifications if any.</label>
                        <textarea name="message" required/>
                    </div> */}
                    <input type="submit" value="SEND MESSAGE" className="btn d-block mx-auto pl-4 pr-4 pt-3 pb-3" variant="primary" />
                </form>
                <p>{this.state.puPrice}</p>
            </div>
            <Modal show={this.state.setShow} onHide={this.handleClose} animation="false">
        <Modal.Header closeButton>
          <Modal.Title>Your quote is on the way!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for request. You will get your personalized shipping quote within one hour. If requested after business hours we will get back to you the following business day. </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClose}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>
        </section>
    )
    }
}
export default Quote;