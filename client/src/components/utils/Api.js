// import axios from "axios";

// // The getRecipes method retrieves recipes from the server
// // It accepts a "query" or term to search the recipe api for
// export default {
//   search: function(query) {
//     return axios.get("https://api.shipengine.com/v1/labels", { params: { q: query } });
//   },

//   saveBook: function(bookData) {
//     console.log(bookData)
//     console.log("Book saved");
//     return axios.post("/api/books/", bookData);
//   },

//   getBooks: function(){
//     console.log('getting books')
//     return (axios.get('/api/books/')
//     );
//   },
//   deleteBook: function(id){
//     return axios.delete('/api/books/' + id)
//   }
// };  

// var request = require('request');
// var options = {
//   'method': 'POST',
//   'url': 'https://api.shipengine.com/v1/addresses/validate',
//   'headers': {
//     'Host': 'api.shipengine.com',
//     'API-Key': 'TEST_WKICVdlwCQPVDQk5EDv2pZaTX8myOr62GOOeT7jxO1c',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify([{"address_line1":"525 S Winchester Blvd","city_locality":"San Jose","state_province":"CA","postal_code":"95128","country_code":"US"}])

// };
// request(options, function (error, response) { 
//   if (error) throw new Error(error);
//   console.log(response.body);
// });
