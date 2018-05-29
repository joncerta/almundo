'use strict'

var express = require('express');
var HotelsController = require('../controllers/hotels');

var api = express.Router();

//api.get('/hotels/:name', HotelsController.getHotelByName);
api.get('/hotels', HotelsController.getHotels);

module.exports = api;