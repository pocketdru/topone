import React, { Component } from "react";
import zones from "../../assets/zones/zones.json";
import prices from "../../assets/zones/price_list.json";
import "./style.css";

const Parse = require('parse/node');

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'CJjAdomSS5bVBLni5O8HKHQW3qkzo0LWxDXj7One', // This is your Application ID
  'ZwD9iYseS8vdTTrpwyHpnN62gWs1q8Yl7Ub6vZRY', // This is your Javascript key
  'M5H6raG8AIsbU1KZsqUcwMMdwjD4vTDWLGoMMH31' // This is your Master key (never use it in the frontend)
);
class Quote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            puPrice: null,
            delPrice: null,
            puAreaCode: null, 
            delAreaCode: null
        }
      }
    state = {
        puZone: null,
        delZoen: null,
        puPrice: null,
        delProce: null
    }
      handleFormSubmit = event => {
        event.preventDefault();
        var puZipCodeToString = String(this.refs.puZip.value);
        var delZipCodeToString = String(this.refs.delZip.value);
        var year = String(this.refs.year.value);
        var model = String(this.refs.model.value);
        var make = String(this.refs.make.value);
        var puAreaCode = puZipCodeToString.slice(0,3);
        var delAreaCode = delZipCodeToString.slice(0,3);
        console.log( "Pick up area code is " + puAreaCode + ", delivery area code is " + delAreaCode);

        // this.areaZoneGet(puAreaCode, delAreaCode);
        const collections = [];
        var newAddress ={
            pickUp: this.refs.puZip.value,
            deliivery: this.refs.delZip.value
        }
        collections.push(newAddress)
        this.setState({address: newAddress})
        this.carApiCall(year, model, make);
        // this.milePriceApiCall();

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
            extraCharge = (delPrice/100)*15;
            finalPrice = ((puPrice + delPrice + extraCharge)/100)*150;

            console.log(Math.round(finalPrice));
        } else if (puPrice < delPrice) {
            extraCharge = (puPrice/100)*15;
            finalPrice = ((puPrice + delPrice + extraCharge)/100)*134;
            console.log(Math.round(finalPrice));
            return finalPrice;
        }
        console.log(puPrice, delPrice);
        console.log(finalPrice);
    }
    carApiCall = (year, model, make) => {
        var carYear = year.toLowerCase();
        var carModel = model.toLowerCase();
        var carMake = make.toLowerCase();
        console.log(carYear, carModel, carMake);
        
        (async () => {
            const Car_Model_List_BMW = Parse.Object.extend('Car_Model_List_BMW');
            const query = new Parse.Query(Car_Model_List_BMW);
            // You can also query by using a parameter of an object
            // query.equalTo('objectId', 'xKue915KBG');
            try {
              const results = await query.find();
              for (const object of results) {
                // Access the Parse Object attributes using the .GET method
                const Make = object.get('Make')
                const Year = object.get('Year')
                const Category = object.get('Category')
                const Model = object.get('Model')
                if ((carMake === Model.toLowerCase()) && (carYear = Year)) {
                    console.log(Category);
                    return;
                }
                // console.log(Make);
                // console.log(Year);
                // console.log(Category);
                // console.log(Model);
              }
            } catch (error) {
              console.error('Error while fetching Car_Model_List_BMW', error);
            }
          })();
    }
    milePriceApiCall = () => {
        console.log(this.refs.puZip.value);
        console.log(this.refs.delZip.value);

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
            "from_postal_code": "90012",
            "to_country_code": "US",
            "to_postal_code": "32541",
            "weight": {
              "value": 1,
              "unit": "ounce"
            },
            "dimensions": {
              "unit": "inch",
              "length": 5,
              "width": 5,
              "height": 5
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
        .then(result => console.log(JSON.parse(result)[3].shipping_amount.amount))
        .catch(error => console.log('error', error));

   this.newAddress = () => {
        console.log("here")
    }
    }
    render() {
    return (
        <section className="quoute">
            <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">pu zip code</label>
                    <input ref="puZip" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="pick up zip"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">delivery zip</label>
                    <input ref="delZip" type="text" className="form-control" id="exampleInputPassword1" placeholder="delivery zip"/>
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">year</label>
                    <input ref="year" type="text" className="form-control" id="exampleInputPassword1" placeholder="year"/>
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">model</label>
                    <input ref="model" type="text" className="form-control" id="exampleInputPassword1" placeholder="year"/>
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">make</label>
                    <input ref="make" type="text" className="form-control" id="exampleInputPassword1" placeholder="car"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>submit</button>
                </form>
                <p>{this.state.puPrice}</p>
                </div>
        </section>
    )
    }
}
export default Quote;