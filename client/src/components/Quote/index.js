import { raw } from "body-parser";
import React, { Component } from "react";
import zones from "../../assets/zones/zones.json";
import prices from "../../assets/zones/price_list.json";

import "./style.css";
import API from "../utils/Api";
const Parse = require('parse/node');

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'CJjAdomSS5bVBLni5O8HKHQW3qkzo0LWxDXj7One', // This is your Application ID
  'ZwD9iYseS8vdTTrpwyHpnN62gWs1q8Yl7Ub6vZRY', // This is your Javascript key
  'M5H6raG8AIsbU1KZsqUcwMMdwjD4vTDWLGoMMH31' // This is your Master key (never use it in the frontend)
);
class Quote extends Component {

    state = {
        puPrice: null,
        delPrice: null,
        puAreaCode: null, 
        delAreaCode: null
    }
    componentDidMount() {
        // const apiURL = ""
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
        var puAreaCode = puZipCodeToString.slice(0,3);
        var delAreaCode = delZipCodeToString.slice(0,3);
        console.log( "Pick up area code is " + puAreaCode + ", delivery area code is " + delAreaCode);
        var puPrice = "";
        var delPrice = "";
        this.areaCodeGet(puAreaCode, delAreaCode);
        // this.areaCodeGet(delAreaCode);
        // const collections = [];
        // var newAddress ={
        //     pickUp: this.refs.puZip.value,
        //     deliivery: this.refs.delZip.value
        // }
        // collections.push(newAddress)
        // console.log(newAddress);
        // this.setState({address: newAddress})
        // this.apiCall();

    }

    api = () => {
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
                console.log(Make);
                console.log(Year);
                console.log(Category);
                console.log(Model);
              }
            } catch (error) {
              console.error('Error while fetching Car_Model_List_BMW', error);
            }
          })();
    }
    areaCodeGet = (code) => {
        var code = code;
        for (var i = 0; zones.zones.length > i; i += 1) {
            for (var k in zones.zones[i].areaCodes ) {
                // console.log(zones.zones[i].areaCodes[k])
                if (zones.zones[i].areaCodes[k] == puAreaCode) {
                    puAreaCode = zones.zones[i].zone;
                    // console.log(puareaCode);
                    // this.priceGet(code);
                    this.setState({
                        puAreaCode: 
                    })
                    return puAreaCode;
                }   
            }
        }
        for (var i = 0; zones.zones.length > i; i += 1) {
            for (var k in zones.zones[i].delAreaCode ) {
                // console.log(zones.zones[i].areaCodes[k])
                if (zones.zones[i].areaCodes[k] == delAreaCode) {
                    delAreaCode = zones.zones[i].zone;
                    // console.log(puareaCode);
                    // this.priceGet(code);
                    return delAreaCode;
                }   
            }
        }
        console.log(puAreaCode, delAreaCode);
        this.priceGet(puAreaCode, delAreaCode);
    }
    priceGet = (puAreaCode, delAreaCode) => {
        console.log(puAreaCode, delAreaCode);
        var puZone = puZone;
        var delZone = delZone;
        for (var i = 0; prices.prices.length > i; i += 1) {
            if (prices.prices[i].zone == puZone) {
                console.log(prices.prices[i].price);
                var price = prices.prices[i].price;
                this.setState({
                    puPrice: prices.prices[i].price
                })
                return price;
            }
        }
        console.log(this.state.puPrice);
    }
    // apiCall = () => {
//         console.log(this.refs.puZip.value);
//         console.log(this.refs.delZip.value);
//         var myHeaders = new Headers();
//         myHeaders.append("Host", "api.shipengine.com");
//         myHeaders.append("API-Key", "sG3jXqt54aYMIADZj3HxdqH6JeZ+U3GaHlj/nq64KBQ");
//         myHeaders.append("Content-Type", "application/json");
//         myHeaders.append("Access-Control-Allow-Origin", "*");
//         myHeaders.append("Origin","https://api.shipengine.com");
//         myHeaders.append("Access-Control-Allow-Credentials" , "true");
//         myHeaders.append('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//         myHeaders.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         // myHeaders.append("credentials",  {
//         //     "key": "DOA9lvaPP9guNiSQ",
//         //     "account_number": "710535191",
//         //     "secret": "Spot Quote Authentication Key generated by the carrier used for volume pricing only.",
//         //     "password": "R49WOkYGU2mN27UftP3tkO4jP",
//         //     "securitycode": "710535191",
//         //     "username": "254064012"
//         //  });
//          var raw = JSON.stringify({
             
//         var requestOptions = {
//           method: 'POST',
//           headers: myHeaders,
//           body: raw,
//           redirect: 'follow'
//         };
        
//         fetch("/v-beta/ltl/spot-quotes/f6eb7798-3955-440d-a9e1-a4fb39f61921", requestOptions)
//           .then(response => (response))
//           .then(result => console.log(JSON.stringify(result)))
//           .catch(error => console.log('error', error));

//    this.newAddress = () => {
//         console.log("here")
//     }
//     }
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
                <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>submit</button>
                </form>
                <p>{this.state.puPrice}</p>
                </div>
        </section>
    )
    }
}
export default Quote;