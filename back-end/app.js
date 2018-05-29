'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Routes
var hotels_routes = require('./routes/hotels');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Headers http
app.use((req,res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

//Base Routes
app.use('/api', hotels_routes);

module.exports = app;