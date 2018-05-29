'use strict';

var path = require('path');
var fw = require('fs');

var Hotel = require('../models/hotel');

var urlJson = '../data/data.json';

function getHotels(req, res) {
    res.status(200).json(require(urlJson));
}

/*function getHotelByName(req, res) {
    var hotelName = req.params.name;
    
    console.log('resHOAL',Hotel["name"]);
    Hotel.findById(hotelName, (err, hotel) => {
        console.log('response', res);
    })
    res.status(200).json(require('../data/data.json'));
   // res.status(200).json(require('../data/data.json'));

}*/

module.exports = {
    getHotels,
    //getHotelByName
}