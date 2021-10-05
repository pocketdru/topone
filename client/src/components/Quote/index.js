import { raw } from "body-parser";
import React, { Component } from "react";
import API from "../utils/Api";
import zones from "../../assets/zones/zones.json";
import "./style.css";

class Quote extends Component {

    componentDidMount() {
        // const apiURL = ""
    }
    state = {
        price: 0,
        address: [],
        quote: [],
        bookSearch: ""
      };
      handleFormSubmit = event => {
        event.preventDefault();
        var zipCodeToString = String(this.refs.puZip.value);
        console.log(zones.zone_126[0]);
        console.log(zipCodeToString.slice(0,3));
        var areaCode = zipCodeToString.slice(0,3);
        console.log(areaCode);
        if (zones.zone_126[0] == areaCode) {
            console.log("It's a zone 126!")
        } else {
            console.log("Wrong Area");
        }
        var results = [];
        var searchField = ""
        // console.log(slo)
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
             
//             "shipment": {
//                 "carrier_id": "ef865ffe-3b16-4ae2-91d2-95dfb3725a11",
//                   "pickup_date": "2021-10-10",
//                   "packages": [
//                       {
//                       "code": "PKG",
//                       "freight_class": 60,
//                       "nmfc_code": "161630",
//                       "description": "Paperback books",
//                       "dimensions": {
//                           "width": 40,
//                           "height": 40,
//                           "length": 48,
//                           "unit": "inches"
//                       },
//                       "weight": {
//                           "value": 1500,
//                           "unit": "pounds"
//                       },
//                       "quantity": 3,
//                       "stackable": false,
//                       "hazardous_materials": false
//                       }
//                   ],
//                   "options": [
//                       {
//                       "code": "LFTP"
//                       },
//                       {
//                       "code": "HAZ",
//                       "attributes": {
//                           "name": "Contact Person",
//                           "phone": "7704865900"
//                       }
//                       }
//                   ],
//                   "ship_from": {
//                       "account": "710535191",
//                       "contact": {
//                           "name": "John Doe",
//                           "phone_number": "1111111111",
//                           "email": "johndoe@test.com"
//                       },
//                       "address": {
//                       "company_name": "Example Corp.",
//                       "address_line1": "4009 Marathon Blvd",
//                       "city_locality": "Austin",
//                       "state_province": "TX",
//                       "postal_code": "78756",
//                       "country_code": "US"
//                       }
//                   },
//                   "ship_to": {
//                       "account": "710535191",
//                       "contact": {
//                           "name": "John Doe",
//                           "phone_number": "1111111111",
//                           "email": "johndoe@test.com"
//                       },
//                       "address": {
//                       "company_name": "Widget Company",
//                       "address_line1": "525 S Winchester Blvd",
//                       "city_locality": "San Jose",
//                       "state_province": "CA",
//                       "postal_code": "95128",
//                       "country_code": "US"
//                       }
//                   },
//                   "bill_to": {
//                       "type": "third_party",
//                       "payment_terms": "prepaid",
//                       "account": "710535191",
//                       "address": {
//                       "company_name": "Example Corp.",
//                       "address_line1": "4009 Marathon Blvd",
//                       "city_locality": "Austin",
//                       "state_province": "TX",
//                       "postal_code": "78756",
//                       "country_code": "US"
//                       },
//                       "contact": {
//                           "name": "John Doe",
//                           "phone_number": "1111111111",
//                           "email": "johndoe@test.com"
//                       }
//                   },
//                   "requested_by": {
//                       "company_name": "Example Corp.",
//                       "contact": {
//                       "name": "John Doe",
//                       "phone_number": "1111111111",
//                       "email": "johndoe@test.com"
//                       }
//                   }
//               },
//               "shipment_measurements": {
//                   "total_linear_length": {
//                   "value": 48,
//                   "unit": "inches"
//                   },
//                   "total_width": {
//                   "value": 48,
//                   "unit": "inches"
//                   },
//                   "total_height": {
//                   "value": 48,
//                   "unit": "inches"
//                   },
//                   "total_weight": {
//                   "value": 10,
//                   "unit": "pounds"
//                   }
//               }
//          })
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
                <p>{this.state.price}</p>
                </div>
        </section>
    )
    }
}
export default Quote;