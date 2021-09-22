"use strict";

var express = require("express");

var routes = require("./routes");

var path = require("path");

var PORT = process.env.PORT || 3001;
var app = express();

var cors = require('cors');

app.use(cors()); // Use this after the variable declaration

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://boiling-badlands-51524.herokuapp.com"); // update to match the domain you will make the request from

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', function (req, res, next) {// Handle the get for this route
});
app.post('/', function (req, res, next) {// Handle the post for this route
}); // Define middleware here

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express["static"](path.join(__dirname, 'client/build'))); // Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  app.use(express["static"]("client/build"));
} // Define API routes here


app.use(routes);
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});
app.listen(process.env.PORT || 3003, function () {
  console.log("\uD83C\uDF0E ==> API server now on port ".concat(PORT, "!"));
});