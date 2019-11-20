// Dependencies
var express = require("express");
var path = require("path");

//Express
var app = express();
var PORT = process.env.PORT || 3000;

//Express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Customer info arrays
var tableList = [
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerID: ""
    }
]

var waitList = [
    {
        customerName: "",
        phoneNumber: "",
        customerEmail: "",
        customerID: ""
    }
]

//Routes


//GET and POST from user to server


//Start server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });