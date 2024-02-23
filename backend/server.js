//server.js
var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('Hello World12390123');
})
var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})