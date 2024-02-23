//server.js
var express = require('express');
const mongoose = require('mongoose');
// const Person = require('backend/models/person'); // Assuming your model is defined in this file
var app = express();
app.get('/', function(req, res) {

    mongoose.connect('mongodb://127.0.0.1:27017/test');

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        res.send('Connected to MongoDB');
        console.log('Connected to MongoDB');

        mongoose.disconnect();
    });
})
var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})