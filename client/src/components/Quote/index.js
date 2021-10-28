import React, { Component } from "react";
import zones from "../../assets/zones/zones.json";
import prices from "../../assets/zones/price_list.json";
import "./style.css";
import DropDown from "../DropDown";

class Quote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            puPrice: null,
            delPrice: null,
            puAreaCode: null, 
        }
      }
    state = {
        year: null,
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

        this.areaZoneGet(puAreaCode, delAreaCode);
        const collections = [];
        var newAddress ={
            pickUp: this.refs.puZip.value,
            deliivery: this.refs.delZip.value
        }
        collections.push(newAddress)
        this.setState({address: newAddress})
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
    }
    render() {

    return (
        <section className="quoute">
            <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="puZip">pu zip code</label>
                    <input ref="puZip" type="text" className="form-control" id="puZip" aria-describedby="emailHelp" placeholder="pick up zip"/>
                    <label htmlFor="delZip">delivery zip</label>
                    <input ref="delZip" type="text" className="form-control" id="delZip" placeholder="delivery zip"/>
                </div>
                <DropDown />
                <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>submit</button>
                </form>
                <p>{this.state.puPrice}</p>
                </div>
        </section>
    )
    }
}
export default Quote;