'use strict';

var monggose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 4300;

app.listen(port, function(){
    console.log('entro');
});